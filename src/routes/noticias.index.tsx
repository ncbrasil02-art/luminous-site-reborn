import { createFileRoute } from '@tanstack/react-router'
import { newsData } from '@/lib/news.data'
import { Link } from '@tanstack/react-router'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/Section'

export const Route = createFileRoute('/noticias/')({
  head: () => ({
    meta: [
      { title: 'Notícias e Novidades · NC Brasil' },
      { name: 'description', content: 'Fique por dentro das últimas notícias sobre tecnologia, sistemas web, e-commerce e marketing digital.' },
    ],
  }),
  component: NewsIndex,
})

function NewsIndex() {
  const featuredNews = newsData[0]
  const otherNews = newsData.slice(1, 13)

  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Revista Digital"
          title={<>Explore nosso <span className="text-gradient">Universo Tech</span></>}
          description="Insights, novidades e tendências sobre o mundo da tecnologia e negócios digitais."
        />

        {/* Featured News */}
        {featuredNews && (
          <Reveal>
            <Link 
              to="/noticias/$slug"
              params={{ slug: featuredNews.slug }}
              className="relative mt-12 block overflow-hidden rounded-[2.5rem] border border-border bg-card group"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  {featuredNews.image_url ? (
                    <img 
                      src={featuredNews.image_url} 
                      alt={featuredNews.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-primary/5 text-primary/20">
                      Sem Imagem
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:hidden" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredNews.categories.map(cat => (
                      <span key={cat} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {featuredNews.title}
                  </h2>
                  <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredNews.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                    Ler matéria completa
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Grid News */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherNews.map((news, i) => (
            <Reveal key={news.id} delay={i * 0.05}>
              <Link 
                to="/noticias/$slug"
                params={{ slug: news.slug }}
                className="group block h-full space-y-4 rounded-3xl border border-border bg-card/40 p-5 transition-all hover:-translate-y-2 hover:border-primary/40 hover:bg-card hover:glow-sm"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface">
                  {news.image_url ? (
                    <img 
                      src={news.image_url} 
                      alt={news.title} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-primary/5 text-primary/10 text-xs">
                      Sem Imagem
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-primary">
                    {news.categories[0] || 'Geral'}
                  </div>
                  <h3 className="line-clamp-2 font-display text-xl font-bold group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(news.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        
        {/* Pagination placeholder */}
        <div className="mt-16 flex justify-center">
            <button className="rounded-full border border-border bg-surface/50 px-8 py-3 text-sm font-semibold text-foreground hover:bg-surface transition-colors">
                Carregar mais notícias
            </button>
        </div>
      </div>
    </main>
  )
}
