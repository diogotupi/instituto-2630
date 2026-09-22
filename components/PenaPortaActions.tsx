import { ArrowUpRight, MessageCircle } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import styles from "./PenaPortaActions.module.css";

type Props = {
  checkoutUrl: string;
  whatsappUrl: string;
  purchaseLabel: string;
  className?: string;
};

export function PenaPortaActions({ checkoutUrl, whatsappUrl, purchaseLabel, className = "" }: Props) {
  return (
    <div className={`${styles.actions} ${className}`.trim()}>
      <CtaButton href={checkoutUrl} target="_blank" rel="noreferrer" className={styles.purchase}>
        {purchaseLabel} <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden />
      </CtaButton>
      <a className={styles.whatsapp} href={whatsappUrl} target="_blank" rel="noreferrer">
        <MessageCircle size={19} strokeWidth={2.4} aria-hidden />
        <span>Falar com o Léo</span>
      </a>
    </div>
  );
}
