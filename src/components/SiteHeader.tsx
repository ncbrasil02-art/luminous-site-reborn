import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Zap, ChevronDown, Gavel, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { to: "/empresa", label: "Empresa" },
  { to: "/solucoes-web", label: "Soluções Web" },
  { to: "/nossos-servicos", label: "Serviços" },
  { 
    label: "Sistemas", 
    submenu: [
      { to: "/nossos-sistemas", label: "Ver todos os sistemas", icon: LayoutDashboard },
      { to: "/sistema-de-leilao", label: "Sistema de Leilão", icon: Gavel },
    ]
  },
  { to: "/trabalhos-realizados", label: "Portfólio" },
  { to: "/orcamento", label: "Orçamento" },
  { to: "/contato", label: "Contato" },
] as const;

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
          <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary glow-sm">
            <Zap className="h-5 w-5 text-primary-foreground" />
            <span className="absolute inset-0 rounded-lg bg-gradient-primary opacity-60 blur-md animate-glow-pulse" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            NC <span className="text-gradient">Brasil</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            "submenu" in item ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground data-[state=open]:bg-secondary/50 data-[state=open]:text-foreground outline-none">
                  {item.label}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 overflow-hidden rounded-xl border border-border/60 bg-card p-1 shadow-xl animate-in fade-in zoom-in-95 duration-200">
                  {item.submenu.map((subItem) => (
                    <DropdownMenuItem key={subItem.to} asChild className="focus:bg-secondary/80 focus:text-foreground">
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

        <div className="hidden lg:block">
          <Link
            to="/orcamento"
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
        <div className="glass border-t border-border lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                activeProps={{ className: "text-foreground bg-secondary/60" }}
              >
                {item.label}
              </Link>
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
