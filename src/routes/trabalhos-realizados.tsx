import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/trabalhos-realizados";

export const Route = createFileRoute("/trabalhos-realizados")({
  head: () => buildStubMeta({
    title: "Trabalhos Realizados · NC Brasil — Portfólio de Projetos Digitais",
    description: "Portfólio NC Brasil: sites, sistemas, lojas virtuais, aplicativos, logotipos e identidades visuais entregues para empresas em todo o Brasil.",
    keywords: "portfólio NC Brasil, trabalhos realizados, cases de sucesso, projetos web, sites criados",
    canonical: URL,
    faq: [
      { q: "Quantos projetos a NC Brasil já entregou?", a: "Já entregamos mais de 745 projetos, incluindo sites, sistemas, lojas virtuais e aplicativos de alta performance." }
    ]
  }),
  component: () => (
    <StubPage
      eyebrow="Trabalhos Realizados"
      title={<>Mais de <span className="text-gradient">745 projetos</span> no ar</>}
      description={<>Conheça <strong className="text-foreground">cases reais</strong> de sites, sistemas, lojas e aplicativos que entregamos.</>}
      highlights={[
        { to: "/portfolio/criacao-de-logomarcas", name: "Criação de Logomarcas" },
        { to: "/portfolio/lojas-virtuais-criadas", name: "Lojas Virtuais Criadas" },
        { to: "/portfolio/criacao-de-aplicativos", name: "Criação de Aplicativos" },
        { to: "/portfolio/criacao-de-sistemas", name: "Criação de Sistemas" },
        { to: "/portfolio/sistema-de-compra-coletiva", name: "Sistema de Compra Coletiva" },
        { to: "/portfolio/identidade-visual", name: "Identidade Visual" },
        { to: "/portfolio/logotipos-criados", name: "Logotipos Criados" },
      ]}
    />
  ),
});
