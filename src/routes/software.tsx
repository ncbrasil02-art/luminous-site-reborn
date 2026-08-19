import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/software";

export const Route = createFileRoute("/software")({
  head: () => buildStubMeta({
    title: "Software Personalizado · NC Brasil — Desenvolvimento Sob Demanda",
    description: "Desenvolvimento de software personalizado para automatizar processos, integrar sistemas e dar escala ao seu negócio.",
    keywords: "software personalizado, desenvolvimento de software, automação, integração de sistemas",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Blog · Tecnologia"
      title={<>Software <span className="text-gradient">sob medida</span></>}
      description={<>Quando faz sentido desenvolver um <strong className="text-foreground">software customizado</strong> para sua operação.</>}
    />
  ),
});
