import { Link } from "@tanstack/react-router";
import { newsData } from "@/lib/news.data";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";
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

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden border-y border-border bg-card/20 py-16 md:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary mb-4"
            >
              <Newspaper className="h-3.5 w-3.5" />
              Atualizações
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl font-bold md:text-5xl"
            >
              Principais <span className="text-gradient">Notícias</span>
            </motion.h2>
          </div>
          
          <Link 
            to="/noticias" 
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors"
          >
            Ver central de notícias
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {latestNews.map((news, index) => (
              <div key={news.id} className="flex-[0_0_85%] min-w-0 pl-4 md:flex-[0_0_40%] lg:flex-[0_0_30%]">
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
                    className="group relative block h-full overflow-hidden rounded-[2rem] border border-border bg-card/40 p-1 backdrop-blur-sm transition-all hover:border-primary/40 hover:glow-sm"
                  >
                    <div className="overflow-hidden rounded-[1.8rem]">
                      <div className="aspect-[16/10] overflow-hidden bg-surface relative">
                        {news.image_url ? (
                          <img 
                            src={news.image_url} 
                            alt={news.title} 
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-primary/5 text-primary/30">
                            Sem Imagem
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">
                          {news.categories[0] || 'Geral'}
                        </span>
                        <div className="h-1 w-1 rounded-full bg-border" />
                        <div className="flex items-center text-[10px] text-muted-foreground gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(news.date).toLocaleDateString("pt-BR")}
                        </div>
                      </div>
                      
                      <h3 className="line-clamp-2 font-display text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>
                      
                      <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                        Ler Notícia
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots / Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          {latestNews.slice(0, Math.ceil(latestNews.length / 2)).map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i * 2)}
              className={`h-1 transition-all duration-300 rounded-full ${
                Math.floor(selectedIndex / 2) === i ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
              }`}
              aria-label={`Go to slide group ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
