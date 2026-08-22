import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Gavel, ShoppingCart, Rocket, Sparkles, ChevronLeft, ChevronRight, Car, Tractor } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { trackClick } from "@/lib/analytics";

// Importando os assets via JSON pointers para usar as URLs corretas
import leilaoHomeAsset from "@/assets/sistema-de-leilao-home-premium.png.asset.json";
import rifasAsset from "@/assets/melhor-sistema-de-rifas-online.png.asset.json";
import cassinoAsset from "@/assets/plataforma-cassino-main.png.asset.json";
import veiculosAsset from "@/assets/classificados-veiculos-hero.jpeg.asset.json";
import ruralAsset from "@/assets/leilao-rural-home.asset.json";
import heroTechAsset from "@/assets/hero-tech.jpg";

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
    image: heroTechAsset,
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
    image: leilaoHomeAsset.url,
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
    image: rifasAsset.url,
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
    image: cassinoAsset.url,
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
    image: veiculosAsset.url,
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
    image: ruralAsset.url,
  }
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
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
      {/* Imagem de Fundo de Alta Qualidade com Profundidade Real */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-image-${slide.id}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slide.image} 
            alt="" 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradiente para profundidade e legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1428]/80 via-[#0A1428]/40 to-[#0A1428]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1428] via-transparent to-[#0A1428]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 w-full mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Eyebrow */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-3 rounded-none border border-white/10 bg-white/5 px-6 py-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-primary-glow backdrop-blur-md">
                <slide.icon className="h-4 w-4 text-white" />
                {slide.eyebrow}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-8 max-w-5xl mx-auto">
              {slide.title.split(slide.highlight)[0]}
              <span className="text-gradient inline-block relative">
                {slide.highlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              {renderBold(slide.description)}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to={slide.to}
                onClick={() => trackClick(`Slider CTA 1: ${slide.title}`, "Home Hero")}
                className="group relative flex h-16 items-center justify-center overflow-hidden rounded-none bg-[#315BFF] px-10 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {slide.cta1}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/orcamento"
                onClick={() => trackClick(`Slider CTA 2: ${slide.title}`, "Home Hero")}
                className="flex h-16 items-center justify-center rounded-none border border-white/20 bg-white/5 px-10 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-xl transition-all hover:bg-white/10 active:scale-95"
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
            className="group h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-md active:scale-90"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={cn(
                  "h-1.5 transition-all duration-500 rounded-full",
                  current === i ? "w-10 bg-primary" : "w-3 bg-white/20"
                )}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            aria-label="Próximo slide"
            className="group h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-md active:scale-90"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
