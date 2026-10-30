import {
  editablePages,
  validateSettings,
  type SettingsDocument,
  type PageId,
} from './siteSettings';

const repository = 'diogotupi/instituto-2630';
const root = `https://api.github.com/repos/${repository}`;
const filePath = '/contents/content/site-settings.json';
export type SettingsFile = { document: SettingsDocument; sha: string };
export type DeploymentStatus = {
  state: 'pending' | 'success' | 'failure';
  url?: string;
};

// Credentials live only in the open tab, never in a URL, browser storage or a commit.
async function request<T>(
  token: string,
  url: string,
  init: RequestInit = {},
): Promise<T> {
  const response = await fetch(url, {
    ...init,
    cache: 'no-store',
    credentials: 'omit',
    redirect: 'error',
    signal: AbortSignal.timeout(20000),
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      Authorization: `Bearer ${token}`,
      ...(init.body ? { 'Content-Type': 'application/json' } : {}),
    },
  });
  if (!response.ok) {
    if (response.status === 401)
      throw new Error(
        'A chave de acesso é inválida ou expirou. Entre novamente.',
      );
    if (response.status === 403)
      throw new Error(
        'O GitHub recusou a operação. Confira as permissões da chave ou tente novamente mais tarde.',
      );
    if (response.status === 409 || response.status === 422)
      throw new Error(
        'Outra atualização alterou o site ou a publicação foi bloqueada. Recarregue os dados antes de tentar novamente.',
      );
    if (response.status === 404)
      throw new Error(
        'A conta não tem acesso ao repositório ou o arquivo ainda não foi publicado.',
      );
    throw new Error(
      'Não foi possível falar com o GitHub. Tente novamente em instantes.',
    );
  }
  return response.json() as Promise<T>;
}
export async function loadSettings(token: string): Promise<SettingsFile> {
  const file = await request<{ content: string; sha: string }>(
    token,
    `${root}${filePath}?ref=master`,
  );
  const document = JSON.parse(
    new TextDecoder().decode(
      Uint8Array.from(atob(file.content.replace(/\s/g, '')), (c) =>
        c.charCodeAt(0),
      ),
    ),
  );
  const errors = validateSettings(document);
  if (errors.length)
    throw new Error(
      `As configurações recebidas precisam de revisão: ${errors[0]}`,
    );
  return { document, sha: file.sha };
}
export async function connectGithub(token: string) {
  const user = await request<{ login: string }>(
    token,
    'https://api.github.com/user',
  );
  const repo = await request<{ permissions?: { push?: boolean } }>(token, root);
  if (!repo.permissions?.push)
    throw new Error('Esta conta GitHub não tem permissão para editar o site.');
  const file = await loadSettings(token);
  return { login: user.login as string, file };
}
export async function publishSettings(
  token: string,
  baseline: SettingsDocument,
  draft: SettingsDocument,
) {
  const errors = validateSettings(draft);
  if (errors.length) throw new Error(errors[0]);
  const changed = editablePages.filter(
    (p) =>
      JSON.stringify(baseline.pages[p.id]) !==
      JSON.stringify(draft.pages[p.id]),
  );
  if (!changed.length) throw new Error('Não há alterações para publicar.');
  const latest = await loadSettings(token);
  for (const p of changed) {
    if (
      JSON.stringify(latest.document.pages[p.id]) !==
      JSON.stringify(baseline.pages[p.id])
    )
      throw new Error(
        `${p.name} foi alterado por outra pessoa. Recarregue os dados para não sobrescrever essa atualização.`,
      );
  }
  const merged = structuredClone(latest.document);
  for (const p of changed)
    (merged.pages as Record<PageId, unknown>)[p.id] = draft.pages[p.id];
  const bytes = new TextEncoder().encode(
    JSON.stringify(merged, null, 2) + '\n',
  );
  const content = btoa(
    Array.from(bytes, (b) => String.fromCharCode(b)).join(''),
  );
  const result = await request<{
    commit: { sha: string };
    content: { sha: string };
  }>(token, `${root}${filePath}`, {
    method: 'PUT',
    body: JSON.stringify({
      branch: 'master',
      sha: latest.sha,
      message: `Atualizar site pelo painel: ${changed.map((p) => p.name).join(', ')}`,
      content,
    }),
  });
  return {
    sha: result.commit.sha as string,
    file: { document: merged, sha: result.content.sha } as SettingsFile,
  };
}
export async function deploymentStatus(
  token: string,
  sha: string,
): Promise<DeploymentStatus> {
  const data = await request<{
    workflow_runs: {
      head_sha: string;
      status: string;
      conclusion: string | null;
      html_url: string;
    }[];
  }>(
    token,
    `${root}/actions/workflows/deploy-pages.yml/runs?head_sha=${encodeURIComponent(sha)}&per_page=5`,
  );
  const run = data.workflow_runs?.find(
    (r: { head_sha: string }) => r.head_sha === sha,
  );
  if (!run || run.status !== 'completed')
    return { state: 'pending', url: run?.html_url };
  return {
    state: run.conclusion === 'success' ? 'success' : 'failure',
    url: run.html_url,
  };
}
