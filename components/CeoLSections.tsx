import Image from "next/image";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Reveal } from "@/components/Reveal";
import { StickyCta } from "@/components/StickyCta";
import { assetPath } from "@/lib/assetPath";
import { ceol } from "@/content/ceol";
import styles from "./CeoLSections.module.css";

const img = (name: string) => assetPath(`/course-${name}.jpg`);
const testimonialImage = (name: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/ceol-testimonial-${name}.png`;

const testimonials = [
  {
    name: "Jean Carlos",
    role: "CEO — Alfa Consórcios e Investimentos",
    image: "jean",
    quote: "O CEO-L não foi apenas um treinamento. Foi um divisor de águas na minha empresa, na minha vida e na vida dos meus colaboradores.",
  },
  {
    name: "Vivian Nascimento",
    role: "Empresária e estudante de psicologia",
    image: "vivian",
    quote: "Honra e coragem, superar limites e enxergar que posso muito mais. Clareza no caos. O curso da vida nunca acaba.",
  },
  {
    name: "Guilherme Pôncio",
    role: "CEO do Grupo Autobem",
    image: "guilherme",
    quote: "Quero agradecer o Instituto 2630 pela transformação em nossos colaboradores. Eles aprenderam a lidar com a pressão e hoje eu posso dizer que tenho um time de forças especiais dentro da minha empresa.",
  },
  {
    name: "Fernando Carvalho",
    role: "CEO da Fitlog",
    image: "fernando",
    quote: "Levei meus líderes e colaboradores na esperança que eles se transformassem em um verdadeiro time. Hoje eu tenho uma equipe de operações especiais dentro da empresa.",
  },
];

function CeoLActionButtons({ dark = false }: { dark?: boolean }) {
  return <div className={`${styles.offerActions}${dark ? ` ${styles.offerActionsDark}` : ""}`}>
    <a className="button-primary" href="https://formulario2630.com.br/ceo-l" target="_blank" rel="noreferrer">Entrar para lista de espera</a>
    <a className={styles.whatsappButton} href={ceol.whatsappUrl} target="_blank" rel="noreferrer">Quero falar com o Léo / inscrição</a>
  </div>;
}

export function CeoLSections() {
  return <main className={styles.page}>
    <section className={`section section--dark ${styles.hero}`} id="hero">
      <Image src={assetPath("/ceo-l-hero.png")} alt="Freitas e Wallace no CEO-L" fill priority className={styles.heroImage} />
    </section>
    <section className={`section section--dark ${styles.heroCopy}`}>
      <div className="section__inner"><Reveal><p className="eyebrow">{ceol.hero.eyebrow}</p><h1 className="headline">{ceol.hero.headline}</h1><p className="lede">{ceol.hero.subheadline}</p><CeoLActionButtons dark /><p className="micro">Liderança • Cultura • Equipe • Decisão • Planejamento • Pressão controlada</p></Reveal></div>
    </section>
    <section className="section section--light"><div className="section__inner"><Reveal><p className="eyebrow red">A pergunta que abre a consciência</p><h2 className="headline">Quem é você quando o controle desaparece?</h2><p className="lede">É fácil falar de liderança quando existe tempo, recurso, energia e previsibilidade. Mas você delega ou controla? Confia ou centraliza? Continua sendo o líder que acredita ser quando as condições deixam de ajudar?</p><p className={styles.statement}>A verdadeira liderança começa pela compreensão de si mesmo.</p></Reveal></div></section>
    <section className={`section section--dark ${styles.photoSection}`}><Image src={img("03")} alt="Equipe em uma experiência de liderança" fill className={styles.photo} /><div className={styles.shade} /><div className="section__inner"><Reveal><p className="eyebrow">O preço invisível do sucesso</p><h2 className="headline">Quanto está custando sustentar tudo?</h2><div className={styles.columns}><p>Você cresce profissionalmente, mas se afasta da família. A empresa cresce, mas tudo continua dependendo de você. Você entrega resultado, mas vive cansado e sob estresse.</p><p>Por fora, sucesso. Por dentro, pressão, controle e a sensação de carregar tudo. Você não precisa destruir sua vida pessoal para ter sucesso profissional.</p></div></Reveal></div></section>
    <section className="section section--light"><div className="section__inner"><Reveal><h2 className="headline">A pressão não cria líder. Ela revela.</h2></Reveal></div></section>
    <section className="section section--dark"><div className="section__inner"><Reveal><p className="eyebrow">O que é o CEO-L</p><h2 className="headline headline--wide">Não é um cursinho de liderança. É transformação na prática, sob pressão.</h2><p className="lede">Uma imersão presencial de aproximadamente 48 horas, com turmas pequenas, missões, planejamento, comunicação, equipe, execução, adaptação, responsabilidade e debrief.</p><div className={styles.not}><span>Não é um curso militar.</span><span>Não é só para homens.</span><span>A pressão é ferramenta didática.</span></div></Reveal></div></section>
    <section className="section section--light"><div className="section__inner"><Reveal><p className="eyebrow red">Como a experiência funciona</p><h2 className="headline">Cinco fases. Uma experiência. Um líder sendo transformado.</h2></Reveal><div className={styles.phaseGrid}>{ceol.phases.map((phase, i) => <Reveal as="article" key={phase.title} delayMs={i * 70}><span>0{i + 1}</span><h3>{phase.title}</h3><p>{phase.description}</p></Reveal>)}</div><p className={styles.mechanism}>pressão controlada → poucos recursos → missão → equipe → decisão → debrief → aplicação</p></div></section>
    <section className={`section section--dark ${styles.photoSection}`}><Image src={assetPath("/ceol-debrief.jpg")} alt="Participantes reunidos em uma experiência de liderança" fill className={styles.photo} /><div className={styles.shade} /><div className="section__inner"><Reveal><p className="eyebrow">O debrief</p><h2 className="headline">Viver sem compreender é apenas experiência.</h2><p className="lede">O debrief transforma experiência em aprendizado. O que você fez? Como reagiu? Pediu ajuda? Delegou? Assumiu responsabilidade? Que padrão apareceu na sua empresa ou na sua vida?</p></Reveal></div></section>
    <section className="section section--light"><div className="section__inner"><Reveal><p className="eyebrow red">O método</p><h2 className="headline">O método deixa de ser teoria e passa a aparecer no seu comportamento.</h2></Reveal><div className={styles.pillars}>{ceol.pillars.map((pillar, i) => <div key={pillar}><span>0{i + 1}</span><strong>{pillar}</strong></div>)}</div></div></section>
    <section className="section section--dark" id="para-quem"><div className="section__inner"><Reveal><p className="eyebrow">Para quem carrega responsabilidade</p><h2 className="headline">Elevar o padrão de liderança começa por você.</h2></Reveal><div className={styles.audience}><p>Empresários, empreendedores, diretores, executivos, gestores e profissionais que precisam decidir sob pressão, construir confiança e liderar sem perder a si mesmos.</p><p className={styles.muted}>Não é para quem busca apenas curiosidade sobre o BOPE, entretenimento extremo ou uma prova física.</p></div></div></section>
    <section className={`section section--light ${styles.testimonials}`} id="depoimentos">
      <div className="section__inner">
        <Reveal><p className="eyebrow red">Quem viveu, conta</p><h2 className="headline">A experiência continua depois do CEO-L.</h2><p className="lede">O que participantes levaram para a liderança, para a empresa e para a vida.</p></Reveal>
        <div className={styles.testimonialList}>
          {testimonials.map((testimonial, index) => (
            <article className={styles.testimonialCard} key={testimonial.name}>
              <div className={styles.testimonialCopy}>
                <span className={styles.quoteMark} aria-hidden="true">“</span>
                <p className={styles.testimonialLabel}>Depoimento / 0{index + 1}</p>
                <blockquote>{testimonial.quote}</blockquote>
                <footer><strong>{testimonial.name}</strong><span>{testimonial.role}</span></footer>
              </div>
              <div className={styles.testimonialPortrait}>
                <Image src={testimonialImage(testimonial.image)} alt={`Retrato de ${testimonial.name}`} fill unoptimized sizes="(max-width: 720px) 90vw, 40vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className={`section section--light ${styles.offer}`} id="oferta"><div className="section__inner"><Reveal><p className="eyebrow red">Experiência real</p><h2 className="headline">Antes de liderar melhor os outros, compreenda quem está liderando.</h2><div className={styles.eventDetails}><p><span>Próxima turma</span>9, 10 e 11 de outubro</p><p><span>Horário</span>Sexta, 20h, até domingo, 16h</p><p><span>Turma</span>Apenas 12 alunos</p></div><p className="lede">O investimento inclui hospedagem, equipamentos, uniformes e alimentação durante todo o período do curso.</p><CeoLActionButtons /></Reveal></div></section>
    <section className="section section--dark" id="contato"><div className="section__inner"><Reveal><p className="eyebrow">CEO-L</p><h2 className="headline">Não importa o problema, liderar é a solução.</h2><p className="lede">Lidere-se.</p><CeoLActionButtons dark /></Reveal></div></section>
    <StickyCta checkoutUrl="https://formulario2630.com.br/ceo-l" label="Entrar para lista de espera" />
    <div className={styles.mobileWhatsApp}><FloatingWhatsApp href={ceol.whatsappUrl} /></div>
  </main>;
}
