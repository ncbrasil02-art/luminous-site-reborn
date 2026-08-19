import { Link } from "@tanstack/react-router";
import { newsData } from "@/lib/news.data";
import { Reveal, SectionHeading } from "./Section";
import { Calendar, ArrowRight } from "lucide-react";

export function MagazineSection() {
  const magazineNews = newsData.slice(0, 5);
  const featured = magazineNews[0];
  const others = magazineNews.slice(1);

  if (!featured) return null;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Revista Digital"
          title={<>Tendências e <span className="text-gradient">Insights</span></>}
          description="Acompanhe as últimas novidades do mercado de leilões, tecnologia e inovação digital."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* Main Featured */}
          <div className="lg:col-span-7">
            <Reveal>
              <Link 
                to="/noticias/$slug"
                params={{ slug: featured.slug }}
                className="group relative block overflow-hidden rounded-[2rem] border border-border bg-card h-full"
              >
                <div className="aspect-[16/9] lg:aspect-auto lg:h-[500px] overflow-hidden">
                  {featured.image_url ? (
                    <img 
                      src={featured.image_url} 
                      alt={featured.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-primary/5 text-primary/20">Sem Imagem</div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-6 md:p-10 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featured.categories.slice(0, 2).map(cat => (
                      <span key={cat} className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md uppercase tracking-wider">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-2xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                    {featured.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-4 text-sm text-gray-300">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {new Date(featured.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>

          {/* Side List */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {others.map((news, i) => (
              <Reveal key={news.id} delay={0.1 * (i + 1)}>
                <Link 
                  to="/noticias/$slug"
                  params={{ slug: news.slug }}
                  className="group flex gap-4 rounded-2xl border border-border bg-card/40 p-4 transition-all hover:border-primary/40 hover:bg-card"
                >
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-surface">
                    {news.image_url ? (
                      <img src={news.image_url} alt={news.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-primary/5 text-primary/10 text-[8px]">No Image</div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                      {news.categories[0] || 'Geral'}
                    </span>
                    <h4 className="line-clamp-2 font-display text-base font-bold group-hover:text-primary transition-colors">
                      {news.title}
                    </h4>
                    <span className="mt-2 text-[10px] text-muted-foreground">
                      {new Date(news.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
            
            <Link 
              to="/noticias" 
              className="mt-auto group flex items-center justify-center gap-2 rounded-xl border border-dashed border-border p-4 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:border-primary hover:text-primary transition-all"
            >
              Acessar Revista Completa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
