import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/erros-na-criacao-de-um-aplicativo";

export const Route = createFileRoute("/erros-na-criacao-de-um-aplicativo")({
  head: () => buildStubMeta({
    title: "Erros na Criação de um Aplicativo · NC Brasil",
    description: "Os principais erros que matam projetos de aplicativo mobile — e como evitá-los desde o briefing.",
    keywords: "erros criação de aplicativo, desenvolver app mobile, dicas app, projeto de aplicativo",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Blog · Mobile"
      title={<>Erros na criação de um <span className="text-gradient">Aplicativo</span></>}
      description={<>O que separa apps que <strong className="text-foreground">engajam</strong> dos que são <strong className="text-foreground">desinstalados</strong> em 7 dias.</>}
    />
  ),
});
