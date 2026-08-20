import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading, Reveal } from "./Section";
import { testimonialsData } from "@/lib/testimonials.data";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-30" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Prova Social"
          title={<>Clientes que <span className="text-gradient">confiam</span> em nós</>}
          description="A satisfação de quem utiliza nossas soluções é o nosso maior selo de qualidade. Conheça as histórias de sucesso."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonialsData.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.1}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative flex h-full flex-col justify-between rounded-3xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/60 hover:glow-sm"
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
                  <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
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
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">{t.author}</span>
                    <span className="text-xs text-muted-foreground">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
