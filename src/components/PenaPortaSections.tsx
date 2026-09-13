"use client";

import Image from "next/image";
import { ChevronField } from "@/components/ChevronField";
import { CtaButton } from "@/components/CtaButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/assetPath";
import { penaporta, resolvePenaPortaCheckout } from "@/content/penaporta";
import styles from "./PenaPortaSections.module.css";

export function PenaPortaSections() {
  const checkout = resolvePenaPortaCheckout(penaporta.checkoutUrl);

  return (
    <>
      <section id="hero" className={`section section--dark ${styles.hero}`}>
        <Image src={assetPath("/hero-training.jpg")} alt="Participante diante de uma experiência do Instituto 2630" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroShade} aria-hidden />
        <div className={styles.heroLines} aria-hidden><i /><i /><i /><i /><i /></div>
        <div className={`section__inner ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <Reveal><p className={`eyebrow ${styles.lightEyebrow}`}>Estratégia + mentalidade + ação</p></Reveal>
            <Reveal delayMs={100}>
              <h1 className={styles.heroTitle}>
                <span>Planeje bem</span>
                <strong>e os resultados</strong>
                <span>serão bons.</span>
              </h1>
            </Reveal>
            <Reveal delayMs={180}>
              <p className={styles.heroLede}>Um dia para transformar aquilo que você deseja alcançar em meta, estratégia, crenças alinhadas e um plano capaz de colocar você em movimento.</p>
            </Reveal>
            <Reveal delayMs={240}>
              <div className={styles.ctaRow}><CtaButton href={checkout}>{penaporta.ctas.primary}</CtaButton></div>
              <div className={styles.heroMeta}>
                <span><strong>{penaporta.event.format}</strong><small>experiência aplicada</small></span>
                <span><strong>10 horas</strong><small>jornada intensiva</small></span>
                <span><strong>Plano concreto</strong><small>para o próximo movimento</small></span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="problema" className="section section--light">
        <div className={`section__inner ${styles.problemGrid}`}>
          <Reveal>
            <p className="eyebrow">O problema</p>
            <h2 className="headline">Você trabalha muito. Mas está avançando na direção certa?</h2>
            <p className="lede">O problema nem sempre é falta de esforço. Muitas vezes, é falta de direção, estratégia e consistência na execução.</p>
          </Reveal>
          <div className={styles.questionList}>
            {penaporta.problem.map((item, index) => <Reveal as="article" key={item} delayMs={index * 70} className={styles.question}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className={`section section--dark ${styles.statement}`}>
        <ChevronField density={9} />
        <div className="section__inner">
          <Reveal>
            <p className="eyebrow">O reenquadramento</p>
            <h2 className="headline headline--wide">Desejo não é meta.<br /><em>Meta sem estratégia não é plano.</em></h2>
            <p className="lede">Resultado extraordinário não nasce do improviso heroico. Nasce de clareza da missão, estratégia, crenças alinhadas, ação, controle emocional e flexibilidade para mudar o necessário.</p>
          </Reveal>
        </div>
      </section>

      <section id="guia" className={`section section--light ${styles.guide}`}>
        <Image src={assetPath("/images/freitas-whiteboard.jpg")} alt="Freitas estruturando um planejamento" fill sizes="100vw" className={styles.guideImage} />
        <div className={styles.guideShade} aria-hidden />
        <div className="section__inner">
          <Reveal className={styles.guideCopy}>
            <p className="eyebrow">Experiência real. Aplicação prática.</p>
            <h2 className="headline">Planeje como um Operações Especiais. Aplique na sua vida e no seu negócio.</h2>
            <p className="lede">O Instituto 2630 traduz experiência real de planejamento estratégico, liderança, responsabilidade e tomada de decisão para os desafios da vida e dos negócios. Não é sobre transformar empresários em operadores. É sobre aprender a pensar, decidir e agir com método.</p>
          </Reveal>
        </div>
      </section>

      <section id="plano" className={`section section--dark ${styles.journey}`}>
        <div className="section__inner">
          <Reveal>
            <p className="eyebrow">O mecanismo</p>
            <h2 className="headline">Do que você quer para o que você vai fazer.</h2>
          </Reveal>
          <div className={styles.journeyTrack}>
            {penaporta.journey.map((item, index) => <Reveal key={item} delayMs={index * 55} className={styles.journeyItem}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></Reveal>)}
          </div>
        </div>
      </section>

      <section id="experiencia" className="section section--grey">
        <div className="section__inner">
          <Reveal><p className="eyebrow">A experiência</p><h2 className="headline">10 horas. Uma jornada. Cinco movimentos.</h2><p className="lede">A experiência alterna fundamentos, reflexão, escrita, interação e aplicação. Não é uma grade pesada: é uma progressão desenhada para produzir clareza.</p></Reveal>
          <div className={styles.experienceGrid}>
            {penaporta.experience.map((item, index) => <Reveal as="article" key={item.code} delayMs={index * 80} className={styles.experienceCard}><span>{item.code}</span><h3>{item.title}</h3><p>{item.body}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section id="entregavel" className={`section section--dark ${styles.deliverable}`}>
        <Image src={assetPath("/course-01.jpg")} alt="Participantes em uma experiência do Instituto 2630" fill sizes="100vw" className={styles.deliverableImage} />
        <div className={styles.deliverableShade} aria-hidden />
        <div className={`section__inner ${styles.deliverableGrid}`}>
          <Reveal><p className="eyebrow">Entregável concreto</p><h2 className="headline">Você não sai apenas com anotações. Sai com um Plano Pé na Porta.</h2><p className="lede">O evento termina quando você sabe qual movimento fará depois dele.</p></Reveal>
          <Reveal delayMs={120}>
            <ul className={styles.checkList}>{penaporta.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className={styles.ctaRow}><CtaButton href={checkout}>{penaporta.ctas.primary}</CtaButton></div>
          </Reveal>
        </div>
      </section>

      <section id="transformacao" className="section section--light">
        <div className="section__inner">
          <Reveal><p className="eyebrow">A transformação</p><h2 className="headline">Da ocupação ao movimento.</h2></Reveal>
          <div className={styles.beforeAfter}>
            <Reveal className={styles.before}><span>Antes</span><ul>{penaporta.before.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
            <Reveal delayMs={120} className={styles.after}><span>Depois</span><ul>{penaporta.after.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
          </div>
        </div>
      </section>

      <section id="para-quem" className={`section section--dark ${styles.audience}`}>
        <div className={`section__inner ${styles.audienceGrid}`}>
          <Reveal><p className="eyebrow">Para quem é</p><h2 className="headline">Para quem carrega responsabilidade e quer mudar o rumo.</h2><p className="lede">Não é preciso estar começando. É para quem já trabalha, lidera e entrega — mas percebe que esforço sem prioridade, estratégia e consistência está custando tempo, energia e resultado.</p></Reveal>
          <Reveal delayMs={110} className={styles.audiencePanel}><h3>Esta experiência é para</h3><ul>{penaporta.audience.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
          <Reveal delayMs={190} className={`${styles.audiencePanel} ${styles.notPanel}`}><h3>O Pé na Porta não é</h3><ul>{penaporta.notThis.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
        </div>
      </section>

      <section id="autoridade" className={`section section--light ${styles.authority}`}>
        <div className="section__inner">
          <Reveal><p className="eyebrow">Autoridade que vem da prática</p><h2 className="headline headline--wide">A experiência vem das Operações Especiais. A aplicação acontece na liderança e nos negócios.</h2></Reveal>
          <div className={styles.authorityStrip}>
            <Reveal><strong>Planejamento</strong><span>Missão clara antes da ação.</span></Reveal>
            <Reveal delayMs={80}><strong>Decisão</strong><span>Responsabilidade mesmo sob pressão.</span></Reveal>
            <Reveal delayMs={160}><strong>Adaptação</strong><span>Leitura de cenário para replanejar.</span></Reveal>
          </div>
        </div>
      </section>

      <section id="oferta" className={`section section--dark ${styles.offer}`}>
        <div className={`section__inner ${styles.offerGrid}`}>
          <Reveal>
            <p className="eyebrow">Próxima edição</p>
            <h2 className="headline">Entre em movimento.</h2>
            <p className="lede">Uma experiência presencial e intensiva para organizar sua missão, construir estratégia e definir o próximo passo.</p>
          </Reveal>
          <Reveal delayMs={120} className={styles.offerCard}>
            <p className={styles.offerLabel}>Investimento de referência</p>
            <strong className={styles.price}>R$ 197</strong>
            <p className={styles.guest}>Leve 1 convidado sem custo adicional</p>
            <dl><div><dt>Formato</dt><dd>{penaporta.event.format}</dd></div><div><dt>Duração</dt><dd>{penaporta.event.duration}</dd></div><div><dt>Data</dt><dd>{penaporta.event.date}</dd></div><div><dt>Local</dt><dd>{penaporta.event.location}</dd></div></dl>
            <CtaButton href={checkout}>{penaporta.ctas.primary}</CtaButton>
            <p className="micro">Data, local, condições e link serão atualizados para a próxima edição.</p>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="section section--light"><div className="section__inner"><Reveal><p className="eyebrow">Sem rodeios</p><h2 className="headline">Perguntas frequentes</h2></Reveal><Reveal delayMs={80}><FaqAccordion items={penaporta.faq} /></Reveal></div></section>

      <section id="fechamento" className={`section section--dark ${styles.close}`}>
        <ChevronField density={11} />
        <div className="section__inner"><Reveal className={styles.closeCopy}><p className="eyebrow">O próximo movimento é seu</p><h2 className="headline headline--wide">Se você não definir o próximo movimento, a urgência vai definir por você.</h2><p className="lede">Assuma a responsabilidade. Organize a estratégia. Entre em ação.</p><div className={styles.ctaRow}><CtaButton href={checkout}>{penaporta.ctas.primary}</CtaButton></div></Reveal></div>
      </section>
    </>
  );
}
