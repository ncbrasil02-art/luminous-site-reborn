import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
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
  Linkedin,
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
  Coins,
} from "lucide-react";
import { cn } from "@/lib/utils";
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
    label: "Serviços",
    submenu: [
      { to: "/solucoes-web/desenvolvimento-de-sites", label: "Desenvolvimento de Sites", icon: Globe2 },
      { to: "/solucoes-web/loja-virtual", label: "Loja Virtual", icon: ShoppingBag },
      { to: "/solucoes-web/landing-pages", label: "Landing Pages", icon: FileText },
      { to: "/solucoes-web/marketing-digital", label: "Marketing Digital", icon: LineChart },
      { to: "/solucoes-web/seo-google", label: "SEO Google", icon: Search },
      { to: "/solucoes-web/hospedagem", label: "Hospedagem", icon: Server },
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
    label: "Sistemas",
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
  { to: "/trabalhos-realizados", label: "Cases" },
  { to: "/orcamento", label: "Orçamentos" },
  { to: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass border-b border-border/60 py-2" : "bg-transparent py-4",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="group flex items-center gap-2 relative z-50">
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img 
              src="/logo.jpg" 
              alt="NC Brasil - Sistemas Web e Marketing Digital" 
              width={160}
              height={40}
              fetchPriority="high"
              decoding="async"
              className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/logo.jpg';
              }}
            />
          </picture>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            "submenu" in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <button 
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 outline-none",
                    "text-muted-foreground hover:text-foreground",
                    "hover:bg-white/[0.03] hover:ring-1 hover:ring-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]",
                    activeSubmenu === item.label && "text-foreground bg-white/[0.05] ring-1 ring-white/20"
                  )}
                >
                  {item.label}
                  <ChevronDown className={cn(
                    "h-3.5 w-3.5 transition-transform duration-300 opacity-50",
                    activeSubmenu === item.label && "rotate-180 opacity-100"
                  )} />
                </button>

                <AnimatePresence>
                  {activeSubmenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 top-full mt-2 w-80 overflow-hidden rounded-2xl border border-white/10 bg-card/95 p-2 shadow-2xl backdrop-blur-xl"
                    >
                      <div className="grid gap-1 max-h-[70vh] overflow-y-auto custom-scrollbar">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.to}
                            className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-white/[0.05] hover:text-foreground hover:ring-1 hover:ring-white/10"
                            onClick={() => setActiveSubmenu(null)}
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                              <subItem.icon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col">
                              <span>{subItem.label}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-semibold text-muted-foreground transition-all duration-300",
                  "hover:bg-white/[0.03] hover:ring-1 hover:ring-white/10 hover:text-foreground hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                )}
                activeProps={{ className: "text-foreground bg-white/[0.05] ring-1 ring-white/20" }}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-4">
            {[
              { href: "https://www.facebook.com/agenciacriacaodesites/", icon: Facebook, label: "Facebook" },
              { href: "https://www.instagram.com/new.commercebrasil/", icon: Instagram, label: "Instagram" },
              { href: "https://www.linkedin.com/company/new-commerce-brasil", icon: Linkedin, label: "LinkedIn" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick(social.label, "Header Social")}
                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <Link
            to="/orcamento"
            onClick={() => trackClick("Solicitar orçamento", "Header Nav")}
            className="relative overflow-hidden group rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
          >
            <span className="relative z-10">Solicitar orçamento</span>
            <motion.div 
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-foreground lg:hidden transition-all hover:bg-white/10"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[68px] z-40 bg-background/95 backdrop-blur-xl lg:hidden overflow-y-auto"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8">
              {navItems.map((item) => (
                "submenu" in item ? (
                  <div key={item.label} className="flex flex-col">
                    <button
                      onClick={() => setMobileExpandedSection(mobileExpandedSection === item.label ? null : item.label)}
                      className="flex items-center justify-between rounded-2xl px-5 py-4 text-base font-bold text-foreground bg-white/5 border border-white/5 transition-all active:scale-[0.98]"
                    >
                      <span className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                        {item.label}
                      </span>
                      <ChevronDown className={cn(
                        "h-5 w-5 transition-transform duration-300 opacity-50",
                        mobileExpandedSection === item.label && "rotate-180 opacity-100 text-primary"
                      )} />
                    </button>
                    
                    <AnimatePresence>
                      {mobileExpandedSection === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 gap-1 py-3 pl-4">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.to}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-4 rounded-xl px-5 py-3.5 text-sm font-medium text-muted-foreground transition-all active:bg-white/10 active:text-foreground"
                                activeProps={{ className: "text-foreground bg-white/5 font-bold" }}
                              >
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                  <subItem.icon className="h-4 w-4" />
                                </div>
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-2xl px-5 py-4 text-base font-bold text-foreground bg-white/5 border border-white/5 transition-all active:scale-[0.98]"
                    activeProps={{ className: "text-primary bg-primary/5 border-primary/20" }}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    {item.label}
                  </Link>
                )
              ))}
              
              <Link
                to="/orcamento"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 flex items-center justify-center rounded-2xl bg-gradient-primary py-5 text-base font-bold text-primary-foreground shadow-xl shadow-primary/20 active:scale-95 transition-transform"
              >
                Solicitar orçamento
              </Link>

              <div className="mt-8 flex items-center justify-center gap-8 border-t border-white/5 pt-8">
                {[
                  { href: "https://www.facebook.com/agenciacriacaodesites/", icon: Facebook, label: "Facebook" },
                  { href: "https://www.instagram.com/new.commercebrasil/", icon: Instagram, label: "Instagram" },
                  { href: "https://www.linkedin.com/company/new-commerce-brasil", icon: Linkedin, label: "LinkedIn" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-muted-foreground transition-all active:scale-90"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
