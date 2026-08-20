import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { NewsDisplay } from "./NewsDisplay";


const cols = [
  {
    title: "Soluções",
    links: [
      { to: "/solucoes-web", label: "Criação de Sites" },
      { to: "/portfolio/lojas-virtuais-criadas", label: "E-commerce" },
      { to: "/portfolio/criacao-de-aplicativos", label: "Aplicativos Mobile" },
      { to: "/nossos-servicos", label: "Marketing Digital" },
      { to: "/empresa", label: "A Empresa" },
    ],
  },
  {
    title: "Sistemas Core",
    links: [
      { to: "/sistema-de-leilao", label: "Sistema de Leilão" },
      { to: "/programa-de-ordem-de-servico", label: "Ordem de Serviço" },
      { to: "/portfolio/sistema-de-compra-coletiva", label: "Compra Coletiva" },
      { to: "/sistema-sob-demanda-nc-brasil", label: "Sistemas Sob Demanda" },
      { to: "/nossos-sistemas", label: "Ver todos os Sistemas" },
    ],
  },
  {
    title: "Portfólio & Contato",
    links: [
      { to: "/trabalhos-realizados", label: "Trabalhos Realizados" },
      { to: "/portfolio/identidade-visual", label: "Identidade Visual" },
      { to: "/portfolio/logotipos-criados", label: "Logotipos" },
      { to: "/orcamento", label: "Solicitar Orçamento" },
      { to: "/contato", label: "Fale Conosco" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <NewsDisplay />
      <div className="absolute inset-0 bg-mesh opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.jpg" alt="NC Brasil" className="h-10 w-auto object-contain" />
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
                <a href="tel:+5521996509905" className="story-link hover:text-foreground">
                  +55 (21) 99650-9905
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
          <div className="flex items-center gap-4">
            <p>
              <strong className="text-foreground">CNPJ</strong> · Sites · Sistemas · Aplicativos · Marketing Digital
            </p>
            <Link to="/admin" className="opacity-0 hover:opacity-100 transition-opacity">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
