import { LandingPlaceholder } from "@/components/LandingPlaceholder";
import { siteSettings } from "@/lib/siteSettings";

export const metadata = { title: "School of Skull | Instituto 2630" };

export default function SchoolOfSkullPage() {
  return <LandingPlaceholder eyebrow="School of Skull" title="School of Skull" category="Produto permanente" checkoutUrl={siteSettings.school.checkoutUrl} />;
}
