import { WhatsAppIcon } from "./WhatsAppIcon";
import styles from "./FloatingWhatsApp.module.css";

type Props = { href: string };

export function FloatingWhatsApp({ href }: Props) {
  return (
    <a className={styles.button} href={href} target="_blank" rel="noreferrer" aria-label="Falar com o Léo pelo WhatsApp">
      <WhatsAppIcon />
      <span>Falar com o Léo</span>
    </a>
  );
}
