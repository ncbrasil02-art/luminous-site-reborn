import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/solucoes-web";

export const Route = createFileRoute("/solucoes-web")({
  head: () => buildStubMeta({
    title: "Soluções Web · NC Brasil — Plataformas Digitais Sob Medida",
    description: "Soluções web completas: sites, sistemas, lojas virtuais e integrações. Tecnologia escalável para o seu negócio crescer.",
    keywords: "soluções web, plataforma digital, desenvolvimento web SP, integração de sistemas, NC Brasil",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Soluções Web"
      title={<>Plataformas digitais <span className="text-gradient">sob medida</span></>}
      description={<>Combinamos <strong className="text-foreground">design</strong>, <strong className="text-foreground">engenharia</strong> e <strong className="text-foreground">marketing</strong> para construir soluções web que escalam.</>}
      highlights={[
        { to: "/nossos-servicos", label: "Nossos Serviços" },
        { to: "/nossos-sistemas", label: "Nossos Sistemas" },
        { to: "/portfolio/lojas-virtuais-criadas", label: "Lojas Virtuais" },
        { to: "/portfolio/criacao-de-aplicativos", label: "Aplicativos Mobile" },
      ]}
    />
  ),
});
