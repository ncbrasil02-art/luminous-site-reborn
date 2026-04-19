import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/portfolio/sistema-de-compra-coletiva";

export const Route = createFileRoute("/portfolio/sistema-de-compra-coletiva")({
  head: () => buildStubMeta({
    title: "Sistema de Compra Coletiva · Portfólio NC Brasil",
    description: "Plataforma completa de compra coletiva e cupons de desconto: gestão de ofertas, parceiros, vouchers, pagamentos e relatórios.",
    keywords: "sistema de compra coletiva, plataforma de cupons, sistema de ofertas, voucher digital",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Portfólio · Compra Coletiva"
      title={<>Plataformas de <span className="text-gradient">Compra Coletiva</span> & Cupons</>}
      description={<>Sistemas de <strong className="text-foreground">ofertas</strong>, <strong className="text-foreground">vouchers</strong> e gestão de parceiros, prontos para escalar.</>}
      highlights={[
        { to: "/portfolio/criacao-de-sistemas", label: "Outros Sistemas" },
        { to: "/portfolio/lojas-virtuais-criadas", label: "Lojas Virtuais" },
      ]}
    />
  ),
});
