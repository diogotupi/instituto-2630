/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages -- Static GitHub Pages export. */
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { nucoe } from '@/content/nucoe';
import {
  siteSettings,
  cultureHours,
  cultureDuration,
} from '@/lib/siteSettings';
const offer = siteSettings.cultura;
import styles from './cultura.module.css';

export const metadata = {
  title: 'Cultura de Elite — Formação empresarial ao vivo | Instituto 2630',
  description:
    `Comece a construir a essência da cultura da sua empresa: Propósito, Valores e Princípios como base do NUCOE. ${offer.format}, ${cultureDuration}.`,
  alternates: { canonical: 'https://instituto2630.com.br/cultura-de-elite/' },
};
const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
const whatsapp = offer.contactUrl;
const primary = 'Quero aprender a construir a cultura da minha empresa';
const symptoms = [
  'Falhas recorrentes na execução.',
  'Líderes que evitam assumir responsabilidade.',
  'Decisões que sempre voltam para o dono.',
  'Colaboradores desunidos.',
  'Prioridades interpretadas de maneiras diferentes.',
  'Contratações desalinhadas.',
  'Valores que existem no quadro, mas não orientam comportamento.',
];
const pillars = [
  [
    'Propósito',
    'Compreender o que é e separar propósito de objetivo. Uma referência sobre por que a empresa existe.',
  ],
  [
    'Valores',
    'Reconhecer aquilo que realmente orienta a organização e entender por que os colaboradores não simplesmente adotam os valores do dono.',
  ],
  [
    'Princípios',
    'Transformar a essência em regras claras e consequências que orientem decisões e comportamentos.',
  ],
  [
    'NUCOE',
    'Organizar Propósito, Valores e Princípios em uma estrutura aplicável à realidade da empresa.',
  ],
];
function Action({
  label = primary,
  href = '#oferta',
}: {
  label?: string;
  href?: string;
}) {
  return (
    <a
      className={styles.cta}
      href={href}
      {...(href.startsWith('https:')
        ? { target: '_blank', rel: 'noreferrer' }
        : {})}
    >
      {label}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
export default function CulturaDeElitePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a href="/" aria-label="Instituto 2630 — início">
          <img
            src={asset('/logo-negativo.png')}
            alt="Instituto 2630"
            width="62"
            height="60"
          />
        </a>
        <nav aria-label="Navegação Cultura de Elite">
          <a href="#plano">O que você constrói</a>
          <a href="#faq">Dúvidas</a>
          <a href="#oferta">
            Conheça a formação <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>
      <section id="hero" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Cultura de Elite / Instituto 2630</p>
          <h1>
            Sem cultura,
            <br />
            você se torna
            <br />
            <em>
              funcionário do
              <br />
              seu colaborador.
            </em>
          </h1>
          <p className={styles.lead}>{nucoe.hero.subheadline}</p>
          <Action />
          <p className={styles.format}>
            {offer.format} · {cultureDuration}
          </p>
        </div>
        <div className={styles.heroImage}>
          <img
            src={asset('/images/freitas-galeria-04.png')}
            alt="Freitas conduz uma formação empresarial com participantes em sala"
            width="1200"
            height="1600"
            fetchPriority="high"
          />
          <div className={styles.photoLabel}>
            Liderança. Decisão. Equipe.
            <span>Aplicação no ambiente empresarial.</span>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.light}`} id="para-quem">
        <p className={styles.kicker}>Para quem é</p>
        <div className={styles.split}>
          <h2>
            Você carrega a responsabilidade.
            <br />
            <em>A empresa precisa de uma referência comum.</em>
          </h2>
          <div className={styles.prose}>
            <p>
              Para empresários, empreendedores, gestores e líderes que carregam
              responsabilidade por pessoas e resultados e perceberam que
              trabalhar mais, cobrar mais e resolver tudo pessoalmente não está
              criando alinhamento.
            </p>
            <p className={styles.callout}>
              Você não precisa de mais uma palestra sobre cultura. Precisa de
              uma estrutura para começar a construí-la.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section} id="problema">
        <p className={styles.kicker}>Reconhece esses sinais?</p>
        <div className={styles.split}>
          <div>
            <h2>
              Sua empresa depende demais de você
              <br />
              <em>para funcionar?</em>
            </h2>
            <p className={styles.lead}>
              Toda empresa tem uma cultura. A pergunta é: quem está construindo
              a sua?
            </p>
          </div>
          <ol className={styles.symptoms}>
            {symptoms.map((text, i) => (
              <li key={text}>
                <span>0{i + 1}</span>
                {text}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className={`${styles.section} ${styles.light}`} id="cultura">
        <p className={styles.kicker}>
          Cultura intencional × cultura espontânea
        </p>
        <h2>
          A cultura se forma.
          <br />
          <em>Com ou sem a sua direção.</em>
        </h2>
        <p className={styles.intro}>
          Quando a liderança não ocupa conscientemente o espaço cultural,
          crenças, valores e comportamentos individuais passam a preenchê-lo. A
          empresa continua tendo cultura — apenas pode não ser a cultura que o
          dono desejava construir.
        </p>
        <div className={styles.comparison}>
          <article>
            <span className={styles.kicker}>Construída intencionalmente</span>
            <h3>Uma essência que orienta.</h3>
            <p>
              Propósito, Valores e Princípios organizados como referência para
              líderes, decisões e comportamentos.
            </p>
          </article>
          <article>
            <span className={styles.kicker}>Formada espontaneamente</span>
            <h3>Cada pessoa leva sua referência.</h3>
            <p>
              Crenças e comportamentos individuais ocupam o espaço que a
              liderança não estruturou conscientemente.
            </p>
          </article>
        </div>
      </section>
      <section className={styles.section} id="guia">
        <p className={styles.kicker}>O Instituto 2630 como guia</p>
        <div className={styles.split}>
          <h2>
            O que uma cultura de alta performance sob pressão
            <br />
            <em>pode ensinar à sua empresa?</em>
          </h2>
          <div className={styles.prose}>
            <p>
              O Instituto 2630 traduz aprendizados da cultura do BOPE e das
              Operações Especiais para o ambiente empresarial, especialmente
              sobre essência, unidade, responsabilidade, decisão e
              comportamento.
            </p>
            <p className={styles.callout}>
              A experiência vem do BOPE.
              <br />A aplicação acontece na empresa.
            </p>
            <p>
              A formação conecta esses aprendizados aos desafios de quem lidera
              pessoas e responde pelos resultados de uma organização.
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.thesis}`} id="essencia">
        <p className={styles.kicker}>Antes da ação, a essência</p>
        <h2>
          O BOPE já nasceu caveira.
          <br />
          <em>E isso ensina algo fundamental sobre cultura.</em>
        </h2>
        <p className={styles.intro}>
          Antes da ação existe uma essência. Essa essência ajuda a orientar como
          pessoas diferentes entendem quem são, como decidem e como agem. O
          Cultura de Elite leva essa lógica para o ambiente empresarial por meio
          do NUCOE.
        </p>
      </section>
      <section className={`${styles.section} ${styles.light}`} id="plano">
        <p className={styles.kicker}>O que será construído</p>
        <h2>
          Em {cultureHours} horas, você vai começar a estruturar
          <br />
          <em>a essência da cultura da sua empresa.</em>
        </h2>
        <div
          className={styles.planFlow}
          aria-label="Propósito, Valores e Princípios organizados como base do NUCOE"
        >
          <span>Propósito</span>
          <span aria-hidden="true">→</span>
          <span>Valores</span>
          <span aria-hidden="true">→</span>
          <span>Princípios</span>
          <span aria-hidden="true">→</span>
          <strong>NUCOE</strong>
        </div>
        <div className={styles.pillars}>
          {pillars.map(([title, copy], i) => (
            <article key={title}>
              <span className={styles.number}>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <Action label="Quero construir meu NUCOE" />
      </section>
      <section className={styles.section} id="metodo">
        <p className={styles.kicker}>O que acontece na formação</p>
        <h2>
          Ensinar.
          <br />
          Construir.
          <br />
          <em>Aplicar.</em>
        </h2>
        <div className={styles.method}>
          {nucoe.method.steps.map(({ title, detail }, i) => (
            <article key={title}>
              <span className={styles.number}>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
        <p className={styles.format}>
          {offer.format} · {cultureDuration}
        </p>
      </section>
      <section className={`${styles.section} ${styles.light}`} id="entregavel">
        <div className={styles.split}>
          <div>
            <p className={styles.kicker}>O entregável</p>
            <h2>
              Você não termina
              <br />
              <em>apenas com anotações.</em>
            </h2>
            <p className={styles.intro}>
              O principal entregável é a estrutura da essência da cultura da
              empresa trabalhada pelo participante: Propósito, Valores e
              Princípios organizados como base do NUCOE.
            </p>
          </div>
          <div className={styles.deliverable}>
            <span className={styles.kicker}>Estrutura da essência</span>
            <h3>
              Propósito
              <br />+ Valores
              <br />+ Princípios
            </h3>
            <strong>Base do NUCOE</strong>
            <p>
              Um ponto de partida para orientar decisões e comportamentos. O
              refinamento e a implementação continuam após a formação.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section} id="direcao">
        <div className={styles.comparison}>
          <article>
            <p className={styles.kicker}>O custo de adiar</p>
            <h2>
              Continuar sendo
              <br />
              <em>o centro de tudo.</em>
            </h2>
            <p>
              Centralização, incêndios, repetição de erros, líderes omissos,
              decisões frágeis, colaboradores desunidos e contratações
              desalinhadas mantêm a empresa dependente de você.
            </p>
          </article>
          <article>
            <p className={styles.kicker}>
              A referência que você começa a criar
            </p>
            <h2>
              Uma essência clara.
              <br />
              <em>Uma linguagem comum.</em>
            </h2>
            <p>
              Líderes com mais clareza para decidir alinhados ao dono.
              Colaboradores compreendendo melhor o que a empresa defende. Maior
              unidade, com decisões e comportamentos orientados pela essência.
            </p>
          </article>
        </div>
      </section>
      {/* Cases e depoimentos específicos de cultura e aplicação empresarial serão incluídos após seleção. */}
      <section className={`${styles.section} ${styles.light}`} id="oferta">
        <div className={styles.split}>
          <div>
            <p className={styles.kicker}>Formação Cultura de Elite</p>
            <h2>
              Comece a construir
              <br />
              <em>a cultura da sua empresa.</em>
            </h2>
            <p className={styles.intro}>
              Construa a estrutura da essência com fundamentos, ferramentas e
              aplicação na realidade da sua empresa.
            </p>
          </div>
          <div className={styles.offerCard}>
            <dl>
              {[
                ['Formato', offer.format],
                ['Duração', cultureDuration],
                [
                  'Entregável',
                  'Estrutura da essência: Propósito, Valores e Princípios',
                ],
                ['Próxima turma', offer.date],
                ['Horários', offer.schedule],
                ['Local ou plataforma', offer.location],
                ['Investimento', offer.investment],
                ['Pagamento', offer.payment],
                ['Gravação', offer.recording],
                ['Certificação', 'Não haverá certificado'],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <Action href={offer.checkoutUrl} />
            <p className={styles.offerNote}>
              Fale com o Léo para saber sobre a próxima turma, condições e
              inscrição.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section} id="faq">
        <p className={styles.kicker}>Antes de começar</p>
        <h2>
          Perguntas
          <br />
          <em>frequentes.</em>
        </h2>
        <div className={styles.faq}>
          {nucoe.faq.slice(0, 6).map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
          <details>
            <summary>Os encontros serão gravados?</summary>
            <p>
              {offer.recording}. Consulte as informações da próxima turma antes da inscrição.
            </p>
          </details>
        </div>
      </section>
      <section className={`${styles.section} ${styles.close}`}>
        <p className={styles.kicker}>Toda empresa terá uma cultura</p>
        <h2>
          Decida como
          <br />
          <em>a sua será construída.</em>
        </h2>
        <p>
          Conscientemente por você ou espontaneamente ao seu redor. Comece pela
          essência: Propósito, Valores e Princípios.
        </p>
        <Action
          href={offer.checkoutUrl}
          label="Quero construir a essência da cultura da minha empresa"
        />
      </section>
      <footer className={styles.footer}>
        <a href="/">← Instituto 2630</a>
        <span>Cultura de Elite · Formação empresarial online e ao vivo.</span>
      </footer>
      <a
        className={styles.whatsapp}
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com o Léo sobre o Cultura de Elite pelo WhatsApp"
      >
        <MessageCircle size={25} aria-hidden="true" />
      </a>
    </main>
  );
}
