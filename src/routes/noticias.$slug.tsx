import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { newsData } from '@/lib/news.data'
import { Calendar, Tag, ArrowLeft, Share2, Clock, ChevronRight, BookOpen } from 'lucide-react'
import { Reveal } from '@/components/Section'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { buildMeta, SITE_URL } from '@/lib/seo'

export const Route = createFileRoute('/noticias/$slug')({
  loader: ({ params }) => {
    const post = newsData.find(p => p.slug === params.slug)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    const plainText = loaderData.content.replace(/<[^>]*>/g, '').slice(0, 160)
    
    return buildMeta({
      title: `${loaderData.title} | Revista Digital`,
      description: plainText,
      keywords: `notícia, nc brasil, ${loaderData.categories.join(', ')}, ${loaderData.tags.join(', ')}`,
      ogImage: loaderData.image_url || undefined,
      ogType: 'article',
      canonical: `${SITE_URL}/noticias/${loaderData.slug}`,
      breadcrumbs: [
        { name: "Home", to: SITE_URL },
        { name: "Notícias", to: `${SITE_URL}/noticias` },
        { name: loaderData.title, to: `${SITE_URL}/noticias/${loaderData.slug}` }
      ],
      article: {
        publishedTime: loaderData.date,
        section: loaderData.categories[0],
        tags: loaderData.tags,
        image: loaderData.image_url || undefined,
        headline: loaderData.title
      }
    })

  },
  component: NewsPostPage,
})

function NewsPostPage() {
  const post = Route.useLoaderData()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [readingTime, setReadingTime] = useState(0)

  useEffect(() => {
    const words = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length
    setReadingTime(Math.ceil(words / 200))
  }, [post.content])

  const relatedPosts = newsData
    .filter(p => p.id !== post.id && p.categories.some(c => post.categories.includes(c)))
    .slice(0, 3)

  return (
    <main className="relative pt-24 pb-20 overflow-hidden">
      
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Back Link */}
        <Reveal>
          <Link 
            to="/noticias" 
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-all mb-12"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar ao Acervo
          </Link>
        </Reveal>

        {/* Header Section */}
        <article>
          <Reveal>
            <div className="space-y-8">
              <div className="flex flex-wrap gap-2">
                {post.categories.map(cat => (
                  <Link
                    key={cat}
                    to="/noticias/categoria/$category"
                    params={{ category: cat }}
                    className="rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-[10px] font-black text-primary uppercase tracking-[0.2em] hover:bg-primary/20 transition-all"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                {post.title}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 border-y border-border">
                <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    {readingTime} min de leitura
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Editorial NC
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 rounded-full bg-card border border-border px-5 py-2.5 text-[10px] font-black uppercase tracking-widest hover:border-primary/50 hover:bg-surface transition-all">
                    <Share2 className="h-3.5 w-3.5 text-primary" />
                    Compartilhar
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Featured Image */}
          <Reveal delay={0.1}>
            <div className="mt-12 relative group">
              <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full opacity-20 -z-10" />
              <div className="aspect-video overflow-hidden rounded-[3rem] border border-border shadow-2xl bg-surface">
                {post.image_url ? (
                  <img src={post.image_url} alt={post.title} className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-primary/5 text-primary/10">Sem Imagem</div>
                )}
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="mt-16 grid lg:grid-cols-12 gap-12">
            <Reveal delay={0.2} className="lg:col-span-8">
              <div 
                className="prose prose-invert prose-primary max-w-none 
                  prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-p:text-muted-foreground prose-p:leading-[1.8] prose-p:text-lg
                  prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                  prose-img:rounded-[2rem] prose-img:border prose-img:border-border
                  prose-blockquote:border-primary prose-blockquote:bg-card/50 prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:not-italic prose-blockquote:text-foreground prose-blockquote:font-medium
                  prose-strong:text-foreground prose-strong:font-bold"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags Section */}
              <div className="mt-16 pt-10 border-t border-border flex flex-wrap gap-3">
                {post.tags.map(tag => (
                  <Link
                    key={tag}
                    to="/noticias/tag/$tag"
                    params={{ tag: tag }}
                    className="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Link>
                ))}
              </div>
            </Reveal>

            {/* Sidebar / Related */}
            <aside className="lg:col-span-4 space-y-12">
              <Reveal delay={0.3}>
                <div className="sticky top-32 space-y-10">
                  <div className="rounded-[2.5rem] border border-border bg-card/30 p-8 backdrop-blur-sm">
                    <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      Relacionados
                    </h3>
                    <div className="space-y-8">
                      {relatedPosts.map(related => (
                        <Link 
                          key={related.id}
                          to="/noticias/$slug"
                          params={{ slug: related.slug }}
                          className="group block space-y-3"
                        >
                          <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-surface border border-border group-hover:border-primary/50 transition-all">
                            {related.image_url ? (
                              <img src={related.image_url} alt={related.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-primary/5 text-[8px] text-primary/10">No Image</div>
                            )}
                          </div>
                          <h4 className="font-display font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <span className="block text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                            {new Date(related.date).toLocaleDateString('pt-BR')}
                          </span>
                        </Link>
                      ))}
                    </div>
                    
                    <Link 
                      to="/noticias" 
                      className="mt-10 group flex items-center justify-between gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary pt-6 border-t border-border"
                    >
                      Ver Tudo
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Newsletter / CTA */}
                  <div className="rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-foreground p-8 text-white shadow-2xl shadow-primary/20">
                    <BookOpen className="h-10 w-10 mb-6 opacity-50" />
                    <h3 className="font-display text-2xl font-bold leading-tight mb-4">Receba insights exclusivos</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-6">Assine nossa newsletter e fique por dentro das inovações.</p>
                    <div className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Seu melhor e-mail"
                        className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 placeholder:text-white/40 text-sm focus:outline-none focus:bg-white/20 transition-all"
                      />
                      <button className="w-full bg-white text-primary font-black uppercase tracking-[0.2em] py-3 rounded-2xl text-[10px] hover:scale-105 active:scale-95 transition-all">
                        Inscrever
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </article>
      </div>
    </main>
  )
}
