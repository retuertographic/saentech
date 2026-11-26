import type { Metadata } from "next";
import { SaentechHome } from "@/components/sites/saentech/SaentechHome";

export const metadata: Metadata = {
  title: "Home | Saentech Canarias - Saentech Canarias",
  description:
    "¿Por qué Confiar en Saen Tech Canarias? Saen Tech es el resultado de la suma de mucha experiencia, gran profesionalidad, sacrificio, constancia y una firme dedicación a ofrecer soluciones tecnológicas eficientes y personalizadas.",
  icons: {
    icon: [
      { url: "/sites/saentech/img/cropped-favicon-saentech-32x32.png", sizes: "32x32" },
      { url: "/sites/saentech/img/cropped-favicon-saentech-192x192.png", sizes: "192x192" },
    ],
  },
};

export default function Home() {
  return <SaentechHome />;
}
