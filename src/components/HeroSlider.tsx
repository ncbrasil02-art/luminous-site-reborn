import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Gavel, ShoppingCart, Rocket, Sparkles, ChevronLeft, ChevronRight, Globe, Database, ShieldCheck, Car, Tractor } from "lucide-react";
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
    title: "Seu Sistema de Leilões Online Homologado.",
    highlight: "Homologado.",
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
    title: "Sistema de Rifas com Hora premiada, Roletas, Raspadinhas, Cotas Premiadas.",
    highlight: "Raspadinhas, Cotas Premiadas.",
    description: "Transforme sua audiência em faturamento exponencial com **Hora Premiada**, Roletas Interativas e Raspadinhas Digitais. Automação total e visual premium.",
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
  },
  {
    id: "veiculos",
    eyebrow: "Eficiência Automotiva",
    icon: Car,
    title: "Sistema de Classificados de Veículos Profissional.",
    highlight: "Profissional.",
    description: "Lance seu **Portal de Anúncios** com tecnologia estilo WebMotors. Tabela FIPE integrada, simulador de financiamento e gestão completa de estoque para revendas.",
    to: "/classificados-de-veiculos",
    cta1: "Ver Classificados",
    cta2: "Solicitar Orçamento",
    color: "primary",
  },
  {
    id: "rural",
    eyebrow: "Agronegócio Digital",
    icon: Tractor,
    title: "Sistema de Leilão Rural e Animais de Elite.",
    highlight: "Animais de Elite.",
    description: "A tecnologia definitiva para o **Campo**. Transmissão HD, emissão de GTA automática, pesagem integrada e gestão de genética para bovinos e equinos.",
    to: "/sistema-de-leilao-rural",
    cta1: "Explorar Agro",
    cta2: "Falar com Especialista",
    color: "secondary",
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

  // Particle configuration
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      moveX: (Math.random() - 0.5) * 200,
      moveY: (Math.random() - 0.5) * 200,
    }));
  }, []);

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
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-hero-glow opacity-40" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-primary/40 backdrop-blur-sm shadow-[0_0_10px_rgba(49,91,255,0.4)]"
              initial={{ x: `${p.x}%`, y: `${p.y}%`, opacity: 0, scale: 0 }}
              animate={{
                x: [`${p.x}%`, `${p.x + p.moveX / 5}%`],
                y: [`${p.y}%`, `${p.y + p.moveY / 5}%`],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0.5],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear",
              }}
              style={{ width: p.size, height: p.size }}
            />
          ))}
        </div>

        {/* 3D Deep Glows */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${slide.id}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.25, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-b from-[#315BFF]/20 via-transparent to-transparent"
          />
        </AnimatePresence>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/20 rounded-full blur-[180px] animate-glow-pulse" />

        {/* Parallax Floating Icons */}
        <motion.div 
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.3, 0.1], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] lg:left-[15%] text-primary-glow/40"
        >
          <Globe className="h-16 w-16 md:h-24 md:w-24 drop-shadow-[0_0_20px_rgba(18,191,255,0.4)]" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.1, 0.3, 0.1], rotate: [0, -5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[10%] lg:right-[15%] text-primary-glow/40"
        >
          <Database className="h-14 w-14 md:h-20 md:w-20 drop-shadow-[0_0_20px_rgba(18,191,255,0.4)]" />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] right-[20%] text-primary/30"
        >
          <ShieldCheck className="h-20 w-20 md:h-32 md:w-32" />
        </motion.div>
      </div>

      <div className="relative z-20 w-full mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        {/* Laser Sweep Effect on slide change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`laser-${slide.id}`}
            initial={{ left: "-100%", opacity: 0 }}
            animate={{ left: "200%", opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-1 h-[200%] bg-gradient-to-b from-transparent via-primary-glow to-transparent shadow-[0_0_30px_rgba(18,191,255,1)] -translate-y-1/2 -rotate-12 z-30 pointer-events-none"
          />
        </AnimatePresence>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`content-${slide.id}`}
            initial={{ opacity: 0, y: 40, perspective: 1000, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -40, rotateX: -10 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Eyebrow */}
            <div className="flex justify-center mb-10">
              <span className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-8 py-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-primary-glow backdrop-blur-xl glow-sm ring-1 ring-primary/30 shadow-[0_0_20px_rgba(49,91,255,0.2)]">
                <slide.icon className="h-4 w-4 animate-pulse text-white" />
                {slide.eyebrow}
              </span>
            </div>

            {/* Title with Word-Appearance Effect */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-10 max-w-5xl mx-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`title-${slide.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="block"
                >
                  {slide.title.split(slide.highlight)[0]}
                  <span className="text-gradient inline-block drop-shadow-[0_0_15px_rgba(49,91,255,0.5)] relative">
                    {slide.highlight}
                    <motion.div 
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full shadow-[0_5px_15px_rgba(49,91,255,0.8)]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </span>
                </motion.span>
              </AnimatePresence>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16 opacity-90">
              {renderBold(slide.description)}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                to={slide.to}
                onClick={() => trackClick(`Slider CTA 1: ${slide.title}`, "Home Hero")}
                className="group relative flex h-18 items-center justify-center overflow-hidden rounded-2xl bg-[#315BFF] px-12 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:glow-lg shadow-[0_0_30px_rgba(49,91,255,0.5)] active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="relative z-10 flex items-center gap-3">
                  {slide.cta1}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/orcamento"
                onClick={() => trackClick(`Slider CTA 2: ${slide.title}`, "Home Hero")}
                className="flex h-18 items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-12 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
              >
                {slide.cta2}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-10 z-30">
          <button 
            onClick={prevSlide}
            aria-label="Slide anterior"
            className="group h-14 w-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-all backdrop-blur-xl hover:border-primary/50 hover:glow-md active:scale-90"
          >
            <ChevronLeft className="h-7 w-7 transition-transform group-hover:-translate-x-0.5" />
          </button>
          
          <div className="flex gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={cn(
                  "h-2 transition-all duration-500 rounded-full",
                  current === i ? "w-14 bg-primary shadow-glow-md" : "w-5 bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            aria-label="Próximo slide"
            className="group h-14 w-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-all backdrop-blur-xl hover:border-primary/50 hover:glow-md active:scale-90"
          >
            <ChevronRight className="h-7 w-7 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}