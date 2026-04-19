import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/programa-de-ordem-de-servico";

export const Route = createFileRoute("/programa-de-ordem-de-servico")({
  head: () => buildStubMeta({
    title: "Programa de Ordem de Serviço · NC Brasil",
    description: "Sistema de Ordem de Serviço (OS) para gestão completa de atendimentos, técnicos, peças, prazos e relatórios.",
    keywords: "programa de ordem de serviço, sistema de OS, gestão de atendimentos, software para assistência técnica",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Sistema · OS"
      title={<>Programa de <span className="text-gradient">Ordem de Serviço</span></>}
      description={<>Gestão completa de <strong className="text-foreground">OS</strong>, técnicos, peças, prazos e relatórios em um só lugar.</>}
    />
  ),
});
