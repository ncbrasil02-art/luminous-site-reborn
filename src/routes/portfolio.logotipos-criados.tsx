import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/portfolio/logotipos-criados";

export const Route = createFileRoute("/portfolio/logotipos-criados")({
  head: () => buildStubMeta({
    title: "Logotipos Criados · Portfólio NC Brasil — Galeria de Marcas",
    description: "Galeria de logotipos criados pela NC Brasil para empresas de diversos segmentos. Conceito, técnica e personalidade em cada marca.",
    keywords: "logotipos criados, galeria de logos, design de logotipo, criação de logo profissional",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Portfólio · Logotipos"
      title={<>Logotipos com <span className="text-gradient">personalidade</span></>}
      description={<>Galeria de marcas que ajudamos a construir, com <strong className="text-foreground">conceito</strong> e <strong className="text-foreground">técnica</strong>.</>}
      highlights={[
        { to: "/portfolio/criacao-de-logomarcas", label: "Criação de Logomarcas" },
        { to: "/portfolio/identidade-visual", label: "Identidade Visual" },
      ]}
    />
  ),
});
