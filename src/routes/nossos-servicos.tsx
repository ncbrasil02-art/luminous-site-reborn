import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/nossos-servicos";

export const Route = createFileRoute("/nossos-servicos")({
  head: () => buildStubMeta({
    title: "Nossos Serviços · NC Brasil — Sites, Sistemas, Apps e Marketing",
    description: "Conheça os serviços da NC Brasil: criação de sites, sistemas web, lojas virtuais, aplicativos mobile, identidade visual e marketing digital.",
    keywords: "serviços de tecnologia, criação de sites, marketing digital, agência web SP RJ",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Nossos Serviços"
      title={<>Serviços que <span className="text-gradient">transformam</span> seu negócio</>}
      description={<>Do <strong className="text-foreground">briefing</strong> ao <strong className="text-foreground">crescimento</strong>: tudo que sua marca precisa para vender mais online.</>}
      highlights={[
        { to: "/portfolio/criacao-de-logomarcas", label: "Criação de Logomarcas" },
        { to: "/portfolio/criacao-de-sistemas", label: "Criação de Sistemas" },
        { to: "/portfolio/lojas-virtuais-criadas", label: "Lojas Virtuais" },
        { to: "/portfolio/criacao-de-aplicativos", label: "Aplicativos Mobile" },
      ]}
    />
  ),
});
