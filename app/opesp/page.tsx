import { LandingPlaceholder } from "@/components/LandingPlaceholder";
import { siteSettings } from "@/lib/siteSettings";

export const metadata = { title: "OPESP | Instituto 2630" };

export default function OpespPage() {
  return <LandingPlaceholder eyebrow="OPESP" title="OPESP" category="Produto permanente" checkoutUrl={siteSettings.opesp.checkoutUrl} />;
}
