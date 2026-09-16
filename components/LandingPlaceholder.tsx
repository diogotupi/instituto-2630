import Link from "next/link";
import styles from "./LandingPlaceholder.module.css";

type LandingPlaceholderProps = {
  eyebrow: string;
  title: string;
  category: string;
};

export function LandingPlaceholder({ eyebrow, title, category }: LandingPlaceholderProps) {
  return (
    <main className={styles.page}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.orbit} aria-hidden="true" />
      <div className={styles.content}>
        <Link className={styles.brand} href="/">Instituto <span>2630</span></Link>
        <p className={styles.eyebrow}><span /> {category}</p>
        <p className={styles.kicker}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.copy}>Esta landing page está em construção. Em breve, um novo treinamento do Instituto 2630 estará aqui.</p>
        <Link className={styles.back} href="/">Voltar ao Instituto <span>↗</span></Link>
      </div>
      <div className={styles.code} aria-hidden="true">26 / 30</div>
    </main>
  );
}
