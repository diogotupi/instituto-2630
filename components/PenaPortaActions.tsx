import { ArrowUpRight } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import styles from "./PenaPortaActions.module.css";

type Props = {
  checkoutUrl: string;
  purchaseLabel: string;
  className?: string;
};

export function PenaPortaActions({ checkoutUrl, purchaseLabel, className = "" }: Props) {
  return (
    <div className={`${styles.actions} ${className}`.trim()}>
      <CtaButton href={checkoutUrl} target="_blank" rel="noreferrer" className={styles.purchase}>
        {purchaseLabel} <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden />
      </CtaButton>
    </div>
  );
}
