import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Gavel, ShoppingCart, Rocket, Sparkles, ChevronLeft, ChevronRight, Globe, Database, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { trackClick } from "@/lib/analytics";

const slides = [
  {
    id: "home",
    eyebrow: "Liderança em Tecnologia Digital",
    icon: Sparkles,
    title: "Ecossistemas Digitais de Alta Performance.",
    highlight: "Alta Performance.",
    description: "Líder em **Plataformas de Leilão** e sistemas cinematográficos. Tecnologia premium para **Rifas, Cassinos e Classificados**, projetada para escalar seu negócio com design de alto padrão.",
    to: "/solucoes-web",
    cta1: "Explorar Soluções",
    cta2: "Consultoria Estratégica",
    color: "primary",
  },
  {
    id: "leilao",
    eyebrow: "Tecnologia Flagship",
    icon: Gavel,
    title: "Plataforma de Leilão com Latência Zero.",
    highlight: "Latência Zero.",
    description: "A engenharia mais robusta do Brasil para leilões online, presenciais e híbridos. Performance extrema com segurança auditável e lances em tempo real.",
    to: "/sistema-de-leilao",
    cta1: "Ver Demonstração",
    cta2: "Solicitar Orçamento",
    color: "primary",
  },
  {
    id: "rifas",
    eyebrow: "Lucratividade Máxima",
    icon: ShoppingCart,
    title: "Script de Rifas Cinematográfico e Viral.",
    highlight: "Cinematográfico e Viral.",
    description: "Transforme sua audiência em faturamento exponencial. Automação total, split de pagamentos e visual premium que gera confiança imediata.",
    to: "/sistema-de-rifas",
    cta1: "Conhecer Plataforma",
    cta2: "Falar com Consultor",
    color: "secondary",
  },
  {
    id: "cassino",
    eyebrow: "iGaming Premium",
    icon: Rocket,
    title: "Plataformas de Cassino e Jogos Online.",
    highlight: "Jogos Online.",
    description: "Ecossistemas completos com integração global de provedores, gestão de afiliados e segurança de nível bancário para o mercado de jogos.",
    to: "/sistema-de-cassino",
    cta1: "Explorar iGaming",
    cta2: "Documentação Técnica",
    color: "primary-glow",
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

  const renderBold = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((p, i) => 
      p.startsWith("**") && p.endsWith("**") ? (
        <strong key={i} className="text-white font-bold">{p.slice(2, -2)}</strong>
      ) : (
        <span key={i}>{p}</span>
      )
    );
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1428]">
      {/* Background Decorations matching the screenshot concept */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-hero-glow opacity-30" />
        
        {/* Blue Fade effect for the background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${slide.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-b from-[#315BFF]/10 via-transparent to-transparent"
          />
        </AnimatePresence>
        
        {/* Subtle Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[160px] animate-glow-pulse" />

        
        {/* Floating Icons as seen in the reference */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 lg:left-20 text-primary/30"
        >
          <Globe className="h-12 w-12" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 lg:right-20 text-primary/30"
        >
          <Database className="h-10 w-10" />
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/4 text-primary/20"
        >
          <ShieldCheck className="h-16 w-16" />
        </motion.div>
      </div>

      <div className="relative z-20 w-full mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`content-${slide.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Eyebrow */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-2.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-primary-glow backdrop-blur-md glow-sm ring-1 ring-primary/20">
                <slide.icon className="h-4 w-4 animate-pulse" />
                {slide.eyebrow}
              </span>
            </div>

            {/* Title with Word-Appearance Effect */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-8 max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`title-${slide.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {slide.title.split(slide.highlight)[0]}
                  <span className="text-gradient inline-block">
                    {slide.highlight}
                  </span>
                </motion.span>
              </AnimatePresence>
            </h1>


            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              {renderBold(slide.description)}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to={slide.to}
                onClick={() => trackClick(`Slider CTA 1: ${slide.title}`, "Home Hero")}
                className="group relative flex h-16 items-center justify-center overflow-hidden rounded-2xl bg-[#315BFF] px-10 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:glow-lg shadow-[0_0_20px_rgba(49,91,255,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {slide.cta1}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/orcamento"
                onClick={() => trackClick(`Slider CTA 2: ${slide.title}`, "Home Hero")}
                className="flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-10 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10"
              >
                {slide.cta2}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 z-30">
          <button 
            onClick={prevSlide}
            aria-label="Slide anterior"
            className="group h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-all backdrop-blur-md hover:border-primary/50"
          >
            <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
          </button>
          
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={cn(
                  "h-1.5 transition-all duration-500 rounded-full",
                  current === i ? "w-12 bg-primary shadow-glow-sm" : "w-4 bg-white/20"
                )}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            aria-label="Próximo slide"
            className="group h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-all backdrop-blur-md hover:border-primary/50"
          >
            <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
