import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { newsData, type NewsPost } from '@/lib/news.data'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/Section'

export const Route = createFileRoute('/noticias/tag/$tag')({
  loader: ({ params }) => {
    const tag = decodeURIComponent(params.tag)
    const posts = newsData.filter(p => 
      p.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    )
    if (posts.length === 0) throw notFound()
    return { tag, posts }
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `Tag: ${loaderData?.tag || 'Notícias'} · NC Brasil` },
      { label: 'description', content: `Explore conteúdos marcados com a tag "${loaderData?.tag}" na revista digital da NC Brasil.` },
      { property: 'og:title', content: `Tag: ${loaderData?.tag} · NC Brasil` },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: TagPage,
})

function TagPage() {
  const { tag, posts } = Route.useLoaderData()

  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <Link to="/noticias" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-8">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Voltar para a revista
          </Link>
        </Reveal>

        <SectionHeading
          eyebrow="Tópico"
          title={<>Explorando: <span className="text-gradient">#{tag}</span></>}
          description={`Exibindo ${posts.length} ${posts.length === 1 ? 'resultado' : 'resultados'} para este termo.`}
          align="left"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((news: NewsPost, i: number) => (
            <Reveal key={news.id} delay={i * 0.05}>
              <Link 
                to="/noticias/$slug"
                params={{ slug: news.slug || "" }}
                className="group block h-full space-y-4 rounded-3xl border border-border bg-card/40 p-5 transition-all hover:-translate-y-2 hover:border-primary/40 hover:bg-card hover:glow-sm"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface">
                  <img 
                    src={news.image_url || "/news/default-nc.jpg"} 
                    alt={news.title} 
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/news/default-nc.jpg";
                    }}
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="line-clamp-2 font-display text-xl font-bold group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="mr-1 h-3 w-3" />
                    {new Date(news.date).toLocaleDateString('pt-BR')}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}
