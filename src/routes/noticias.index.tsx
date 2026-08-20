import { createFileRoute } from '@tanstack/react-router'
import { newsData } from '@/lib/news.data'
import { Link } from '@tanstack/react-router'
import { Calendar, Tag, ArrowRight, Search, ChevronRight, Newspaper } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/Section'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Route = createFileRoute('/noticias/')({
  head: () => ({
    meta: [
      { title: 'Revista Digital NC Brasil · Tecnologia, Sistemas e Negócios' },
      { label: 'description', content: 'Fique por dentro das últimas notícias sobre tecnologia, sistemas web, e-commerce e marketing digital. Artigos aprofundados e tendências.' },
      { property: 'og:title', content: 'Revista Digital NC Brasil' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: NewsIndex,
})

const ITEMS_PER_PAGE = 9

function NewsIndex() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const allCategories = useMemo(() => 
    Array.from(new Set(newsData.flatMap(p => p.categories))).sort(), 
  [])
  const allTags = useMemo(() => 
    Array.from(new Set(newsData.flatMap(p => p.tags))).sort(), 
  [])

  const filteredNews = useMemo(() => {
    return newsData.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || post.categories.includes(selectedCategory)
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const displayedNews = filteredNews.slice(0, visibleCount)
  const hasMore = visibleCount < filteredNews.length

  const loadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE)
  }

  const featuredNews = filteredNews[0]

  return (
    <main className="relative pt-24 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Revista Digital"
            title={<>Conhecimento que <span className="text-gradient">Transforma</span></>}
            description="Explore artigos técnicos, tendências de mercado e o futuro do desenvolvimento web."
            align="left"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Buscar notícias..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-11 pr-4 py-3 rounded-2xl border border-border bg-card/50 backdrop-blur-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-sm"
              />
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
              !selectedCategory 
                ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                : 'bg-card/40 border border-border text-muted-foreground hover:bg-card hover:text-primary'
            }`}
          >
            Tudo
          </button>
          {allCategories.slice(0, 8).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                selectedCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                  : 'bg-card/40 border border-border text-muted-foreground hover:bg-card hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured News (Dynamic based on filter) */}
        <AnimatePresence mode="wait">
          {featuredNews && !searchQuery && !selectedCategory && (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Link 
                to="/noticias/$slug"
                params={{ slug: featuredNews.slug }}
                className="relative block overflow-hidden rounded-[3rem] border border-border bg-card shadow-2xl group"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-80 lg:h-[500px] overflow-hidden">
                    {featuredNews.image_url ? (
                      <img 
                        src={featuredNews.image_url} 
                        alt={featuredNews.title} 
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-primary/5 text-primary/20">Sem Imagem</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent lg:hidden" />
                  </div>
                  <div className="p-8 lg:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="h-px w-8 bg-primary" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Destaque Editorial</span>
                    </div>
                    <h2 className="font-display text-3xl lg:text-5xl font-bold leading-[1.1] group-hover:text-primary transition-colors">
                      {featuredNews.title}
                    </h2>
                    <p className="mt-6 text-muted-foreground line-clamp-3 leading-relaxed">
                      {featuredNews.content.replace(/<[^>]*>/g, '').slice(0, 250)}...
                    </p>
                    <div className="mt-10 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        {new Date(featuredNews.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                        Ler Artigo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid News */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedNews.map((news, i) => {
            // Skip first one only if not searching/filtering
            if (i === 0 && !searchQuery && !selectedCategory) return null;
            
            return (
              <Reveal key={news.id} delay={i * 0.05}>
                <Link 
                  to="/noticias/$slug"
                  params={{ slug: news.slug || "" }}
                  className="group block h-full space-y-6 rounded-[2rem] border border-border bg-card/40 p-6 transition-all hover:-translate-y-2 hover:border-primary/40 hover:bg-card hover:glow-sm"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface border border-border/50">
                    {news.image_url ? (
                      <img 
                        src={news.image_url} 
                        alt={news.title} 
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-primary/5 text-primary/10 text-xs">Sem Imagem</div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/10 text-white">
                        {news.categories[0] || 'Geral'}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="line-clamp-2 font-display text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                      {news.title}
                    </h3>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {new Date(news.date).toLocaleDateString('pt-BR')}
                      </div>
                      <ChevronRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>

        {/* No Results */}
        {displayedNews.length === 0 && (
          <div className="mt-20 py-20 text-center rounded-[2rem] border border-dashed border-border bg-card/20">
            <Newspaper className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
            <h3 className="text-xl font-bold">Nenhum artigo encontrado</h3>
            <p className="text-muted-foreground mt-2">Tente buscar por outros termos ou categorias.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
              className="mt-6 text-primary font-bold uppercase tracking-widest text-xs hover:underline"
            >
              Limpar Filtros
            </button>
          </div>
        )}
        
        {/* Pagination / Load More */}
        {hasMore && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={loadMore}
              className="group relative inline-flex items-center gap-3 rounded-full bg-surface border border-border px-10 py-4 text-sm font-bold uppercase tracking-widest text-foreground hover:bg-card hover:border-primary/50 transition-all hover:scale-105 active:scale-95"
            >
              Carregar Mais Matérias
              <div className="h-2 w-2 rounded-full bg-primary group-hover:animate-ping" />
            </button>
          </div>
        )}

        {/* SEO Tags Cloud */}
        <Reveal delay={0.2}>
          <div className="mt-32 pt-20 border-t border-border">
            <h3 className="font-display text-2xl font-bold mb-10 flex items-center gap-3">
              <Tag className="h-6 w-6 text-primary" />
              Tópicos Recomendados
            </h3>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 40).map(tag => (
                <Link
                  key={tag}
                  to="/noticias/tag/$tag"
                  params={{ tag: tag }}
                  className="px-4 py-2 rounded-xl bg-card/40 border border-border text-xs font-medium text-muted-foreground hover:border-primary/50 hover:bg-card hover:text-primary transition-all uppercase tracking-widest"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
