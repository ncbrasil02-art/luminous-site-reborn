import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/portfolio/identidade-visual";

export const Route = createFileRoute("/portfolio/identidade-visual")({
  head: () => buildStubMeta({
    title: "Identidade Visual · Portfólio NC Brasil — Branding Profissional",
    description: "Criação de identidade visual completa: logotipo, paleta, tipografia, design system e manual da marca para presença consistente.",
    keywords: "identidade visual, branding, manual da marca, design system, criação de marca",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Portfólio · Branding"
      title={<>Identidade Visual com <span className="text-gradient">alma</span> e estratégia</>}
      description={<>Logotipo, paleta, tipografia, <strong className="text-foreground">design system</strong> e manual da marca para uma presença consistente.</>}
      highlights={[
        { to: "/portfolio/criacao-de-logomarcas", label: "Criação de Logomarcas" },
        { to: "/portfolio/logotipos-criados", label: "Logotipos Criados" },
      ]}
    />
  ),
});
