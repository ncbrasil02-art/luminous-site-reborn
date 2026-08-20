import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  History,
  Handshake,
  Mail,
  Globe2,
  ShoppingBag,
  FileText,
  LineChart,
  Search,
  Server,
  Code2,
  LayoutDashboard,
  Smartphone,
  Palette,
  Target,
  Facebook,
  Instagram,
  Lightbulb,
  Gavel,
  Tractor,
  Car,
  Ticket,
  Dice5,
  Sparkles as ScratchIcon,
  Gift,
  Store,
  CarFront,
  CarFront as CarFrontIcon,
  Coins,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { trackClick } from "@/lib/analytics";

type NavLeaf = { to: string; label: string; icon: any };
type NavItem = { to: string; label: string } | { label: string; submenu: NavLeaf[] };

const navItems: NavItem[] = [
  {
    label: "Empresa",
    submenu: [
      { to: "/empresa/quem-somos", label: "Quem Somos", icon: Users },
      { to: "/empresa/nossa-historia", label: "Nossa História", icon: History },
      { to: "/empresa/clientes", label: "Clientes", icon: Handshake },
      { to: "/contato", label: "Contato", icon: Mail },
    ],
  },
  {
    label: "Soluções Web",
    submenu: [
      { to: "/solucoes-web/desenvolvimento-de-sites", label: "Desenvolvimento de Sites", icon: Globe2 },
      { to: "/solucoes-web/loja-virtual", label: "Loja Virtual", icon: ShoppingBag },
      { to: "/solucoes-web/landing-pages", label: "Landing Pages", icon: FileText },
      { to: "/solucoes-web/marketing-digital", label: "Marketing Digital", icon: LineChart },
      { to: "/solucoes-web/seo-google", label: "SEO Google", icon: Search },
      { to: "/solucoes-web/hospedagem", label: "Hospedagem", icon: Server },
    ],
  },
  {
    label: "Nossos Serviços",
    submenu: [
      { to: "/servicos/desenvolvimento", label: "Desenvolvimento", icon: Code2 },
      { to: "/servicos/sistemas-web", label: "Sistemas Web", icon: LayoutDashboard },
      { to: "/servicos/aplicativos", label: "Aplicativos", icon: Smartphone },
      { to: "/servicos/identidade-visual", label: "Identidade Visual", icon: Palette },
      { to: "/servicos/google-ads", label: "Google Ads", icon: Target },
      { to: "/servicos/facebook-ads", label: "Facebook Ads", icon: Facebook },
      { to: "/servicos/consultoria", label: "Consultoria", icon: Lightbulb },
    ],
  },
  {
    label: "Nossos Sistemas",
    submenu: [
      { to: "/sistema-de-leilao", label: "Sistema de Leilão", icon: Gavel },
      { to: "/sistema-de-leilao-rural", label: "Sistema de Leilão Rural", icon: Tractor },
      { to: "/classificados-de-veiculos", label: "Classificados de Veículos", icon: Car },
      { to: "/sistema-de-cupom-descontos", label: "Sistema de Cupom", icon: Ticket },
      { to: "/plataforma-chinesa-apostas-cassino", label: "Plataforma Cassino", icon: Dice5 },
      { to: "/sistema-de-raspadinha", label: "Sistema de Raspadinha", icon: ScratchIcon },
      { to: "/sistema-de-rifas", label: "Sistema de Rifas", icon: Gift },
      { to: "/sistema-de-ofertas-cupom-marketplace", label: "Marketplace de Ofertas", icon: Store },
      { to: "/sistema-de-revenda-de-veiculos", label: "Revenda de Veículos", icon: CarFront },
      { to: "/sistema-de-leilao-de-centavos", label: "Leilão de Centavos", icon: Coins },
    ],
  },
  { to: "/trabalhos-realizados", label: "Trabalhos Realizados" },
  { to: "/orcamento", label: "Orçamentos" },
  { to: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border/60" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link to="/" className="group flex items-center gap-2">
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img 
              src="/logo.jpg" 
              alt="NC Brasil" 
              fetchPriority="high"
              decoding="async"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </picture>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            "submenu" in item ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground data-[state=open]:bg-secondary/50 data-[state=open]:text-foreground outline-none">
                  {item.label}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 overflow-hidden rounded-xl border border-border/60 bg-card p-1 shadow-xl animate-in fade-in zoom-in-95 duration-200">
                  {item.submenu.map((subItem) => (
                    <DropdownMenuItem key={subItem.label} asChild className="focus:bg-secondary/80 focus:text-foreground">
                      <Link to={subItem.to} className="flex w-full items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                        <subItem.icon className="h-4 w-4 text-primary" />
                        {subItem.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
                activeProps={{ className: "text-foreground bg-secondary/50" }}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-3 mr-2">
            <a
              href="https://www.facebook.com/agenciacriacaodesites/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/new.commercebrasil/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <Link
            to="/orcamento"
            onClick={() => trackClick("Solicitar orçamento", "Header Nav")}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-sm transition-transform hover:scale-105"
          >
            Solicitar orçamento
          </Link>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-border lg:hidden max-h-[80vh] overflow-y-auto">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              "submenu" in item ? (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="px-3 pt-3 pb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground/60">
                    {item.label}
                  </span>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.to}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                      activeProps={{ className: "text-foreground bg-secondary/60" }}
                    >
                      <subItem.icon className="h-4 w-4 text-primary" />
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  activeProps={{ className: "text-foreground bg-secondary/60" }}
                >
                  {item.label}
                </Link>
              )
            ))}
            <Link
              to="/orcamento"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Solicitar orçamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
