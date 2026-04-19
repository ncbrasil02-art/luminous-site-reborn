import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Zap } from "lucide-react";

const cols = [
  {
    title: "Soluções",
    links: [
      { to: "/solucoes-web", label: "Soluções Web" },
      { to: "/nossos-servicos", label: "Serviços" },
      { to: "/nossos-sistemas", label: "Sistemas" },
      { to: "/portfolio/criacao-de-sistemas", label: "Criação de Sistemas" },
      { to: "/portfolio/lojas-virtuais-criadas", label: "Lojas Virtuais" },
    ],
  },
  {
    title: "Portfólio",
    links: [
      { to: "/portfolio/criacao-de-logomarcas", label: "Criação de Logomarcas" },
      { to: "/portfolio/criacao-de-aplicativos", label: "Criação de Aplicativos" },
      { to: "/portfolio/sistema-de-compra-coletiva", label: "Compra Coletiva" },
      { to: "/portfolio/identidade-visual", label: "Identidade Visual" },
      { to: "/portfolio/logotipos-criados", label: "Logotipos Criados" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { to: "/empresa", label: "Sobre a NC Brasil" },
      { to: "/trabalhos-realizados", label: "Trabalhos Realizados" },
      { to: "/orcamento", label: "Solicitar Orçamento" },
      { to: "/contato", label: "Fale Conosco" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div className="absolute inset-0 bg-mesh opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary glow-sm">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display text-lg font-bold">
                NC <span className="text-gradient">Brasil</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              <strong className="text-foreground">Criação de sistemas web, lojas virtuais e aplicativos</strong> para empresas
              que querem crescer com tecnologia. Atuamos em <strong className="text-foreground">São Paulo</strong> e
              <strong className="text-foreground"> Rio de Janeiro</strong>.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                São Bernardo do Campo — SP · Rio de Janeiro — RJ
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+551140002000" className="story-link hover:text-foreground">
                  +55 (11) 4000-2000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contato@ncbrasil.com.br" className="story-link hover:text-foreground">
                  contato@ncbrasil.com.br
                </a>
              </li>
            </ul>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} NC Brasil — Sistemas & Marketing. Todos os direitos reservados.</p>
          <p>
            <strong className="text-foreground">CNPJ</strong> · Sites · Sistemas · Aplicativos · Marketing Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
