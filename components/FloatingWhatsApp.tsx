import { MessageCircle } from "lucide-react";
import styles from "./FloatingWhatsApp.module.css";

type Props = { href: string };

export function FloatingWhatsApp({ href }: Props) {
  return (
    <a className={styles.button} href={href} target="_blank" rel="noreferrer" aria-label="Falar com o Léo pelo WhatsApp">
      <MessageCircle size={23} strokeWidth={2.5} aria-hidden />
      <span>Falar com o Léo</span>
    </a>
  );
}
