import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, Gavel, LayoutDashboard, ShoppingCart, Users, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const systems = [
  {
    icon: Gavel,
    title: "Sistema de Leilão",
    description: "Plataformas completas para leilões judiciais e extrajudiciais com lances em tempo real.",
    to: "/sistema-de-leilao",
    image: "https://www.ncbrasil.com.br/wp-content/uploads/2021/05/sistema-de-leilao-nc-brasil.jpg",
    features: ["Lances em Tempo Real", "Gestão de Lotes", "Auditagem"]
  },
  {
    icon: ShoppingCart,
    title: "Marketplaces",
    description: "Soluções complexas para múltiplos vendedores com split de pagamentos automático.",
    to: "/portfolio/lojas-virtuais-criadas",
    image: "https://www.ncbrasil.com.br/wp-content/uploads/2021/05/loja-virtual-nc-brasil.jpg",
    features: ["Split de Pagamentos", "Painel Seller", "Logística"]
  },
  {
    icon: Users,
    title: "Compra Coletiva",
    description: "Plataformas de ofertas com gatilhos de escassez e gestão de cupons via QR Code.",
    to: "/portfolio/sistema-de-compra-coletiva",
    image: "https://www.ncbrasil.com.br/wp-content/uploads/2021/05/compra-coletiva-nc-brasil.jpg",
    features: ["Controle de Cupons", "Validação App", "Escalabilidade"]
  },
  {
    icon: LayoutDashboard,
    title: "Sistemas Sob Demanda",
    description: "Engenharia de software personalizada para resolver desafios exclusivos do seu negócio.",
    to: "/nossos-sistemas",
    image: "https://www.ncbrasil.com.br/wp-content/uploads/2021/05/sistemas-sob-demanda.jpg",
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
                whileHover={{ y: -8 }}
                className="group relative h-[420px] overflow-hidden rounded-[2rem] border border-border/60 bg-card/40 backdrop-blur-sm"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={system.image} 
                    alt={system.title} 
                    className="h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>

                <div className="relative flex h-full flex-col p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary ring-1 ring-primary/30 backdrop-blur">
                    <system.icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">{system.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                    {system.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    {system.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-primary/80">
                        <Code2 className="h-3 w-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link
                      to={system.to}
                      className="inline-flex w-full items-center justify-between rounded-xl bg-surface/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Explorar Solução
                      <ChevronRight className="h-4 w-4" />
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
