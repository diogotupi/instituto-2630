/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages -- Static GitHub Pages export uses native images and document navigation. */
import { ArrowUpRight, AtSign } from 'lucide-react';
import styles from './wallace.module.css';

export const metadata = {
  title: 'Wallace — Página em preparação | Instituto 2630',
  description:
    'Conheça Wallace: trainer de liderança, 1º sargento do BOPE, comandante da Alpha 4 e cofundador do Instituto 2630.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://instituto2630.com.br/wallace/' },
};
const contact = 'https://www.instagram.com/wcaveira53/';
const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
const themes = [
  ['Lidere-se', 'Se der certo, nós vencemos; se der errado, é tudo comigo.'],
  ['Mova-se', 'Planeje bem, entre em ação e os resultados serão bons.'],
  [
    'Adapte-se',
    'Seja flexível ao ponto de mudar tudo que for preciso para gerar resultado.',
  ],
  ['Equalize-se', 'Seu corpo e sua mente estão integrados. Evolua.'],
];
const testimonials = [
  {
    name: 'Jean Carlos',
    role: 'CEO — Alfa Consórcios e Investimentos',
    quote:
      'O CEO-L não foi apenas um treinamento. Foi um divisor de águas na minha empresa, na minha vida e na vida dos meus colaboradores.',
  },
  {
    name: 'Guilherme Pôncio',
    role: 'CEO do Grupo Autobem',
    quote:
      'Quero agradecer o Instituto 2630 pela transformação em nossos colaboradores. Eles aprenderam a lidar com a pressão e hoje eu posso dizer que tenho um time de forças especiais dentro da minha empresa.',
  },
  {
    name: 'Fernando Carvalho',
    role: 'CEO da Fitlog',
    quote:
      'Levei meus líderes e colaboradores na esperança que eles se transformassem em um verdadeiro time. Hoje eu tenho uma equipe de operações especiais dentro da empresa.',
  },
];
const clients = [
  { name: 'Blue3', image: '/4blue3.webp' },
  { name: 'Petrobras', image: '/12petrobras.webp' },
  { name: 'Porto', image: '/10porto-seguro.webp' },
  { name: 'Inter’ISP', image: '/3inter.webp' },
  { name: 'MyBirds', image: '/5mybirds.webp' },
  { name: 'Rede Autobem', image: '/1autobem.webp' },
  { name: 'Diferen/TI', image: '' },
  { name: 'Petromar', image: '/7petromar.webp' },
  { name: 'Nova Época Imóveis', image: '' },
  { name: 'Idex', image: '/9idex.webp' },
  { name: 'Carraro', image: '/11carraro.webp' },
  { name: 'ID', image: '' },
  { name: 'Gamma Ensino', image: '/2gamma.webp' },
  { name: 'Mira Transportes', image: '' },
];
const reasons = [
  [
    'Conexão com as pessoas',
    'Histórias que convidam à reflexão e aproximam líderes e colaboradores.',
  ],
  [
    'Experiência real',
    'A perspectiva de quem atuou como líder, liderado e treinador.',
  ],
  [
    'Aplicação no mundo corporativo',
    'Aprendizados das operações especiais traduzidos para os desafios da empresa.',
  ],
  [
    'Conteúdo personalizado',
    'Um briefing direto com o cliente para alinhar a palestra ao momento da equipe.',
  ],
  [
    'Operações especiais',
    'Formação em operações especiais, ações táticas e como sniper e paraquedista militar.',
  ],
  [
    'Motivação com bom humor',
    'Uma abordagem humana, envolvente e próxima de quem está na plateia.',
  ],
  [
    'Diferentes perspectivas',
    'Master PNL e estudos em psicanálise ampliam seu repertório para o desenvolvimento de pessoas.',
  ],
];
const qualifications = [
  ['Trainer de liderança', 'Desenvolvimento de líderes'],
  ['1º sargento', 'BOPE'],
  ['Comandante da Alpha 4', 'Liderança de equipe'],
  ['Operações especiais', 'Formação operacional'],
  ['Ações táticas', 'Formação operacional'],
  ['Sniper', 'Especialização operacional'],
  ['Paraquedista militar', 'Formação militar'],
  ['Psicanálise', 'Cursando'],
  ['Master PNL', 'Programação neurolinguística'],
];
function ContactButton({
  label = 'Fale com Wallace no Instagram',
}: {
  label?: string;
}) {
  return (
    <a className={styles.cta} href={contact} target="_blank" rel="noreferrer">
      {label}
      <ArrowUpRight size={18} aria-hidden />
    </a>
  );
}

export default function WallacePage() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <a href="/" aria-label="Instituto 2630 — início">
          <img
            src={asset('/logo-negativo.png')}
            width="62"
            height="60"
            alt="Instituto 2630"
          />
        </a>
        <nav aria-label="Navegação Wallace">
          <a href="#trajetoria">Trajetória</a>
          <a href="#palestra">A palestra</a>
          <a href="#contato">
            Solicitar proposta <ArrowUpRight size={14} aria-hidden />
          </a>
        </nav>
      </header>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Wallace / Trainer de liderança</p>
          <h1>
            Transformar
            <br />
            <em>
              corações
              <br />e mentes.
            </em>
          </h1>
          <p className={styles.heroSub}>Vidas e empresas.</p>
          <p className={styles.lead}>
            Do BOPE ao mundo empresarial. Experiências reais que provocam
            reflexão, fortalecem pessoas e inspiram novas escolhas.
          </p>
          <ContactButton />
          <a className={styles.explore} href="#trajetoria">
            Conheça a trajetória ↓
          </a>
        </div>
        <div className={styles.heroPortrait}>
          <img
            src={asset('/wallace.png')}
            alt="Wallace, fundador e treinador do Instituto 2630, com uniforme camuflado"
            fetchPriority="high"
            width="1056"
            height="1493"
          />
          <span className={styles.signature}>
            WALLACE<span>Instituto 26 30</span>
          </span>
        </div>
      </section>
      <div className={styles.strip}>
        <span>1º sargento do BOPE</span>
        <span>Comandante da Alpha 4</span>
        <span>Trainer de liderança</span>
        <span>Master PNL</span>
      </div>
      <section id="trajetoria" className={`${styles.section} ${styles.light}`}>
        <div className={styles.split}>
          <div>
            <p className={styles.kicker}>01 / Experiência & liderança</p>
            <h2>
              Vencer a si mesmo,
              <br />
              todos os dias,
              <br />
              <em>é um compromisso sem fim.</em>
            </h2>
          </div>
          <div className={styles.prose}>
            <p>
              Wallace é trainer de liderança, 1º sargento do BOPE e comandante
              da Alpha 4. Sua experiência reúne liderança de equipe, operações
              especiais e ações táticas.
            </p>
            <p>
              Sua formação inclui as especializações de sniper e paraquedista
              militar, que compõem seu repertório operacional.
            </p>
            <p>
              É Master PNL e está cursando psicanálise, ampliando sua formação
              voltada à compreensão do comportamento humano.
            </p>
            <p>
              Como cofundador do Instituto 2630, atua no desenvolvimento de
              líderes e equipes.
            </p>
          </div>
        </div>
        <div className={`${styles.timeline} ${styles.careerHighlights}`}>
          {[
            ['BOPE', '1º sargento'],
            ['Alpha 4', 'Comandante'],
            ['PNL', 'Master'],
            ['Liderança', 'Trainer'],
          ].map(([n, label]) => (
            <div key={n}>
              <strong>{n}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="palestra" className={styles.section}>
        <p className={styles.kicker}>02 / A palestra</p>
        <div className={styles.split}>
          <h2>
            A verdadeira
            <br />
            <em>
              liderança começa pela
              <br />
              compreensão de si mesmo.
            </em>
          </h2>
          <div className={styles.prose}>
            <p>
              A liderança de equipes e a formação em operações especiais fazem
              parte da experiência de Wallace como 1º sargento do BOPE e
              comandante da Alpha 4.
            </p>
            <p>
              Como trainer de liderança, conecta essa experiência ao
              desenvolvimento de pessoas no Instituto 2630.
            </p>
            <p>
              Sua formação como Master PNL e seus estudos em psicanálise
              acrescentam novas perspectivas à compreensão do comportamento
              humano.
            </p>
            <p>
              Autoliderança, ação, adaptação e equilíbrio orientam os quatro
              pilares apresentados a seguir.
            </p>
          </div>
        </div>
        <p className={`${styles.kicker} ${styles.pillarsLabel}`}>
          Os 4 pilares
        </p>
        <div className={styles.themes}>
          {themes.map(([title, copy], i) => (
            <article key={title}>
              <span className={styles.number}>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className={`${styles.section} ${styles.testimonials}`}
        aria-labelledby="depoimentos-title"
      >
        <p className={styles.kicker}>Quem viveu, conta</p>
        <h2 id="depoimentos-title">
          Experiências reais.
          <br />
          <em>Transformações que ficam.</em>
        </h2>
        <p className={styles.testimonialIntro}>
          Relatos sobre os treinamentos e as experiências do Instituto 2630.
        </p>
        <div className={styles.testimonialGrid}>
          {testimonials.map(({ name, role, quote }) => (
            <figure key={name}>
              <span className={styles.quoteMark} aria-hidden="true">
                “
              </span>
              <blockquote>{quote}</blockquote>
              <figcaption>
                <strong>{name}</strong>
                <span>{role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.light}`}>
        <div className={styles.split}>
          <div className={styles.reasonIntro}>
            <p className={styles.kicker}>03 / Por que levar Wallace</p>
            <h2>
              Sete motivos.
              <br />
              Uma experiência
              <br />
              <em>para sua equipe.</em>
            </h2>
            <ContactButton label="Conversar sobre a palestra" />
          </div>
          <div className={styles.reasons}>
            {reasons.map(([title, copy], i) => (
              <article key={title}>
                <span className={styles.number}>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section} id="livros">
        <p className={styles.kicker}>04 / Além do palco</p>
        <h2>
          Conhecimento
          <br />
          <em>compartilhado.</em>
        </h2>
        <p className={styles.bookIntro}>
          Nossa história não é determinada apenas pelo que vivemos, mas pelas
          escolhas que fazemos a partir do que vivemos.
        </p>
        <div className={styles.books}>
          <article>
            <span className={styles.number}>Coautoria</span>
            <div
              className={styles.bookCover}
              role="img"
              aria-label="Capa de Os 7 atributos — imagem em breve"
            >
              <span>
                Os 7<br />
                atributos
              </span>
              <small>Capa em breve</small>
            </div>
            <h3>Os 7 atributos</h3>
            <p>
              Um guia prático para enfrentar desafios, fortalecer a mentalidade
              e construir uma vida com mais clareza, disciplina e direção.
            </p>
            <span className={styles.bookDetail}>
              Autor: Freitas · Coautor: Wallace
            </span>
          </article>
        </div>
      </section>
      <section className={`${styles.section} ${styles.light}`}>
        <p className={styles.kicker}>05 / Formação & experiência</p>
        <h2>
          Repertório para
          <br />
          <em>desenvolver pessoas.</em>
        </h2>
        <div className={styles.qualifications}>
          {qualifications.map(([title, institution]) => (
            <div key={title}>
              <h3>{title}</h3>
              <span>{institution}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="empresas" className={styles.clients}>
        <p className={styles.kicker}>
          Empresas na trajetória do Instituto 2630
        </p>
        <h2>
          Confiança construída.
          <br />
          <em>Dentro de grandes equipes.</em>
        </h2>
        <div className={styles.clientGrid}>
          {clients.map(({ name, image }) => (
            <div className={styles.clientCard} key={name}>
              {image ? (
                <img
                  src={asset(image)}
                  alt={name}
                  loading="lazy"
                  width="200"
                  height="90"
                />
              ) : (
                <span>{name}</span>
              )}
            </div>
          ))}
        </div>
      </section>
      <section id="contato" className={`${styles.section} ${styles.contact}`}>
        <p className={styles.kicker}>
          O próximo encontro pode ser na sua empresa
        </p>
        <h2>
          Uma conversa.
          <br />
          <em>Novas possibilidades.</em>
        </h2>
        <p>
          Conte o momento da sua equipe e os objetivos do seu evento. A proposta
          é construída a partir de um briefing para conectar a palestra à sua
          realidade.
        </p>
        <ContactButton label="Conversar com Wallace no Instagram" />
        <div className={styles.contactLinks}>
          <a href={contact} target="_blank" rel="noreferrer">
            @wcaveira53 ↗
          </a>
        </div>
      </section>
      <footer className={styles.footer}>
        <a href="/">← Instituto 2630</a>
        <span>Wallace · Trainer de liderança · Instituto 2630.</span>
      </footer>
      <a
        className={styles.whatsapp}
        href={contact}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Wallace pelo Instagram"
      >
        <AtSign size={25} aria-hidden />
      </a>
    </main>
  );
}
