import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, Gavel, LayoutDashboard, ShoppingCart, Tractor, ChevronRight, Sparkles, Rocket } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Section";
import leilaoHero from "@/assets/sistema-de-leilao-home-premium.png.asset.json";
import rifasHero from "@/assets/melhor-sistema-de-rifas-online.png.asset.json";
import cassinoHero from "@/assets/plataforma-cassino-main.png.asset.json";
import centavosVitrine from "@/assets/centavos-vitrine.png.asset.json";
import leilaoCards from "@/assets/sistema-de-leilao-cards.png.asset.json";
import classificadosDashboard from "@/assets/classificados-veiculos-dashboard-vkintegradora.png.asset.json";

const systems = [
  {
    icon: Gavel,
    title: "Sistema de Leilão",
    description: "Referência nacional em tecnologia de leilões. Pregão eletrônico ultraveloz, auditagem completa e lances em tempo real com Seu Sistema de Leilões Online Homologado.",
    to: "/sistema-de-leilao",
    image: leilaoHero.url,
    features: ["Transmissão ao Vivo", "Pregão Eletrônico", "Gestão de Arrematantes"],
    isPremium: true
  },
  {
    icon: ShoppingCart,
    title: "Sistema de Rifas",
    description: "Plataforma avançada com Hora Premiada, Roletas, Raspadinhas e Cotas Premiadas. Automação total e visual premium para escala imediata.",
    to: "/sistema-de-rifas",
    image: rifasHero.url,
    features: ["Pagamentos Automáticos", "Ranking de Compradores", "Reserva de Bilhetes"],
    isPremium: true
  },
  {
    icon: Rocket,
    title: "Sistema de Cassino",
    description: "Plataforma completa de iGaming com integração de provedores mundiais e gestão de banca segura.",
    to: "/sistema-de-cassino",
    image: cassinoHero.url,
    features: ["Slots & Live Casino", "Gestão de Afiliados", "Saque Imediato"],
    isPremium: true
  },
  {
    icon: Code2,
    title: "Leilão de Centavos",
    description: "Sistema de entretenimento e lances regressivos. Alta escalabilidade para milhares de acessos simultâneos.",
    to: "/leilao-de-centavos",
    image: centavosVitrine.url,
    features: ["Lances Regressivos", "Painel Financeiro", "Gamificação"],
    isPremium: true
  },
  {
    icon: Tractor,
    title: "Leilão Rural",
    description: "Tecnologia especializada para o agronegócio. Gestão de genealogia, vídeos de lotes e suporte a grandes eventos rurais.",
    to: "/leilao-rural",
    image: leilaoCards.url,
    features: ["Catálogo Rural", "Lotes de Animais", "App Agro"],
    isPremium: true
  },
  {
    icon: LayoutDashboard,
    title: "Portal de Veículos",
    description: "Plataforma robusta para revenda de autos. Filtros inteligentes, integração com estoque e alta conversão de leads.",
    to: "/classificados-de-veiculos",
    image: classificadosDashboard.url,
    features: ["Busca Avançada", "Painel Lojista", "SEO Nativo"]
  },
  {
    icon: Sparkles,
    title: "Sistema de Raspadinha",
    description: "Engajamento instantâneo com raspadinhas digitais personalizáveis e controle total de prêmios.",
    to: "/sistema-de-raspadinha",
    image: leilaoCards.url,
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
              whileHover={{ 
                y: -15,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className={cn(
                "group relative h-[500px] sm:h-[600px] lg:h-[650px] overflow-hidden rounded-none border transition-all duration-500 backdrop-blur-md",
                system.isPremium 
                  ? "border-primary/40 bg-[#0A1428]/60 ring-1 ring-primary/20 hover:border-primary-glow/60" 
                  : "border-white/5 bg-[#0A1428]/40 hover:border-primary/40 hover:bg-[#0A1428]/60"
              )}
            >
              {/* Premium Badge */}
              {system.isPremium && (
                <div className="absolute left-10 top-10 z-20">
                  <span className="inline-flex items-center gap-2 rounded-none border border-primary/50 bg-primary/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary-glow backdrop-blur-md animate-pulse shadow-[0_0_15px_rgba(49,91,255,0.3)]">
                    <Sparkles className="h-3 w-3" />
                    Sistema Personalizado
                  </span>
                </div>
              )}

              {/* Background Image with Cinematic Overlay - Reduced Intensity */}
              <div className="absolute inset-0">
                <img 
                  src={system.image} 
                  alt={system.title} 
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110",
                    system.isPremium ? "opacity-25 grayscale-[20%]" : "opacity-10 grayscale-[40%] group-hover:opacity-20 group-hover:grayscale-0"
                  )}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/logo.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-[#0A1428]/95 to-[#0A1428]/30" />
                {/* Dynamic Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,rgba(49,91,255,0.15),transparent_70%)]" />
              </div>


              <div className="relative flex h-full flex-col p-6 sm:p-10 pt-20 sm:pt-24">
                <div className={cn(
                  "mb-8 inline-flex h-20 w-20 items-center justify-center rounded-none ring-1 ring-white/10 backdrop-blur-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-6",
                  system.isPremium ? "bg-gradient-primary text-white" : "bg-surface-elevated text-primary-glow group-hover:bg-primary group-hover:text-white"
                )}>
                  <system.icon className="h-10 w-10" />
                </div>

                <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white group-hover:text-primary-glow transition-all duration-500 drop-shadow-lg">{system.title}</h3>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-all duration-500 line-clamp-3 font-medium">
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
                      "group/btn relative flex w-full items-center justify-between overflow-hidden rounded-none px-6 py-5 text-sm font-bold uppercase tracking-widest transition-all",
                      system.isPremium 
                        ? "bg-primary text-white glow-sm hover:scale-[1.02]" 
                        : "bg-white/5 text-white hover:bg-primary hover:glow-sm"
                    )}
                  >
                    <span className="relative z-10">Ver Sistema</span>
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
