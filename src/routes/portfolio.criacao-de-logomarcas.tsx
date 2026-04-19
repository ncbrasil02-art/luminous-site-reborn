import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/portfolio/criacao-de-logomarcas";

export const Route = createFileRoute("/portfolio/criacao-de-logomarcas")({
  head: () => buildStubMeta({
    title: "Criação de Logomarcas · Portfólio NC Brasil",
    description: "Criação de logomarcas profissionais e identidade visual completa. Logotipos modernos, atemporais e estratégicos para sua marca se destacar.",
    keywords: "criação de logomarcas, design de logo, logotipo profissional, identidade visual, branding",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Portfólio · Logomarcas"
      title={<>Criação de <span className="text-gradient">Logomarcas</span> que marcam</>}
      description={<>Logotipos com <strong className="text-foreground">conceito</strong>, <strong className="text-foreground">técnica</strong> e <strong className="text-foreground">estratégia de marca</strong>.</>}
      highlights={[
        { to: "/portfolio/identidade-visual", label: "Identidade Visual" },
        { to: "/portfolio/logotipos-criados", label: "Logotipos Criados" },
      ]}
    />
  ),
});
