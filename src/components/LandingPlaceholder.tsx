import Link from "next/link";

type LandingPlaceholderProps = {
  eyebrow: string;
  title: string;
  category: string;
};

export function LandingPlaceholder({ eyebrow, title, category }: LandingPlaceholderProps) {
  return (
    <main className="placeholder-page">
      <div className="placeholder-grid" aria-hidden="true" />
      <div className="placeholder-orbit" aria-hidden="true" />
      <div className="placeholder-content">
        <Link className="placeholder-brand" href="/">Instituto <span>2630</span></Link>
        <p className="eyebrow"><span /> {category}</p>
        <p className="placeholder-kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="placeholder-copy">Esta landing page está em construção. Em breve, um novo treinamento do Instituto 2630 estará aqui.</p>
        <Link className="placeholder-back" href="/">Voltar ao Instituto <span>↗</span></Link>
      </div>
      <div className="placeholder-code" aria-hidden="true">26 / 30</div>
    </main>
  );
}
