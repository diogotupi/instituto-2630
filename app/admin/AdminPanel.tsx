'use client';
/* eslint-disable @next/next/no-html-link-for-pages -- Static GitHub Pages document navigation. */

import { useEffect, useRef, useState, type SyntheticEvent } from 'react';
import {
  connectGithub,
  loadSettings,
  publishSettings,
  deploymentStatus,
} from '@/lib/adminGithub';
import {
  editablePages,
  fieldLabels,
  validateSettings,
  type SettingsDocument,
  type PageId,
} from '@/lib/siteSettings';
import styles from './admin.module.css';

type Session = { token: string; login: string };
type Notice = { text: string; kind: 'info' | 'success' | 'error' };

export function AdminPanel() {
  const [key, setKey] = useState('');
  const [session, setSession] = useState<Session | null>(null);
  const [baseline, setBaseline] = useState<SettingsDocument | null>(null);
  const [draft, setDraft] = useState<SettingsDocument | null>(null);
  const [selected, setSelected] = useState<PageId>('penaporta');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);
  const [commit, setCommit] = useState<string | null>(null);
  const [runUrl, setRunUrl] = useState<string | null>(null);
  const [published, setPublished] = useState(false);
  const [revision, setRevision] = useState('');
  const lock = useRef(false);
  const dirty =
    !!draft && !!baseline && JSON.stringify(draft) !== JSON.stringify(baseline);
  const errors = draft ? validateSettings(draft) : [];
  const changedPages =
    draft && baseline
      ? editablePages.filter(
          (p) =>
            JSON.stringify(draft.pages[p.id]) !==
            JSON.stringify(baseline.pages[p.id]),
        )
      : [];

  useEffect(() => {
    const leave = (event: BeforeUnloadEvent) => {
      if (dirty || busy) {
        event.preventDefault();
      }
    };
    window.addEventListener('beforeunload', leave);
    return () => window.removeEventListener('beforeunload', leave);
  }, [dirty, busy]);

  useEffect(() => {
    if (!commit || !session) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let attempts = 0;
    async function check() {
      try {
        const status = await deploymentStatus(session!.token, commit!);
        if (cancelled) return;
        if (status.url) setRunUrl(status.url);
        if (status.state === 'success') {
          setNotice({
            text: 'Publicado! A atualização foi concluída. O site pode levar alguns instantes para atualizar em todos os dispositivos.',
            kind: 'success',
          });
          setPublished(true);
          setCommit(null);
          return;
        }
        if (status.state === 'failure') {
          setNotice({
            text: 'As alterações foram salvas, mas a publicação encontrou um problema. Abra o acompanhamento para ver o resultado. A versão anterior continua disponível.',
            kind: 'error',
          });
          setCommit(null);
          return;
        }
        if (++attempts < 120) timer = setTimeout(check, 5000);
        else {
          setNotice({
            text: 'As alterações estão salvas. A publicação está demorando; acompanhe o status pelo link abaixo.',
            kind: 'info',
          });
          setCommit(null);
        }
      } catch {
        if (!cancelled) {
          setNotice({
            text: 'As alterações estão salvas, mas não conseguimos consultar a publicação. O acompanhamento exige permissão Actions: leitura na chave GitHub.',
            kind: 'info',
          });
          setRunUrl('https://github.com/diogotupi/instituto-2630/actions');
          setCommit(null);
        }
      }
    }
    timer = setTimeout(check, 3000);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [commit, session]);

  async function login(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lock.current) return;
    lock.current = true;
    setBusy(true);
    setNotice(null);
    try {
      const token = key.trim();
      const result = await connectGithub(token);
      setSession({ token, login: result.login });
      setBaseline(result.file.document);
      setDraft(structuredClone(result.file.document));
      setKey('');
      setNotice({
        text: 'Conectado. Escolha a página e altere os campos desejados.',
        kind: 'info',
      });
    } catch (error) {
      setNotice({
        text:
          error instanceof Error ? error.message : 'Não foi possível entrar.',
        kind: 'error',
      });
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  async function reload() {
    if (!session || lock.current) return;
    if (
      dirty &&
      !window.confirm(
        'Recarregar vai descartar as alterações que ainda não foram publicadas. Continuar?',
      )
    )
      return;
    lock.current = true;
    setBusy(true);
    try {
      const file = await loadSettings(session.token);
      setBaseline(file.document);
      setDraft(structuredClone(file.document));
      setNotice({ text: 'Dados atuais carregados.', kind: 'info' });
    } catch (error) {
      setNotice({
        text: error instanceof Error ? error.message : 'Falha ao carregar.',
        kind: 'error',
      });
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  async function save(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!session || !draft || !baseline || lock.current || commit) return;
    lock.current = true;
    setBusy(true);
    setPublished(false);
    setRunUrl(null);
    try {
      const result = await publishSettings(session.token, baseline, draft);
      setBaseline(result.file.document);
      setDraft(structuredClone(result.file.document));
      setCommit(result.sha);
      setRevision(result.sha);
      setNotice({
        text: 'Alterações salvas. O site está sendo publicado; normalmente isso leva alguns minutos.',
        kind: 'info',
      });
    } catch (error) {
      setNotice({
        text:
          error instanceof Error
            ? error.message
            : 'Não foi possível publicar. Seus campos continuam preenchidos.',
        kind: 'error',
      });
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  function logout() {
    if (
      dirty &&
      !window.confirm(
        'Há alterações não publicadas. Deseja sair e descartá-las?',
      )
    )
      return;
    setSession(null);
    setKey('');
    setDraft(null);
    setBaseline(null);
    setCommit(null);
    setRunUrl(null);
    setNotice(null);
    setPublished(false);
  }
  const currentPage = editablePages.find((p) => p.id === selected)!;
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <a href="/">Instituto 2630</a>
          <span>Painel de administração</span>
        </div>
        {session && (
          <div className={styles.account}>
            <span>
              Conectado como <strong>{session.login}</strong>
            </span>
            <button type="button" onClick={logout} disabled={busy}>
              Sair
            </button>
          </div>
        )}
      </header>
      {!session ? (
        <section className={styles.login}>
          <p className={styles.eyebrow}>Acesso do administrador</p>
          <h1>
            Atualize o site
            <br />
            em poucos passos.
          </h1>
          <p>
            Entre com uma chave de acesso da sua conta GitHub autorizada.
            Depois, escolha a página, altere os dados e clique em “Salvar e
            publicar”.
          </p>
          <form onSubmit={login}>
            <label htmlFor="github-key">Chave de acesso GitHub</label>
            <input
              id="github-key"
              type="password"
              autoComplete="off"
              spellCheck={false}
              value={key}
              onChange={(e) => setKey(e.target.value)}
              required
              maxLength={255}
              disabled={busy}
            />
            <button disabled={busy || !key.trim()}>
              {busy ? 'Conectando…' : 'Entrar no painel'}
            </button>
          </form>
          <details>
            <summary>Como autorizar o primeiro acesso</summary>
            <ol>
              <li>
                Na sua conta GitHub, crie uma{' '}
                <a
                  href="https://github.com/settings/personal-access-tokens/new"
                  target="_blank"
                  rel="noreferrer"
                >
                  chave de acesso com permissões específicas
                </a>
                .
              </li>
              <li>
                Escolha apenas o repositório{' '}
                <strong>diogotupi/instituto-2630</strong>.
              </li>
              <li>
                Em permissões do repositório, habilite{' '}
                <strong>Contents: Read and write</strong> e{' '}
                <strong>Actions: Read-only</strong>.
              </li>
              <li>
                Copie a chave e use-a no campo acima. A conta precisa ter
                permissão de edição no repositório.
              </li>
            </ol>
            <p>
              A chave fica apenas na memória desta aba. Não é salva no site nem
              no navegador. Ao sair ou fechar a aba, será necessário entrar
              novamente.
            </p>
          </details>
        </section>
      ) : (
        <div className={styles.workspace}>
          <aside className={styles.sidebar}>
            <p className={styles.eyebrow}>Páginas editáveis</p>
            <nav aria-label="Selecionar página">
              {editablePages.map((p) => (
                <button
                  type="button"
                  key={p.id}
                  aria-current={selected === p.id ? 'page' : undefined}
                  onClick={() => setSelected(p.id)}
                >
                  {p.name}
                  {changedPages.some((c) => c.id === p.id) && (
                    <span aria-label="Alterações pendentes"> •</span>
                  )}
                </button>
              ))}
            </nav>
            <p className={styles.help}>
              Páginas provisórias sem oferta ainda não precisam de configuração
              comercial. CEO-L e Cultura de Elite também atualizam seus
              endereços alternativos.
            </p>
          </aside>
          <section className={styles.editor}>
            <div className={styles.editorHeader}>
              <div>
                <p className={styles.eyebrow}>Editar página</p>
                <h1>{currentPage.name}</h1>
              </div>
              <a href={currentPage.path} target="_blank" rel="noreferrer">
                Abrir página ↗
              </a>
            </div>
            <p>
              Edite os campos abaixo. Os links de inscrição e contato podem ter
              destinos diferentes. Textos longos podem ser usados nos campos de
              preço e pagamento.
            </p>
            {draft && (
              <form onSubmit={save}>
                <fieldset disabled={busy || !!commit} className={styles.fields}>
                  {Object.entries(draft.pages[selected]).map(
                    ([field, value]) => (
                      <div
                        key={`${selected}-${field}`}
                        className={styles.field}
                      >
                        <label htmlFor={`setting-${field}`}>
                          {fieldLabels[field] ?? field}
                        </label>
                        {field === 'investment' && (
                          <small>
                            Informação exibida no site. Confira também o preço
                            configurado no checkout externo.
                          </small>
                        )}
                        <input
                          id={`setting-${field}`}
                          name={field}
                          type={
                            typeof value === 'number'
                              ? 'number'
                              : field.endsWith('Url')
                                ? 'url'
                                : field === 'email'
                                  ? 'email'
                                  : 'text'
                          }
                          min={typeof value === 'number' ? 1 : undefined}
                          max={typeof value === 'number' ? 365 : undefined}
                          step={typeof value === 'number' ? 1 : undefined}
                          maxLength={1500}
                          required
                          value={value}
                          onChange={(event) => {
                            const input = event.target.value;
                            setDraft((previous) => {
                              if (!previous) return previous;
                              return {
                                ...previous,
                                pages: {
                                  ...previous.pages,
                                  [selected]: {
                                    ...previous.pages[selected],
                                    [field]:
                                      typeof value === 'number'
                                        ? Number(input)
                                        : input,
                                  },
                                },
                              };
                            });
                            setPublished(false);
                          }}
                        />
                      </div>
                    ),
                  )}
                </fieldset>
                {errors.length > 0 && (
                  <ul className={styles.errors}>
                    {errors.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                )}
                <div className={styles.saveBar}>
                  <div>
                    <strong>
                      {dirty
                        ? `${changedPages.length} página(s) com alterações`
                        : 'Nenhuma alteração pendente'}
                    </strong>
                    {dirty && (
                      <small>
                        Ao confirmar, as mudanças serão enviadas para o site.
                      </small>
                    )}
                  </div>
                  <div className={styles.actions}>
                    <button
                      className={styles.secondary}
                      type="button"
                      onClick={reload}
                      disabled={busy || !!commit}
                    >
                      Recarregar dados
                    </button>
                    <button
                      type="submit"
                      disabled={busy || !!commit || !dirty || errors.length > 0}
                    >
                      {busy
                        ? 'Salvando…'
                        : commit
                          ? 'Publicando…'
                          : 'Salvar e publicar'}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </section>
        </div>
      )}
      {notice && (
        <div
          className={`${styles.notice} ${styles[notice.kind]}`}
          role={notice.kind === 'error' ? 'alert' : 'status'}
        >
          <p>{notice.text}</p>
          {runUrl && (
            <a href={runUrl} target="_blank" rel="noreferrer">
              Acompanhar publicação ↗
            </a>
          )}
          {published && (
            <a
              href={`${currentPage.path}?atualizado=${revision}`}
              target="_blank"
              rel="noreferrer"
            >
              Ver site atualizado ↗
            </a>
          )}
        </div>
      )}
    </main>
  );
}
