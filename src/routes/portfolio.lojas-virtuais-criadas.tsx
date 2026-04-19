import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/portfolio/lojas-virtuais-criadas";

export const Route = createFileRoute("/portfolio/lojas-virtuais-criadas")({
  head: () => buildStubMeta({
    title: "Lojas Virtuais Criadas · Portfólio NC Brasil — E-commerce",
    description: "Lojas virtuais e e-commerce de alta conversão. Plataformas integradas a meios de pagamento, frete, ERP e marketing automatizado.",
    keywords: "lojas virtuais, e-commerce, criar loja online, plataforma de e-commerce, marketplace",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Portfólio · E-commerce"
      title={<>Lojas Virtuais que <span className="text-gradient">vendem</span></>}
      description={<>E-commerce integrado a <strong className="text-foreground">pagamentos</strong>, <strong className="text-foreground">frete</strong> e <strong className="text-foreground">ERPs</strong>, com foco em conversão.</>}
      highlights={[
        { to: "/portfolio/criacao-de-sistemas", label: "Criação de Sistemas" },
        { to: "/portfolio/sistema-de-compra-coletiva", label: "Compra Coletiva" },
      ]}
    />
  ),
});
