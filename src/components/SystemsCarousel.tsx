import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, Gavel, LayoutDashboard, ShoppingCart, Tractor, ChevronRight, Sparkles, Rocket } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Section";

const systems = [
  {
    icon: Gavel,
    title: "Sistema de Leilão",
    description: "Referência nacional em tecnologia de leilões. Pregão eletrônico ultraveloz, auditagem completa e lances em tempo real com latência zero.",
    to: "/sistema-de-leilao",
    image: "/img-sistema-de-leilao/home-premium.png",
    features: ["Transmissão ao Vivo", "Pregão Eletrônico", "Gestão de Arrematantes"],
    isPremium: true
  },
  {
    icon: ShoppingCart,
    title: "Sistema de Rifas",
    description: "A plataforma de sorteios mais completa do Brasil. Totalmente automatizada com split de pagamentos e visual cinematográfico.",
    to: "/sistema-de-rifas",
    image: "/img-sistema-de-rifas/Fachada Profissional.png",
    features: ["Pagamentos Automáticos", "Ranking de Compradores", "Reserva de Bilhetes"],
    isPremium: true
  },
  {
    icon: Rocket,
    title: "Sistema de Cassino",
    description: "Plataforma completa de iGaming com integração de provedores mundiais e gestão de banca segura.",
    to: "/sistema-de-cassino",
    image: "/img-sistema-de-leilao/dashboard-detalhe.png",
    features: ["Slots & Live Casino", "Gestão de Afiliados", "Saque Imediato"],
    isPremium: true
  },
  {
    icon: Code2,
    title: "Leilão de Centavos",
    description: "Sistema de entretenimento e lances regressivos. Alta escalabilidade para milhares de acessos simultâneos.",
    to: "/leilao-de-centavos",
    image: "/img-sistema-de-leilao/vitrine.png",
    features: ["Lances Regressivos", "Painel Financeiro", "Gamificação"],
    isPremium: true
  },
  {
    icon: Tractor,
    title: "Leilão Rural",
    description: "Tecnologia especializada para o agronegócio. Gestão de genealogia, vídeos de lotes e suporte a grandes eventos rurais.",
    to: "/leilao-rural",
    image: "/img-sistema-de-leilao/cards.png",
    features: ["Catálogo Rural", "Lotes de Animais", "App Agro"],
    isPremium: true
  },
  {
    icon: LayoutDashboard,
    title: "Portal de Veículos",
    description: "Plataforma robusta para revenda de autos. Filtros inteligentes, integração com estoque e alta conversão de leads.",
    to: "/classificados-de-veiculos",
    image: "/img-sistema-de-leilao/dashboard-detalhe.png",
    features: ["Busca Avançada", "Painel Lojista", "SEO Nativo"]
  },
  {
    icon: Sparkles,
    title: "Sistema de Raspadinha",
    description: "Engajamento instantâneo com raspadinhas digitais personalizáveis e controle total de prêmios.",
    to: "/sistema-de-raspadinha",
    image: "/img-sistema-de-leilao/cards.png",
    features: ["Prêmios Instantâneos", "Design Custom", "Auditagem"]
  }
];

export function SystemsCarousel() {
  return (
    <div className="relative">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {systems.map((system, index) => (
          <Reveal key={system.title} delay={index * 0.1}>
            <motion.div 
              whileHover={{ y: -12 }}
              className={cn(
                "group relative h-[450px] sm:h-[550px] lg:h-[600px] overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] border transition-all duration-500 backdrop-blur-xl",
                system.isPremium 
                  ? "border-primary/50 bg-navy-900/40 glow-md ring-1 ring-primary/20" 
                  : "border-white/5 bg-navy-900/30 hover:border-primary/40 hover:glow-md hover:bg-navy-900/50"
              )}
            >
              {/* Premium Badge */}
              {system.isPremium && (
                <div className="absolute left-10 top-10 z-20">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary-glow backdrop-blur-md animate-pulse shadow-[0_0_15px_rgba(49,91,255,0.3)]">
                    <Sparkles className="h-3 w-3" />
                    Tecnologia Flagship
                  </span>
                </div>
              )}

              {/* Background Image with Cinematic Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={system.image} 
                  alt={system.title} 
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110",
                    system.isPremium ? "opacity-30" : "opacity-15 group-hover:opacity-30"
                  )}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/logo.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent" />
              </div>


              <div className="relative flex h-full flex-col p-6 sm:p-10 pt-20 sm:pt-24">
                <div className={cn(
                  "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ring-1 ring-white/10 backdrop-blur transition-all duration-500 group-hover:scale-110 group-hover:glow-md",
                  system.isPremium ? "bg-gradient-primary text-white shadow-glow-sm" : "bg-surface-elevated text-primary-glow group-hover:bg-primary group-hover:text-white"
                )}>
                  <system.icon className="h-8 w-8" />
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-primary-glow transition-colors drop-shadow-sm">{system.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors line-clamp-3">
                  {system.description}
                </p>

                <div className="mt-8 space-y-3">
                  {system.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-glow/80">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary-glow shadow-[0_0_8px_rgba(49,91,255,0.8)]" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  <Link
                    to={system.to}
                    className={cn(
                      "group/btn relative flex w-full items-center justify-between overflow-hidden rounded-2xl px-6 py-5 text-sm font-bold uppercase tracking-widest transition-all",
                      system.isPremium 
                        ? "bg-primary text-white glow-sm hover:scale-[1.02]" 
                        : "bg-white/5 text-white hover:bg-primary hover:glow-sm"
                    )}
                  >
                    <span className="relative z-10">Explorar Solução</span>
                    <ChevronRight className="relative z-10 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
