import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/instagram-para-empresas";

export const Route = createFileRoute("/instagram-para-empresas")({
  head: () => buildStubMeta({
    title: "Instagram para Empresas · NC Brasil — Estratégia de Conteúdo",
    description: "Como usar o Instagram para gerar leads, autoridade e vendas para sua empresa. Estratégia, conteúdo e métricas que importam.",
    keywords: "instagram para empresas, marketing instagram, estratégia de conteúdo, redes sociais para negócios",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Blog · Marketing"
      title={<>Instagram para <span className="text-gradient">Empresas</span></>}
      description={<>Como transformar o Instagram em uma <strong className="text-foreground">máquina de leads</strong> para o seu negócio.</>}
    />
  ),
});
