import { CursorGlow } from "@/components/CursorGlow";
import { LandingSections } from "@/components/LandingSections";
import { MotionShell } from "@/components/MotionShell";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCta } from "@/components/StickyCta";
import { nucoe } from "@/content/nucoe";
import styles from "./nucoe.module.css";

export const metadata = {
  title: "NUCOE | Instituto 2630",
  description: "Formação ao vivo via Zoom do Instituto 2630 para construir cultura, liderança e propósito.",
};

export default function NucoePage() {
  return (
    <div className={styles.page}>
      <MotionShell>
        <ScrollProgress />
        <CursorGlow />
        <SiteHeader checkoutUrl={nucoe.checkoutUrl} ctaLabel={nucoe.ctas.offer} />
        <main><LandingSections /></main>
        <StickyCta checkoutUrl={nucoe.checkoutUrl} label={nucoe.ctas.offer} />
      </MotionShell>
    </div>
  );
}
