import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/nossos-sistemas";

export const Route = createFileRoute("/nossos-sistemas")({
  head: () => buildStubMeta({
    title: "Nossos Sistemas · NC Brasil — Plataformas Web Personalizadas",
    description: "Sistemas web sob demanda: leilões eletrônicos, marketplaces, intranets, ERPs, sistemas de cupons e plataformas customizadas.",
    keywords: "criação de sistemas, sistema sob demanda, leilão eletrônico, marketplace, intranet, ERP customizado",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Nossos Sistemas"
      title={<>Sistemas <span className="text-gradient">sob demanda</span> que escalam</>}
      description={<>Plataformas como <strong className="text-foreground">leilões</strong>, <strong className="text-foreground">marketplaces</strong>, <strong className="text-foreground">compra coletiva</strong> e <strong className="text-foreground">intranets corporativas</strong>.</>}
      highlights={[
        { to: "/portfolio/criacao-de-sistemas", label: "Criação de Sistemas" },
        { to: "/portfolio/sistema-de-compra-coletiva", label: "Sistema de Compra Coletiva" },
        { to: "/portfolio/lojas-virtuais-criadas", label: "Lojas Virtuais" },
        { to: "/portfolio/criacao-de-aplicativos", label: "Aplicativos Mobile" },
      ]}
    />
  ),
});
