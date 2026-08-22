import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, Reveal } from "./Section";
import { testimonialsData } from "@/lib/testimonials.data";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Group testimonials in chunks of 4 for desktop, 2 for tablet, 1 for mobile
  // But to keep it simple and elegant, let's do a sliding window of 4 items
  const displayItems = 4;
  
  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Get current visible testimonials
  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < displayItems; i++) {
      items.push(testimonialsData[(currentIndex + i) % testimonialsData.length]);
    }
    return items;
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-30" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Prova Social"
            title={<>Clientes que <span className="text-gradient">confiam</span> em nós</>}
            description="A satisfação de quem utiliza nossas soluções é o nosso maior selo de qualidade."
            className="mb-0 text-left md:max-w-2xl"
          />
          
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="group flex h-12 w-12 items-center justify-center rounded-none border border-border bg-card/40 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/60 hover:text-primary"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={next}
              className="group flex h-12 w-12 items-center justify-center rounded-none border border-border bg-card/40 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/60 hover:text-primary"
              aria-label="Próximo"
            >
              <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <div className="relative mt-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              {getVisibleTestimonials().map((t, i) => (
                <motion.div
                  key={`${t.author}-${currentIndex}-${i}`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    opacity: { duration: 0.2 }
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative flex h-full flex-col justify-between rounded-none border border-border bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/60 hover:glow-sm"
                >
                  <div>
                    <div className="mb-4 flex items-center gap-1 text-primary">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    
                    <div className="relative">
                      <Quote className="absolute -left-2 -top-2 h-8 w-8 text-primary/10 transition-colors group-hover:text-primary/20" />
                      <p className="relative text-sm italic leading-relaxed text-muted-foreground">
                        "{t.quote}"
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                    <div className="relative h-12 w-12 overflow-hidden rounded-none ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                      <img 
                        src={t.image} 
                        alt={t.author}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!target.src.includes('/news/default-nc.jpg')) {
                            target.src = '/news/default-nc.jpg';
                          }
                        }}
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-bold text-foreground">{t.author}</span>
                      <span className="text-xs text-muted-foreground">{t.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="mt-12 flex justify-center gap-2">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-2 rounded-none transition-all duration-300 ${
                i === currentIndex 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-border hover:bg-primary/50"
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
