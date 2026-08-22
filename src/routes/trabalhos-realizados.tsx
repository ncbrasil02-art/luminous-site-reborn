import { ChevronRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { StubPage } from "@/components/StubPage";
import { buildMeta, SITE_URL } from "@/lib/seo";

const URL = `${SITE_URL}/trabalhos-realizados`;

export const Route = createFileRoute("/trabalhos-realizados")({
  head: () => buildMeta({
    title: "Trabalhos Realizados | Portfólio de Sites e Sistemas de Alta Performance",
    description: "Portfólio NC Brasil: sites, sistemas, lojas virtuais, aplicativos, logotipos e identidades visuais entregues para empresas em todo o Brasil.",
    keywords: "portfólio NC Brasil, trabalhos realizados, cases de sucesso, projetos web, sites criados",
    canonical: URL,
    ogImage: "/logo-nc-brasil.png",
    faq: [
      { q: "Quantos projetos a NC Brasil já entregou?", a: "Já entregamos mais de 745 projetos, incluindo sites, sistemas, lojas virtuais e aplicativos de alta performance." }
    ]
  }),
  component: () => (
    <div className="pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground list-none p-0 m-0">
            <li className="flex items-center gap-1">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3 opacity-50" aria-hidden="true" />
              <span className="text-foreground/80" aria-current="page">Portfólio</span>
            </li>
          </ol>
        </nav>
      </div>
      <StubPage
        eyebrow="Trabalhos Realizados"
        title={<>Mais de <span className="text-gradient">745 projetos</span> no ar</>}
        description={<>Conheça <strong className="text-foreground">cases reais</strong> de sites, sistemas, lojas e aplicativos que entregamos.</>}
        highlights={[
          { to: "/portfolio/criacao-de-logomarcas", label: "Criação de Logomarcas" },
          { to: "/portfolio/lojas-virtuais-criadas", label: "Lojas Virtuais Criadas" },
          { to: "/portfolio/criacao-de-aplicativos", label: "Criação de Aplicativos" },
          { to: "/portfolio/criacao-de-sistemas", label: "Criação de Sistemas" },
          { to: "/portfolio/sistema-de-compra-coletiva", label: "Sistema de Compra Coletiva" },
          { to: "/portfolio/identidade-visual", label: "Identidade Visual" },
          { to: "/portfolio/logotipos-criados", label: "Logotipos Criados" },
        ]}
      />
    </div>
  ),
});
