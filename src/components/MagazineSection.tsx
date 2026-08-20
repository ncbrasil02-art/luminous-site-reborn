import { Link } from "@tanstack/react-router";
import { newsData } from "@/lib/news.data";
import { Reveal, SectionHeading } from "./Section";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export function MagazineSection() {
  const magazineNews = newsData
    .filter(news => news.slug && news.slug.trim() !== "")
    .slice(0, 10);
  const featured = magazineNews[0];
  const others = magazineNews.slice(1);

  if (!featured) return null;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-border bg-background">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl text-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary mb-4"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Editorial NC
            </motion.span>
            <SectionHeading
              title={<>A <span className="text-gradient">Revista Digital</span> da Tecnologia</>}
              description="Conteúdo exclusivo sobre leilões, sistemas e o futuro do mercado digital brasileiro."
              align="left"
            />
          </div>
          <Link 
            to="/noticias" 
            className="group hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-all"
          >
            Explorar Acervo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Featured Article - The "Cover" */}
          <div className="lg:col-span-8">
            <Reveal>
              <Link 
                to="/noticias/$slug"
                params={{ slug: featured.slug || "" }}
                className="group relative block aspect-[16/9] lg:aspect-auto lg:h-[600px] overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-2xl"
              >
                <img 
                  src={featured.image_url || "/news/default-nc.jpg"} 
                  alt={featured.title} 
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/news/default-nc.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-6 md:p-12 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {featured.categories.slice(0, 2).map(cat => (
                      <span key={cat} className="rounded-full bg-primary/90 px-4 py-1.5 text-[10px] font-bold text-white uppercase tracking-widest shadow-lg">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] group-hover:text-primary transition-colors line-clamp-2 mb-6">
                    {featured.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-gray-300">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        {new Date(featured.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="hidden sm:block h-1 w-1 rounded-full bg-primary" />
                      <span className="hidden sm:block">Leitura de 8 min</span>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 border border-white/20">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>

          {/* Secondary Stack */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {others.slice(0, 3).map((news, i) => (
              <Reveal key={news.id} delay={0.1 * (i + 1)}>
                <Link 
                  to="/noticias/$slug"
                  params={{ slug: news.slug || "" }}
                  className="group grid grid-cols-3 gap-6 items-center"
                >
                  <div className="col-span-1 aspect-square overflow-hidden rounded-2xl bg-surface border border-border group-hover:border-primary/50 transition-colors">
                    <img 
                      src={news.image_url || "/news/default-nc.jpg"} 
                      alt={news.title} 
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 30vw, 15vw"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/news/default-nc.jpg";
                      }}
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      {news.categories[0] || 'Geral'}
                    </span>
                    <h4 className="line-clamp-2 font-display text-lg font-bold group-hover:text-primary transition-colors leading-snug">
                      {news.title}
                    </h4>
                    <span className="block text-[10px] text-muted-foreground uppercase tracking-widest">
                      {new Date(news.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-auto"
            >
              <Link 
                to="/noticias" 
                className="group flex items-center justify-between rounded-2xl border-2 border-dashed border-border p-6 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all"
              >
                <span>Ver Todas as Edições</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
