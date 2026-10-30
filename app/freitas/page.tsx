/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages -- Static GitHub Pages export uses native images and document navigation. */
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import styles from './freitas.module.css';

export const metadata = {
  title: 'Freitas — Palestras e liderança | Instituto 2630',
  description:
    'Veterano do BOPE, palestrante e autor. Conheça a trajetória de Freitas e leve uma experiência de reflexão e desenvolvimento humano para sua empresa.',
  alternates: { canonical: 'https://instituto2630.com.br/freitas/' },
};
const contact =
  'https://wa.me/5521981269626?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20proposta%20para%20uma%20palestra%20do%20Freitas.';
const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
const gallery = [
  {
    file: '01',
    title: 'Planejamento em equipe',
    alt: 'Participantes trabalham juntos sobre um mapa durante uma dinâmica de planejamento',
    width: 1600,
    height: 1200,
  },
  {
    file: '02',
    title: 'Conhecimento compartilhado',
    alt: 'Turma reunida em auditório ao final de uma experiência do Instituto 2630',
    width: 1600,
    height: 1342,
  },
  {
    file: '03',
    title: 'Aprendizado em campo',
    alt: 'Freitas conduz uma aula ao ar livre à noite, com participantes diante de um quadro',
    width: 900,
    height: 1600,
  },
  {
    file: '04',
    title: 'Liderança na prática',
    alt: 'Freitas fala ao microfone para uma turma em sala durante um treinamento',
    width: 1200,
    height: 1600,
  },
  {
    file: '05',
    title: 'Espírito de equipe',
    alt: 'Participantes e instrutores reunidos com os braços erguidos em frente ao banner do Instituto 2630',
    width: 1086,
    height: 1448,
  },
  {
    file: '06',
    title: 'Pessoas em movimento',
    alt: 'Turma celebra em grupo ao final de uma atividade em sala',
    width: 1200,
    height: 1600,
  },
];
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
    'Duas obras publicadas',
    'Experiências reunidas em livros sobre escolhas e performance pessoal e profissional.',
  ],
  [
    'Motivação com bom humor',
    'Uma abordagem humana, envolvente e próxima de quem está na plateia.',
  ],
  [
    'Diferentes perspectivas',
    'Vivências no BOPE e estudos em neurociência e PNL compõem seu repertório.',
  ],
];
const qualifications = [
  ['Policial militar', '2005'],
  ['Ações táticas', 'BOPE · 2006'],
  ['Recursos humanos', 'Estácio'],
  ['Pós em neurociência', 'PUC-PR'],
  ['Pós em psicologia positiva', 'PUC-PR'],
  ['Pós em mindfulness', 'PUC-PR'],
  ['Master PNL', 'INAP'],
  ['Master Coach', 'IBC'],
  ['Constelador familiar, empresarial e sistêmico', 'INAP'],
  ['Especialista em sabotadores', 'IGT'],
  ['Especialista em perfil comportamental', 'IGT'],
];
function ContactButton({
  label = 'Leve Freitas para sua empresa',
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

export default function FreitasPage() {
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
        <nav aria-label="Navegação Freitas">
          <a href="#trajetoria">Trajetória</a>
          <a href="#palestra">A palestra</a>
          <a href="#contato">
            Solicitar proposta <ArrowUpRight size={14} aria-hidden />
          </a>
        </nav>
      </header>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Freitas / Palestrante & autor</p>
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
            src={asset('/images/freitas-cover-20261017.png')}
            alt="Freitas em retratos com uniforme do BOPE e traje civil, em composição com luz vermelha"
            fetchPriority="high"
            width="1672"
            height="941"
          />
          <span className={styles.signature}>
            FREITAS<span>Instituto 26 30</span>
          </span>
        </div>
      </section>
      <div className={styles.strip}>
        <span>Veterano do BOPE</span>
        <span>Palestrante</span>
        <span>Autor de 2 livros</span>
        <span>Empresário</span>
      </div>
      <section id="trajetoria" className={`${styles.section} ${styles.light}`}>
        <div className={styles.split}>
          <div>
            <p className={styles.kicker}>01 / Uma história de escolhas</p>
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
              Inspirado por um amigo, Freitas, um jovem carioca, na ocasião com
              18 anos, decidiu ingressar na Polícia Militar do Rio de Janeiro.
              Foco e meta renderam a ele aprovação no primeiro concurso, aos 21.
              Em seguida, aos 23 anos, foi aprovado para o BOPE, elite da PM
              sonhada por muitos jovens.
            </p>
            <p>
              Sete anos depois de ingressar no batalhão de elite, enfrentando
              missões de vida e morte, muitas delas narradas em suas palestras,
              Freitas decide abandonar a carreira militar para desbravar um novo
              caminho profissional.
            </p>
            <p>
              Vivenciou fracassos, frustrações e vitórias que lhe renderam não
              só a carreira de treinador e empresário bem-sucedido, mas também
              de autor e palestrante.
            </p>
            <p>
              Abordando temas como a essência do combate, sua jornada é um sopro
              de vida àqueles que buscam um exemplo real de coragem e superação.
            </p>
          </div>
        </div>
        <div className={styles.timeline}>
          {[
            ['18', 'anos · decisão de ser caveira'],
            ['23', 'anos · ingresso no BOPE'],
            ['30', 'anos · falência e depressão'],
            ['43', 'anos · empresário, palestrante e treinador'],
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
              Minha passagem pelo curso do BOPE, um dos mais difíceis do mundo,
              a tentativa de suicídio após deixar as fileiras do batalhão para
              empreender e a volta por cima como empresário e treinador me dão
              base para sustentar uma tese: a autoliderança e a liderança são
              fundamentais para a construção de uma vida de sucesso.
            </p>
            <p>
              Foi enfrentando a depressão, reconhecendo minhas fraquezas e
              reconstruindo minha identidade que compreendi que, antes de
              liderar outras pessoas, precisava aprender a liderar a mim mesmo.
            </p>
            <p>
              Quando essa compreensão acontece, liderar pessoas, desenvolver
              talentos e transformar colaboradores em uma unidade torna-se uma
              consequência natural da nossa própria evolução.
            </p>
            <p>
              Afinal, a tropa é o espelho do guia. Seus colaboradores refletem
              não apenas suas virtudes, mas também suas deficiências.
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
        id="galeria"
        className={`${styles.section} ${styles.gallerySection}`}
        aria-labelledby="galeria-title"
      >
        <p className={styles.kicker}>Encontros que fazem a diferença</p>
        <h2 id="galeria-title">
          Pessoas reais.
          <br />
          <em>Experiências em ação.</em>
        </h2>
        <p className={styles.galleryIntro}>
          Registros de palestras, treinamentos e dinâmicas em equipe. Toque em
          uma foto para vê-la completa.
        </p>
        <div className={styles.photoGallery}>
          {gallery.map(({ file, title, alt, width, height }) => (
            <figure key={file}>
              <a
                href={asset(`/images/freitas-galeria-${file}.png`)}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver foto completa: ${title}`}
              >
                <img
                  src={asset(`/images/freitas-galeria-${file}.png`)}
                  alt={alt}
                  loading="lazy"
                  width={width}
                  height={height}
                />
                <span className={styles.photoExpand} aria-hidden="true">
                  <ArrowUpRight size={20} />
                </span>
              </a>
              <figcaption>{title}</figcaption>
            </figure>
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
            <p className={styles.kicker}>03 / Por que levar Freitas</p>
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
          Duas obras.
          <br />
          <em>A mesma mensagem.</em>
        </h2>
        <p className={styles.bookIntro}>
          Nossa história não é determinada apenas pelo que vivemos, mas pelas
          escolhas que fazemos a partir do que vivemos.
        </p>
        <div className={styles.books}>
          <article>
            <span className={styles.number}>Livro / 01</span>
            <img
              className={styles.bookCover}
              src={asset('/images/livro-da-faca-a-tesoura-mockup.png')}
              alt="Mockup do livro Da Faca à Tesoura, de Freitas, com a capa em destaque em um cenário de estúdio"
              width="1254"
              height="1254"
              loading="lazy"
            />
            <h3>Da faca à tesoura</h3>
            <p>
              Uma história real sobre escolhas, recomeços e a coragem necessária
              para mudar a mentalidade e seguir um novo caminho.
            </p>
            <span className={styles.bookDetail}>
              Dos combates no BOPE às missões no mundo da moda.
            </span>
          </article>
          <article>
            <span className={styles.number}>Livro / 02</span>
            <img
              className={styles.bookCover}
              src={asset('/images/livro-7-atributos-mockup.png')}
              alt="Mockup do livro Os 7 Atributos para ser um Operações Especiais na Vida, autor Freitas e coautor Wallace"
              width="1254"
              height="1254"
              loading="lazy"
            />
            <h3>Os 7 atributos</h3>
            <p className={styles.bookSubtitle}>Para ser um Operações Especiais na Vida</p>
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
        <p className={styles.kicker}>Empresas presentes nessa trajetória</p>
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
        <ContactButton label="Solicitar proposta pelo WhatsApp" />
        <div className={styles.contactLinks}>
          <a href="mailto:freitasvinteseis@gmail.com">
            freitasvinteseis@gmail.com
          </a>
          <a href="tel:+5521981269626">(21) 98126-9626</a>
          <a
            href="https://www.instagram.com/26freitas/"
            target="_blank"
            rel="noreferrer"
          >
            @26freitas ↗
          </a>
        </div>
      </section>
      <footer className={styles.footer}>
        <a href="/">← Instituto 2630</a>
        <span>Freitas · Transformar corações e mentes, vidas e empresas.</span>
      </footer>
      <a
        className={styles.whatsapp}
        href={contact}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar sobre a palestra de Freitas no WhatsApp"
      >
        <MessageCircle size={25} aria-hidden />
      </a>
    </main>
  );
}
