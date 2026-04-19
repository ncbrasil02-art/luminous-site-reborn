import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/sistema-sob-demanda-nc-brasil";

export const Route = createFileRoute("/sistema-sob-demanda-nc-brasil")({
  head: () => buildStubMeta({
    title: "Sistema Sob Demanda · NC Brasil — Plataformas Customizadas",
    description: "Quando seu negócio supera as ferramentas prontas, é hora de um sistema sob demanda. Veja como a NC Brasil entrega.",
    keywords: "sistema sob demanda, software customizado, plataforma sob medida, NC Brasil sistemas",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Blog · Sistemas"
      title={<>Sistema <span className="text-gradient">Sob Demanda</span></>}
      description={<>Por que e quando investir em um <strong className="text-foreground">sistema sob medida</strong> para sua empresa.</>}
    />
  ),
});
