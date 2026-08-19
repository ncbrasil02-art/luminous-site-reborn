import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/dicas-para-e-commerce";

export const Route = createFileRoute("/dicas-para-e-commerce")({
  head: () => buildStubMeta({
    title: "Dicas para E-Commerce · NC Brasil — Aumente sua Conversão",
    description: "Dicas práticas para vender mais na sua loja virtual: UX, checkout, frete, performance, SEO e marketing.",
    keywords: "dicas e-commerce, aumentar vendas loja virtual, conversão e-commerce, SEO loja virtual",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      subtitle="Blog · E-commerce"
      title={<>Dicas para <span className="text-gradient">E-Commerce</span></>}
      description={<>O que separa lojas virtuais que <strong className="text-foreground">vendem</strong> das que apenas <strong className="text-foreground">existem</strong>.</>}
    />
  ),
});
