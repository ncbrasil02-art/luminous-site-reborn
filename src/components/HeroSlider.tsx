import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Gavel, ShoppingCart, Rocket, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { trackClick } from "@/lib/analytics";

const slides = [
  {
    id: "leilao",
    icon: Gavel,
    title: "Sistema de Leilão",
    subtitle: "Liderança Nacional",
    highlight: "Pregão Eletrônico",
    description: "Referência em tecnologia de leilões com pregão eletrônico ultraveloz, latência zero e auditagem completa.",
    to: "/sistema-de-leilao",
    image: "/img-sistema-de-leilao/home-premium.png",
    color: "primary",
    keywords: ["Sistema de Leilão", "Pregão Eletrônico", "Leilão Online"]
  },
  {
    id: "rifas",
    icon: ShoppingCart,
    title: "Sistema de Rifas",
    subtitle: "Lucratividade Total",
    highlight: "Sorteios Online",
    description: "A plataforma de rifas mais completa e cinematográfica do Brasil. Automação total com split de pagamentos.",
    to: "/sistema-de-rifas",
    image: "/img-sistema-de-rifas/Fachada Profissional.png",
    color: "secondary",
    keywords: ["Script de Rifas", "Sistema de Rifas", "Sorteios Digitais"]
  },
  {
    id: "cassino",
    icon: Rocket,
    title: "Plataforma de Jogos",
    subtitle: "iGaming Premium",
    highlight: "Cassino Online",
    description: "Tecnologia de ponta para cassinos online e plataformas de jogos com integração global e segurança máxima.",
    to: "/sistema-de-cassino",
    image: "/img-sistema-de-leilao/dashboard-detalhe.png",
    color: "primary-glow",
    keywords: ["Plataforma de Jogos", "Cassino Online", "iGaming"]
  }
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${slide.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-hero"
          />
        </AnimatePresence>
        
        {/* Cinematic Particles/Mesh */}
        <div className="absolute inset-0 bg-mesh opacity-20 mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] animate-glow-pulse" />
      </div>

      <div className="relative z-20 w-full mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col text-left">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`content-${slide.id}`}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary-glow backdrop-blur-md glow-sm">
                    <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                    {slide.subtitle}
                  </span>
                </div>

                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter text-white mb-6">
                  {slide.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-gradient block sm:inline">
                    {slide.title.split(" ").slice(-1)}
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
                  {slide.description.split(slide.highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && <strong className="text-white">{slide.highlight}</strong>}
                    </span>
                  ))}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={slide.to}
                    onClick={() => trackClick(`Slider CTA: ${slide.title}`, "Home Hero")}
                    className="group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:glow-lg"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Ver Demonstração
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                  <Link
                    to="/orcamento"
                    className="flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10"
                  >
                    Solicitar Orçamento
                  </Link>
                </div>

                {/* Keywords SEO */}
                <div className="mt-12 flex flex-wrap gap-4 opacity-50">
                  {slide.keywords.map((kw) => (
                    <span key={kw} className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                      #{kw.replace(/\s+/g, "")}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Visual */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center lg:justify-end">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`visual-${slide.id}`}
                initial={{ opacity: 0, scale: 0.8, rotate: direction > 0 ? 5 : -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: direction > 0 ? -5 : 5 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full max-w-[500px] lg:max-w-none flex items-center justify-center"
              >
                {/* Glow Behind Image */}
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75" />
                
                {/* Platform Image with Masking */}
                <div className="relative w-full h-full group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent z-10 rounded-[3rem]" />
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain relative z-0 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Floating Icon Decoration */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 z-20 h-20 w-20 rounded-3xl bg-surface-elevated/80 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl"
                  >
                    <slide.icon className="h-10 w-10 text-primary-glow" />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Controls */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8">
          <button 
            onClick={prevSlide}
            className="h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-md"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "h-1.5 transition-all duration-500 rounded-full",
                  current === i ? "w-12 bg-primary shadow-glow-sm" : "w-4 bg-white/20"
                )}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-md"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
