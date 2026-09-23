"use client";

import Image from "next/image";
import { ChevronField } from "@/components/ChevronField";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PenaPortaActions } from "@/components/PenaPortaActions";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/assetPath";
import { penaporta, resolvePenaPortaCheckout } from "@/content/penaporta";
import styles from "./PenaPortaSections.module.css";

const photos = {
  hero: "/pena-porta-hero-2026.png",
  preparation: "/pena-porta-preparacao.png",
  combat: "/pena-porta-mapa-combat.png",
  day: "/pena-porta-execucao-hoje.png",
  workshop: [
    "/pena-porta-dinamica-aula.png",
    "/pena-porta-dinamica-mapa.png",
    "/pena-porta-dinamica-equipe.png",
  ],
};

// Keep the animated version available for a future edition.
const showTestimonialCarousel = false;

const trainerResumePlaceholder = ["Lorem ipsum dolor sit amet", "Consectetur adipiscing elit", "Sed do eiusmod tempor incididunt"];

function TrainerResume({ name }: { name: string }) {
  return <div className={styles.trainerResume} aria-label={`Currículo de ${name}: conteúdo provisório`}>
    <span className={styles.resumeLabel}>Currículo em breve</span>
    <div className={styles.resumeCarousel} aria-hidden="true">
      {trainerResumePlaceholder.map((text, index) => <span key={text} style={{ animationDelay: `${index * 4}s` }}>{text}</span>)}
    </div>
  </div>;
}

const testimonials = [
  {
    name: "Karine Silva",
    role: "Empresária",
    image: "/testemunho-karine.png",
    quote: "Romper ciclos e me libertar das cargas que limitavam o meu crescimento. Hoje vivo um novo começo.",
  },
  {
    name: "Ryan",
    role: "Empresário e engenheiro",
    image: "/testemunho-ryan.png",
    quote: "Uma mudança de mentalidade diante dos desafios e a capacidade de lidar com eles no caos, aprendendo a ter foco e paciência.",
  },
];

export function PenaPortaSections() {
  const checkout = resolvePenaPortaCheckout(penaporta.checkoutUrl);
  const whatsapp = penaporta.whatsappUrl;

  return (
    <>
      <section id="hero" className={`section section--dark ${styles.hero}`}>
        <Image src={assetPath(photos.hero)} alt="Freitas, Wallace e participantes do Pé na Porta em treinamento" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroShade} aria-hidden />
        <div className={styles.heroGridLines} aria-hidden />
        <div className={`section__inner ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <Reveal><p className={`eyebrow ${styles.lightEyebrow}`}>Treinamento presencial | Instituto 2630</p></Reveal>
            <Reveal delayMs={80}><p className={styles.productName}>Pé na Porta</p></Reveal>
            <Reveal delayMs={130}>
              <h1 className={styles.heroTitle}><span>Planeje bem</span><strong>e os resultados</strong><span>serão bons.</span></h1>
            </Reveal>
            <Reveal delayMs={190}>
              <p className={styles.heroLede}>Um dia inteiro para transformar objetivos em planejamento, prioridades e ações executáveis — usando os 7 atributos das Operações Especiais e o Mapa Combat.</p>
            </Reveal>
            <Reveal delayMs={240}>
              <div className={styles.ctaRow}><PenaPortaActions checkoutUrl={checkout} whatsappUrl={whatsapp} purchaseLabel={penaporta.ctas.purchase} /></div>
              <div className={styles.heroMeta} aria-label="Informações principais">
                <span>Evento presencial</span><span>11h de workshop</span><span>Método prático</span><span>Aplicação</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="problema" className={`section section--light ${styles.problem}`}>
        <div className={`section__inner ${styles.problemGrid}`}>
          <Reveal>
            <p className="eyebrow">Antes de agir</p>
            <h2 className="headline headline--wide">Você está executando um plano — ou apenas reagindo às circunstâncias?</h2>
            <p className="lede">Trabalhar muito não significa avançar. Sem direção, a urgência ocupa o lugar da prioridade e o esforço vira repetição.</p>
          </Reveal>
          <div className={styles.problemList}>
            {penaporta.problems.map((item, index) => (
              <Reveal as="article" key={item} delayMs={index * 70} className={styles.problemItem}>
                <span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section section--dark ${styles.thesis}`}>
        <Image src={assetPath(photos.preparation)} alt="Participante registrando aprendizados durante o treinamento" fill sizes="100vw" className={styles.thesisImage} />
        <div className={styles.thesisShade} aria-hidden />
        <ChevronField density={10} />
        <div className="section__inner">
          <Reveal className={styles.thesisCopy}>
            <p className="eyebrow">A tese</p>
            <h2 className="headline headline--wide">Resultado é fruto das estratégias.</h2>
            <p className="lede">Planejamento não é burocracia. É o que aumenta sua capacidade de decidir e agir quando a realidade muda. O Pé na Porta traz essa lógica do BOPE/RJ para sua vida e sua empresa: entender o cenário, organizar recursos, definir prioridades e executar com clareza.</p>
            <blockquote>“Planeje bem e os resultados serão bons.”</blockquote>
          </Reveal>
        </div>
      </section>

      <section id="o-que-e" className={`section section--light ${styles.workshop}`}>
        <div className="section__inner">
          <Reveal>
            <p className="eyebrow">O que é o Pé na Porta</p>
            <h2 className="headline headline--wide">Um dia para sair do improviso e entrar em modo de realização.</h2>
            <p className="lede">Um workshop presencial e prático para aprender a ter clareza, planejar, se preparar e entrar em ação. Você participa, escreve, discute, aplica e define o próximo movimento.</p>
          </Reveal>
          <div className={styles.topicGrid}>
            {penaporta.workshopTopics.map((item, index) => (
              <Reveal as="article" key={item} delayMs={index * 55} className={styles.topicCard}>
                <span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section section--dark ${styles.trainingMoment}`}>
        <div className={`section__inner ${styles.trainingMomentGrid}`}>
          <Reveal className={styles.trainingMomentCopy}>
            <p className="eyebrow">Na prática</p>
            <h2 className="headline">O método ganha forma quando o time entra em movimento.</h2>
            <p className="lede">Identificar, decidir e agir deixam de ser discurso para virar conquistas.</p>
          </Reveal>
          <div className={styles.trainingMomentGallery}>
            {photos.workshop.map((photo, index) => (
              <Reveal key={photo} delayMs={index * 80} className={styles.trainingMomentPhoto}>
                <Image src={assetPath(photo)} alt="Participantes aplicando o método Pé na Porta" fill sizes="(max-width: 850px) 88vw, 32vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className={`section section--dark ${styles.method}`}>
        <div className="section__inner">
          <Reveal>
            <p className="eyebrow">7 Atributos + Mapa Combat</p>
            <h2 className="headline headline--wide">Você não vai sair apenas com anotações. Vai sair com um mapa para as próximas conquistas.</h2>
            <p className="lede">Os 7 Atributos estruturam o planejamento. O Mapa Combat transforma clareza em ações práticas, responsáveis e acompanháveis.</p>
          </Reveal>

          <div className={styles.planGrid}>
            {penaporta.plan.map((item, index) => (
              <Reveal as="article" key={item.code} delayMs={index * 90} className={styles.planCard}>
                <span>{item.code}</span><h3>{item.title}</h3><p>{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className={styles.combatMap}>
            <div className={styles.attributeRail}>
              {penaporta.methodFlow.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}
            </div>
            <div className={styles.combatVisual}>
              <Image src={assetPath(photos.combat)} alt="Equipe utilizando o Mapa Combat em uma dinâmica" fill sizes="(max-width: 720px) 92vw, 37vw" />
              <span>Mapa Combat em ação</span>
            </div>
            <div className={styles.mapCore}><small>Ferramenta de aplicação</small><strong>Mapa<br />Combat</strong><span>Planejamento → decisão → execução</span></div>
          </Reveal>
          <div className={styles.ctaRow}><PenaPortaActions checkoutUrl={checkout} whatsappUrl={whatsapp} purchaseLabel={penaporta.ctas.vacancy} /></div>
        </div>
      </section>

      <section id="treinadores" className={`section section--dark ${styles.institute}`}>
        <div className={`section__inner ${styles.instituteGrid}`}>
          <Reveal className={styles.instituteCopy}>
            <p className="eyebrow">Experiência que orienta</p>
            <h2 className="headline headline--wide">Quem são seus treinadores.</h2>
            <p className="lede">Freitas e Wallace unem experiência em operações especiais, liderança e aplicação prática para conduzir o Pé na Porta.</p>
            <p>São fundadores do Instituto 2630 e traduzem o treinamento e a pressão dos combates no BOPE/RJ para as decisões reais na vida, na liderança, nos times e nas empresas.</p>
          </Reveal>
          <div className={styles.founders}>
            <Reveal className={styles.founderCard}><div className={styles.founderImage}><Image src={assetPath("/freitas-original.png")} alt="Freitas, treinador do Pé na Porta" fill sizes="(max-width: 800px) 90vw, 24vw" /></div><span>26</span><strong>Freitas</strong><TrainerResume name="Freitas" /></Reveal>
            <Reveal delayMs={90} className={styles.founderCard}><div className={`${styles.founderImage} ${styles.wallaceImage}`}><Image src={assetPath("/wallace.png")} alt="Wallace, treinador do Pé na Porta" fill sizes="(max-width: 800px) 90vw, 24vw" /></div><span>30</span><strong>Wallace</strong><TrainerResume name="Wallace" /></Reveal>
          </div>
        </div>
      </section>

      <section id="para-quem" className={`section section--light ${styles.audience}`}>
        <div className={`section__inner ${styles.audienceGrid}`}>
          <Reveal>
            <p className="eyebrow">Para quem é</p>
            <h2 className="headline headline--wide">O Pé na Porta é para quem precisa transformar intenção em execução.</h2>
          </Reveal>
          <Reveal delayMs={90} className={styles.audiencePanel}><h3>É para</h3><ul>{penaporta.audience.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
          <Reveal delayMs={160} className={`${styles.audiencePanel} ${styles.notPanel}`}><h3>Não é para quem procura</h3><ul>{penaporta.notThis.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
        </div>
      </section>

      <section id="jornada" className={`section section--dark ${styles.day}`}>
        <div className="section__inner">
          <Reveal><p className="eyebrow">O que acontece durante o dia</p><p className={styles.journeyIntro}>Você vai</p><h2 className={styles.journeyTitle}>Identificar. Planejar. Preparar. E executar HOJE.</h2></Reveal>
          <div className={styles.timeline}>
            {penaporta.day.map((item, index) => (
              <Reveal as="article" key={item} delayMs={index * 65} className={styles.timelineItem}>
                <span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3>
              </Reveal>
            ))}
          </div>
          <Reveal className={styles.dayVisual}>
            <Image src={assetPath(photos.day)} alt="Participantes aplicando o planejamento em uma dinâmica do Pé na Porta" fill sizes="(max-width: 720px) 88vw, 80vw" />
          </Reveal>
        </div>
      </section>

      <section id="depoimentos" className={`section section--light ${styles.testimonials}`}>
        <div className="section__inner">
          <Reveal><p className="eyebrow">Quem viveu, conta</p><h2 className="headline headline--wide">Histórias que continuam depois do treinamento.</h2><p className="lede">Relatos reais de quem levou o método para a vida e para o trabalho.</p></Reveal>
          {!showTestimonialCarousel && (
            <div className={styles.staticTestimonials}>
              {testimonials.map((testimonial, index) => (
                <article key={testimonial.name} className={styles.staticTestimonial}>
                  <div className={styles.staticQuote}>
                    <span className={styles.quoteMark} aria-hidden="true">“</span>
                    <p className={styles.testimonialLabel}>Depoimento / 0{index + 1}</p>
                    <blockquote>{testimonial.quote}</blockquote>
                    <footer><strong>{testimonial.name}</strong><span>{testimonial.role}</span></footer>
                  </div>
                  <div className={`${styles.staticPortrait} ${index === 0 ? styles.karinePortrait : ""}`}>
                    <Image src={assetPath(testimonial.image)} alt={`Foto de ${testimonial.name}`} fill sizes="(max-width: 720px) 88vw, 40vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
        {showTestimonialCarousel && <div className={styles.testimonialViewport} aria-label="Depoimentos de participantes do Pé na Porta">
          <div className={styles.testimonialTrack}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <article key={`${testimonial.name}-${index}`} className={styles.testimonialCard} aria-hidden={index >= testimonials.length}>
                <div className={styles.testimonialMedia}>
                  <Image src={assetPath(testimonial.image)} alt={`Foto de ${testimonial.name}`} fill sizes="(max-width: 720px) 72vw, 30rem" style={{ objectFit: "contain", objectPosition: "center bottom" }} />
                </div>
                <blockquote>“{testimonial.quote}”</blockquote>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>}
      </section>

      <section id="experiencia" className={`section section--light ${styles.proof}`}>
        <div className="section__inner">
          <Reveal><p className="eyebrow">Experiência real</p><h2 className="headline">Não é uma palestra. É treinamento.</h2><p className="lede">Participação ativa, reflexão, exercícios, tomada de decisão, interação e aplicação. O método ganha forma quando você entra em movimento.</p></Reveal>
        </div>
      </section>

      <section id="oferta" className={`section section--grey ${styles.offer}`}>
        <div className={`section__inner ${styles.offerGrid}`}>
          <Reveal>
            <p className="eyebrow">Próxima edição</p>
            <h2 className="headline">Um dia para construir direção.</h2>
            <p className="lede">14 de novembro, das 9h às 20h, na Unidade Estácio, Sulacap. Garanta seu ingresso e leve um convidado.</p>
          </Reveal>
          <Reveal delayMs={110} className={styles.offerCard}>
            <strong className={styles.offerTitle}>Pé na Porta</strong>
            <dl>
              <div><dt>Formato</dt><dd>{penaporta.event.format}</dd></div>
              <div><dt>Duração</dt><dd>{penaporta.event.duration}</dd></div>
              <div><dt>Data</dt><dd>{penaporta.event.date}</dd></div>
              <div><dt>Horário</dt><dd>{penaporta.event.schedule}</dd></div>
              <div><dt>Local</dt><dd>{penaporta.event.location}</dd></div>
              <div><dt>Investimento</dt><dd>{penaporta.event.investment}</dd></div>
            </dl>
            <PenaPortaActions checkoutUrl={checkout} whatsappUrl={whatsapp} purchaseLabel={penaporta.ctas.duo} />
            <p className="micro">Garanta seu ingresso e leve um convidado. Para dúvidas, fale diretamente com o Léo.</p>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="section section--light"><div className="section__inner"><Reveal><p className="eyebrow">Sem rodeios</p><h2 className="headline">Perguntas frequentes</h2></Reveal><Reveal delayMs={80}><FaqAccordion items={penaporta.faq} /></Reveal></div></section>

      <section id="fechamento" className={`section section--dark ${styles.close}`}>
        <ChevronField density={11} />
        <div className="section__inner"><Reveal className={styles.closeCopy}><p className="eyebrow">O próximo movimento é seu</p><h2 className="headline headline--wide">O resultado que você quer exige: clareza, planejamento, preparação e execução hoje.</h2><p className="lede">Pare de depender apenas de intenção, esforço e improviso. Reserve um dia para organizar sua direção, aprender o método e construir um plano que possa ser executado.</p><blockquote>“Planeje bem e os resultados serão bons.”</blockquote><div className={styles.ctaRow}><PenaPortaActions checkoutUrl={checkout} whatsappUrl={whatsapp} purchaseLabel={penaporta.ctas.vacancy} /></div></Reveal></div>
      </section>
    </>
  );
}
