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
const themes = [
  [
    'Pessoas',
    'O valor de quem caminha ao nosso lado e o impacto das relações na nossa trajetória.',
  ],
  [
    'Escolhas',
    'Como decisões difíceis moldam quem nos tornamos e abrem novos caminhos.',
  ],
  [
    'Superação',
    'Lições sobre enfrentar desafios, recomeçar e construir uma nova história.',
  ],
  [
    'Gratidão',
    'Reconhecer quem faz parte da nossa jornada e dar sentido às conquistas.',
  ],
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
        <span>Desenvolvimento humano</span>
      </div>
      <section id="trajetoria" className={`${styles.section} ${styles.light}`}>
        <div className={styles.split}>
          <div>
            <p className={styles.kicker}>01 / Uma história de escolhas</p>
            <h2>
              Antes de inspirar outros,
              <br />
              foi preciso
              <br />
              <em>vencer a si mesmo.</em>
            </h2>
          </div>
          <div className={styles.prose}>
            <p>
              Carioca, Freitas decidiu aos 18 anos que ingressaria na Polícia
              Militar do Rio de Janeiro. Aos 21, foi aprovado no primeiro
              concurso. Aos 23, chegou ao BOPE.
            </p>
            <p>
              Depois de sete anos no batalhão, escolheu um novo caminho
              profissional. Levou consigo as lições de liderança,
              responsabilidade e superação vividas nas operações especiais.
            </p>
            <p>
              Hoje, compartilha essa trajetória em palestras, livros e
              treinamentos, conectando as experiências do campo aos desafios das
              pessoas e das empresas.
            </p>
          </div>
        </div>
        <div className={styles.timeline}>
          {[
            ['18', 'anos · a decisão'],
            ['21', 'anos · ingresso na PM'],
            ['23', 'anos · chegada ao BOPE'],
            ['7', 'anos no batalhão'],
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
            O que realmente importa:
            <br />
            <em>
              pessoas, valores
              <br />e propósito.
            </em>
          </h2>
          <div className={styles.prose}>
            <p>
              Uma experiência de inspiração, reflexão e conexão humana. Uma
              palestra leve, verdadeira e emocionante, inspirada na jornada de
              Freitas no BOPE e na transição para o mundo empresarial.
            </p>
            <p>
              Histórias sobre as pessoas que caminham ao nosso lado, as escolhas
              que fazemos e a coragem de continuar diante dos desafios.
            </p>
          </div>
        </div>
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
      <section className={styles.quoteSection}>
        <img
          src={asset('/images/freitas-speaking.jpg')}
          alt="Freitas compartilhando sua experiência com o público"
          loading="lazy"
          width="2000"
          height="3000"
        />
        <div>
          <p className={styles.kicker}>Um compromisso diário</p>
          <blockquote>
            “Vencer a si mesmo, todos os dias, é um compromisso sem fim.”
          </blockquote>
          <p className={styles.quoteCredit}>Freitas</p>
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
      <section className={styles.clients}>
        <p className={styles.kicker}>Empresas presentes nessa trajetória</p>
        <div>
          {[
            'Blue3',
            'Petrobras',
            'Porto',
            'Inter’ISP',
            'MyBirds',
            'Rede Autobem',
            'Diferen/TI',
            'Petromar',
            'Nova Época Imóveis',
            'Idex',
            'Carraro',
            'ID',
            'Gamma Ensino',
            'Mira Transportes',
          ].map((name) => (
            <span key={name}>{name}</span>
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
