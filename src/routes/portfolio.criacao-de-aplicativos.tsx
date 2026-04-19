import { createFileRoute } from "@tanstack/react-router";
import { StubPage, buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/portfolio/criacao-de-aplicativos";

export const Route = createFileRoute("/portfolio/criacao-de-aplicativos")({
  head: () => buildStubMeta({
    title: "Criação de Aplicativos Mobile · Portfólio NC Brasil",
    description: "Desenvolvimento de aplicativos mobile iOS e Android com design premium, performance e integração com APIs e sistemas legados.",
    keywords: "criação de aplicativos, desenvolvimento mobile, app iOS Android, aplicativo personalizado",
    canonical: URL,
  }),
  component: () => (
    <StubPage
      eyebrow="Portfólio · Aplicativos"
      title={<>Aplicativos <span className="text-gradient">iOS & Android</span> de alto padrão</>}
      description={<>Apps com <strong className="text-foreground">UX cinematográfica</strong>, performance nativa e integração com seus sistemas.</>}
      highlights={[
        { to: "/portfolio/criacao-de-sistemas", label: "Sistemas Web" },
        { to: "/portfolio/lojas-virtuais-criadas", label: "Lojas Virtuais" },
      ]}
    />
  ),
});
