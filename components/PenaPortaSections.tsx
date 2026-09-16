"use client";

import Image from "next/image";
import { ChevronField } from "@/components/ChevronField";
import { CtaButton } from "@/components/CtaButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/assetPath";
import { penaporta, resolvePenaPortaCheckout } from "@/content/penaporta";
import styles from "./PenaPortaSections.module.css";

const proofPhotos = [
  { src: "/course-03.jpg", alt: "Participantes em atividade prática do Instituto 2630" },
  { src: "/course-08.jpg", alt: "Turma durante treinamento presencial" },
  { src: "/course-12.jpg", alt: "Participante desenvolvendo uma atividade do treinamento" },
  { src: "/course-17.jpg", alt: "Freitas conduzindo uma experiência presencial" },
  { src: "/course-05.jpg", alt: "Interação entre participantes durante o curso" },
  { src: "/course-19.jpg", alt: "Visão geral de uma turma do Instituto 2630" },
];

export function PenaPortaSections() {
  const checkout = resolvePenaPortaCheckout(penaporta.checkoutUrl);

  return (
    <>
      <section id="hero" className={`section section--dark ${styles.hero}`}>
        <Image src={assetPath("/hero-training.jpg")} alt="Treinamento presencial do Instituto 2630" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroShade} aria-hidden />
        <div className={styles.heroGridLines} aria-hidden />
        <div className={`section__inner ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <Reveal><p className={`eyebrow ${styles.lightEyebrow}`}>Treinamento presencial | Instituto 2630</p></Reveal>
            <Reveal delayMs={80}><p className={styles.productName}>Pé na Porta</p></Reveal>
            <Reveal delayMs={130}>
              <h1 className={styles.heroTitle}>Planeje bem <strong>e os resultados</strong> serão bons.</h1>
            </Reveal>
            <Reveal delayMs={190}>
              <p className={styles.heroLede}>Um dia inteiro para transformar objetivos em planejamento, prioridades e ações executáveis — usando os 7 Atributos e o Mapa Combat.</p>
            </Reveal>
            <Reveal delayMs={240}>
              <div className={styles.ctaRow}><CtaButton href={checkout}>{penaporta.ctas.primary}</CtaButton></div>
              <div className={styles.heroMeta} aria-label="Informações principais">
                <span>Evento presencial</span><span>Um dia de treinamento</span><span>Método prático</span><span>Aplicação</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="problema" className={`section section--light ${styles.problem}`}>
        <div className={`section__inner ${styles.problemGrid}`}>
          <Reveal>
            <p className="eyebrow">Antes de agir</p>
            <h2 className="headline headline--wide">Você está executando um plano — ou apenas reagindo ao que aparece?</h2>
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
        <ChevronField density={10} />
        <div className="section__inner">
          <Reveal className={styles.thesisCopy}>
            <p className="eyebrow">A tese</p>
            <h2 className="headline headline--wide">Resultado é consequência de preparação.</h2>
            <p className="lede">Planejamento não é burocracia. É o que aumenta sua capacidade de decidir e agir quando a realidade muda. O Pé na Porta traz essa lógica para a vida e para a empresa: entender o cenário, organizar recursos, definir prioridades e executar com clareza.</p>
            <blockquote>“Planeje bem e os resultados serão bons.”</blockquote>
          </Reveal>
        </div>
      </section>

      <section id="o-que-e" className={`section section--light ${styles.workshop}`}>
        <div className="section__inner">
          <Reveal>
            <p className="eyebrow">O que é o Pé na Porta</p>
            <h2 className="headline headline--wide">Um dia para sair do improviso e entrar em modo de execução.</h2>
            <p className="lede">Um workshop presencial e prático para pensar, decidir, planejar e agir de forma mais consciente. Você participa, escreve, discute, aplica e define o próximo movimento.</p>
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

      <section id="metodo" className={`section section--dark ${styles.method}`}>
        <div className="section__inner">
          <Reveal>
            <p className="eyebrow">7 Atributos + Mapa Combat</p>
            <h2 className="headline headline--wide">Você não vai sair apenas com anotações. Vai sair com um mapa.</h2>
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
            <div className={styles.mapCore}><small>Ferramenta de aplicação</small><strong>Mapa<br />Combat</strong><span>Planejamento → decisão → execução</span></div>
          </Reveal>
          <div className={styles.ctaRow}><CtaButton href={checkout}>{penaporta.ctas.primary}</CtaButton></div>
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
          <Reveal><p className="eyebrow">O que acontece durante o dia</p><h2 className="headline">Preparar. Planejar. Executar.</h2></Reveal>
          <div className={styles.timeline}>
            {penaporta.day.map((item, index) => (
              <Reveal as="article" key={item} delayMs={index * 65} className={styles.timelineItem}>
                <span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className={`section section--light ${styles.proof}`}>
        <div className="section__inner">
          <Reveal><p className="eyebrow">Experiência real</p><h2 className="headline">Não é uma palestra. É treinamento.</h2><p className="lede">Participação ativa, reflexão, exercícios, tomada de decisão, interação e aplicação. O método ganha forma quando você entra em movimento.</p></Reveal>
          <div className={styles.photoGrid}>
            {proofPhotos.map((photo, index) => (
              <Reveal key={photo.src} delayMs={(index % 3) * 70} className={styles.photoCard}>
                <Image src={assetPath(photo.src)} alt={photo.alt} fill sizes="(max-width: 700px) 90vw, 33vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="instituto" className={`section section--dark ${styles.institute}`}>
        <div className={`section__inner ${styles.instituteGrid}`}>
          <Reveal className={styles.instituteCopy}>
            <p className="eyebrow">Instituto 2630</p>
            <h2 className="headline headline--wide">Liderança, mentalidade e cultura aplicadas à realidade.</h2>
            <p className="lede">O Instituto 2630 nasceu da experiência de seus fundadores em operações especiais e da tradução desses aprendizados para liderança, autoliderança, cultura e performance organizacional.</p>
            <p>O objetivo não é reproduzir o ambiente militar dentro das empresas, mas aplicar princípios de preparação, responsabilidade, unidade, treinamento e execução onde resultados dependem de pessoas.</p>
          </Reveal>
          <div className={styles.founders}>
          <Reveal className={styles.founderCard}><div className={styles.founderImage}><Image src={assetPath("/freitas-original.png")} alt="Freitas, co-fundador do Instituto 2630" fill sizes="(max-width: 800px) 90vw, 24vw" /></div><span>26</span><strong>Freitas</strong></Reveal>
            <Reveal delayMs={90} className={styles.founderCard}><div className={`${styles.founderImage} ${styles.wallaceImage}`}><Image src={assetPath("/wallace.png")} alt="Wallace, co-fundador do Instituto 2630" fill sizes="(max-width: 800px) 90vw, 24vw" /></div><span>30</span><strong>Wallace</strong></Reveal>
          </div>
        </div>
      </section>

      <section id="oferta" className={`section section--grey ${styles.offer}`}>
        <div className={`section__inner ${styles.offerGrid}`}>
          <Reveal>
            <p className="eyebrow">Próxima edição</p>
            <h2 className="headline">Um dia para construir direção.</h2>
            <p className="lede">As informações abaixo serão atualizadas assim que a próxima turma estiver aberta para inscrição.</p>
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
            <CtaButton href={checkout}>{penaporta.ctas.short}</CtaButton>
            <p className="micro">O botão será conectado ao checkout oficial da edição vigente.</p>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="section section--light"><div className="section__inner"><Reveal><p className="eyebrow">Sem rodeios</p><h2 className="headline">Perguntas frequentes</h2></Reveal><Reveal delayMs={80}><FaqAccordion items={penaporta.faq} /></Reveal></div></section>

      <section id="fechamento" className={`section section--dark ${styles.close}`}>
        <ChevronField density={11} />
        <div className="section__inner"><Reveal className={styles.closeCopy}><p className="eyebrow">O próximo movimento é seu</p><h2 className="headline headline--wide">O resultado que você quer amanhã exige planejamento hoje.</h2><p className="lede">Pare de depender apenas de intenção, esforço e improviso. Reserve um dia para organizar sua direção, aprender o método e construir um plano que possa ser executado.</p><blockquote>“Planeje bem e os resultados serão bons.”</blockquote><div className={styles.ctaRow}><CtaButton href={checkout}>{penaporta.ctas.primary}</CtaButton></div></Reveal></div>
      </section>
    </>
  );
}
