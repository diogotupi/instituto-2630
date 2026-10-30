// Run against an active dev server. PLAYWRIGHT_MODULE can point to a managed runtime.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const initial = JSON.parse(fs.readFileSync(path.join(__dirname, '../content/site-settings.json'), 'utf8'));

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    let canWrite = false;
    let conflict = false;
    let writes = 0;
    let current = structuredClone(initial);
    await page.route('https://api.github.com/**', async route => {
      const request = route.request();
      const url = new URL(request.url());
      assert.equal(request.headers().authorization, 'Bearer fake-test-key');
      let body;
      if (url.pathname === '/user') body = { login: 'admin-teste' };
      else if (url.pathname === '/repos/diogotupi/instituto-2630') body = { permissions: { push: canWrite } };
      else if (url.pathname.includes('/contents/')) {
        assert.equal(url.pathname, '/repos/diogotupi/instituto-2630/contents/content/site-settings.json');
        if (request.method() === 'PUT') {
          writes++;
          const payload = request.postDataJSON();
          assert.equal(payload.branch, 'master');
          assert.equal(payload.sha, 'file-sha');
          current = JSON.parse(Buffer.from(payload.content, 'base64').toString('utf8'));
          assert.equal(current.pages.penaporta.date, '21 de novembro (sábado)');
          assert.deepEqual(current.pages.ceol, initial.pages.ceol);
          assert.ok(!payload.content.includes('fake-test-key'));
          body = { commit: { sha: 'published-sha' }, content: { sha: 'updated-file-sha' } };
        } else {
          const document = structuredClone(current);
          if (conflict) document.pages.penaporta.date = 'Alteração concorrente';
          body = { sha: 'file-sha', content: Buffer.from(JSON.stringify(document)).toString('base64') };
        }
      } else if (url.pathname.includes('/actions/')) body = { workflow_runs: [{ head_sha: 'published-sha', status: 'completed', conclusion: 'success', html_url: 'https://github.com/diogotupi/instituto-2630/actions/runs/test' }] };
      else throw new Error('Unexpected GitHub endpoint: ' + url.pathname);
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(body) });
    });
    await page.goto((process.env.ADMIN_TEST_URL || 'http://localhost:5174') + '/admin', { waitUntil: 'networkidle' });
    await page.getByLabel('Chave de acesso GitHub', { exact: true }).fill('fake-test-key');
    await page.getByRole('button', { name: 'Entrar no painel', exact: true }).click();
    await page.getByRole('alert').filter({ hasText: 'não tem permissão' }).waitFor();
    assert.equal(writes, 0);
    canWrite = true;
    await page.getByRole('button', { name: 'Entrar no painel', exact: true }).click();
    await page.getByLabel('Data da próxima turma', { exact: true }).waitFor();
    await page.getByLabel('Destino dos botões de inscrição / proposta', { exact: true }).fill('javascript:alert(1)');
    assert.equal(await page.getByRole('button', { name: 'Salvar e publicar', exact: true }).isEnabled(), false);
    await page.getByLabel('Destino dos botões de inscrição / proposta', { exact: true }).fill(initial.pages.penaporta.checkoutUrl);
    await page.getByLabel('Data da próxima turma', { exact: true }).fill('21 de novembro (sábado)');
    conflict = true;
    await page.getByRole('button', { name: 'Salvar e publicar', exact: true }).click();
    await page.getByRole('alert').filter({ hasText: 'alterado por outra pessoa' }).waitFor();
    assert.equal(writes, 0);
    conflict = false;
    await page.getByRole('button', { name: 'Salvar e publicar', exact: true }).click();
    await page.getByRole('status').filter({ hasText: 'Publicado!' }).waitFor({ timeout: 15000 });
    assert.equal(writes, 1);
    assert.equal(await page.evaluate(() => JSON.stringify(localStorage).includes('fake-test-key') || JSON.stringify(sessionStorage).includes('fake-test-key')), false);
    await page.screenshot({ path: 'tmp/admin-desktop.png', fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ path: 'tmp/admin-mobile.png', fullPage: true });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await page.getByRole('button', { name: 'Sair', exact: true }).click();
    await page.getByLabel('Chave de acesso GitHub', { exact: true }).waitFor();
    assert.equal(await page.getByLabel('Chave de acesso GitHub', { exact: true }).inputValue(), '');
    console.log('PASS: unauthorized login, unsafe links, conflict detection, single authenticated save, publication status, responsive UI and credential cleanup. No real GitHub writes were performed.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
