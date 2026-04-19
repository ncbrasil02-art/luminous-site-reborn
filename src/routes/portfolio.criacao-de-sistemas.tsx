import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/portfolio/criacao-de-sistemas";

export const Route = createFileRoute("/portfolio/criacao-de-sistemas")({
  head: () => buildStubMeta({
    title: "Criação de Sistemas Web · Portfólio NC Brasil",
    description: "Sistemas web personalizados: ERPs, intranets, leilões eletrônicos, plataformas de eventos e ingressos, áreas restritas e integrações.",
    keywords: "criação de sistemas, sistemas web, ERP customizado, intranet, plataforma personalizada",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Portfólio · Sistemas"
      title={<>Sistemas <span className="text-gradient">customizados</span> para o seu negócio</>}
      description={<>Plataformas <strong className="text-foreground">sob medida</strong>: leilões, marketplaces, gestão de eventos, intranets corporativas e mais.</>}
      highlights={[
        { to: "/portfolio/sistema-de-compra-coletiva", label: "Compra Coletiva" },
        { to: "/portfolio/lojas-virtuais-criadas", label: "Lojas Virtuais" },
      ]}
    />
  ),
});
