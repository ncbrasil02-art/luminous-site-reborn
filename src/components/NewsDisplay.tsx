import { Link } from "@tanstack/react-router";
import { newsData } from "@/lib/news.data";
import { ArrowRight, Calendar, Newspaper, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function NewsDisplay() {
  const latestNews = newsData.slice(0, 10); // Show top 10 for carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative overflow-hidden border-y border-border bg-card/20 py-16 md:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4"
            >
              <Newspaper className="h-3.5 w-3.5" />
              Notícias NC
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-bold md:text-5xl leading-tight"
            >
              Fique por dentro das <br />
              <span className="text-gradient">Últimas Novidades</span>
            </motion.h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 mr-4">
              <button 
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="h-10 w-10 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:border-primary/50 hover:text-primary transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="h-10 w-10 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:border-primary/50 hover:text-primary transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <Link 
              to="/noticias" 
              className="group hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-all"
            >
              Ver Tudo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative" ref={emblaRef}>
          <div className="flex gap-6">
            {latestNews.map((news, index) => (
              <div key={news.id} className="flex-[0_0_85%] min-w-0 md:flex-[0_0_40%] lg:flex-[0_0_30.5%]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="h-full"
                >
                  <Link 
                    to="/noticias/$slug" 
                    params={{ slug: news.slug }} 
                    className="group relative block h-full overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-lg transition-all hover:border-primary/40 hover:glow-sm hover:-translate-y-1"
                  >
                    <div className="overflow-hidden rounded-t-[2.4rem] aspect-[16/10] relative">
                      {news.image_url ? (
                        <img 
                          src={news.image_url} 
                          alt={news.title} 
                          className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-primary/5 text-primary/30">
                          Sem Imagem
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border border-white/10 text-white">
                          {news.categories[0] || 'Geral'}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {new Date(news.date).toLocaleDateString("pt-BR")}
                        <span className="h-1 w-1 rounded-full bg-border mx-1" />
                        <span>Notícia</span>
                      </div>
                      
                      <h3 className="line-clamp-2 font-display text-xl font-bold leading-tight group-hover:text-primary transition-colors mb-6">
                        {news.title}
                      </h3>
                      
                      <div className="flex items-center justify-between group-hover:translate-x-1 transition-transform">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">Ler Matéria</span>
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Progress Bar instead of Dots */}
        <div className="mt-16 h-1 w-full bg-border/30 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${((selectedIndex + 1) / latestNews.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
      </div>
    </section>
  );
}
