import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, Gavel, LayoutDashboard, ShoppingCart, Users, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const systems = [
  {
    icon: Gavel,
    title: "Plataforma de Leilão Online",
    description: "O melhor sistema para leiloeiro completo com pregão eletrônico, transmissão ao vivo e gestão de lotes.",
    to: "/sistema-de-leilao",
    image: "/img-sistema-de-leilao/home-premium.png",
    features: ["Lances em Tempo Real", "Gestão de Lotes", "Auditagem"]
  },
  {
    icon: ShoppingCart,
    title: "Marketplaces",
    description: "Soluções complexas para múltiplos vendedores com split de pagamentos automático.",
    to: "/portfolio/lojas-virtuais-criadas",
    image: "/img-sistema-de-leilao/vitrine.png",
    features: ["Split de Pagamentos", "Painel Seller", "Logística"]
  },
  {
    icon: Users,
    title: "Compra Coletiva",
    description: "Plataformas de ofertas com gatilhos de escassez e gestão de cupons via QR Code.",
    to: "/portfolio/sistema-de-compra-coletiva",
    image: "/img-sistema-de-leilao/cards.png",
    features: ["Controle de Cupons", "Validação App", "Escalabilidade"]
  },
  {
    icon: LayoutDashboard,
    title: "Sistemas Sob Demanda",
    description: "Engenharia de software personalizada para resolver desafios exclusivos do seu negócio.",
    to: "/nossos-sistemas",
    image: "/img-sistema-de-leilao/dashboard-detalhe.png",
    features: ["Arquitetura Custom", "Integração API", "Cloud Native"]
  }
];

export function SystemsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {systems.map((system, index) => (
            <div key={system.title} className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <motion.div 
                whileHover={{ y: -12 }}
                className="group relative h-[520px] overflow-hidden rounded-[3rem] border border-white/5 bg-navy-900/30 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:glow-md hover:bg-navy-900/50"
              >
                {/* Background Image with Cinematic Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={system.image} 
                    alt={system.title} 
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover opacity-20 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/logo.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>


                <div className="relative flex h-full flex-col p-10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-elevated text-primary-glow ring-1 ring-white/10 backdrop-blur transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:glow-sm">
                    <system.icon className="h-8 w-8" />
                  </div>

                  <h3 className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-primary-glow transition-colors">{system.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors line-clamp-3">
                    {system.description}
                  </p>

                  <div className="mt-8 space-y-3">
                    {system.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-glow/60">
                        <div className="h-1 w-1 rounded-full bg-primary-glow" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <Link
                      to={system.to}
                      className="group/btn relative flex w-full items-center justify-between overflow-hidden rounded-2xl bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-primary hover:glow-sm"
                    >
                      <span className="relative z-10">Explorar Solução</span>
                      <ChevronRight className="relative z-10 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          onClick={scrollPrev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-30"
          disabled={prevBtnDisabled}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {systems.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                selectedIndex === index ? "w-8 bg-primary" : "bg-border hover:bg-primary/50"
              )}
            />
          ))}
        </div>
        <button
          onClick={scrollNext}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-30"
          disabled={nextBtnDisabled}
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
