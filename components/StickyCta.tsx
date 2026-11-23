"use client";

import { useEffect, useState } from "react";
import styles from "./StickyCta.module.css";
import { CtaButton } from "@/components/CtaButton";
import { resolveCheckoutHref } from "@/content/nucoe";

type Props = {
  label: string;
  checkoutUrl: string;
};

export function StickyCta({ label, checkoutUrl }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      const offer = document.getElementById("oferta");
      const pastHero = window.scrollY > (hero?.offsetHeight ?? window.innerHeight) * 0.65;
      const bounds = offer?.getBoundingClientRect();
      const nearOffer = bounds && bounds.top < window.innerHeight * 0.85 && bounds.bottom > 0;
      setVisible(pastHero && !nearOffer);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.bar}>
      <CtaButton href={resolveCheckoutHref(checkoutUrl)}>{label}</CtaButton>
    </div>
  );
}
