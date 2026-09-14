import { CursorGlow } from "@/components/CursorGlow";
import { MotionShell } from "@/components/MotionShell";
import { PenaPortaSections } from "@/components/PenaPortaSections";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCta } from "@/components/StickyCta";
import { penaporta } from "@/content/penaporta";
import styles from "./penaporta.module.css";

export const metadata = {
  title: "Pé Na Porta | Instituto 2630",
  description: "Um dia de treinamento presencial para transformar objetivos em planejamento, prioridades e ações executáveis.",
};

export default function PenaPortaPage() {
  return (
    <div className={styles.page}>
      <MotionShell>
        <ScrollProgress />
        <CursorGlow />
        <SiteHeader checkoutUrl={penaporta.checkoutUrl} ctaLabel={penaporta.ctas.short} />
        <main><PenaPortaSections /></main>
        <StickyCta checkoutUrl={penaporta.checkoutUrl} label={penaporta.ctas.short} />
      </MotionShell>
    </div>
  );
}
