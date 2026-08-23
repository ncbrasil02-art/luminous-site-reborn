import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { newsIndex } from '@/lib/news-index.data'
import { Calendar, ArrowRight, ChevronRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/Section'
import { buildMeta, SITE_URL } from '@/lib/seo'


export const Route = createFileRoute('/noticias/categoria/$category')({
  loader: ({ params }) => {
    const category = decodeURIComponent(params.category)
    const posts = newsIndex.filter(p => 
      p.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
    )
    if (posts.length === 0) throw notFound()
    return { category, posts }
  },
  head: ({ loaderData }) => buildMeta({
    title: `Categoria: ${loaderData?.category || 'Notícias'} · NC Brasil`,
    description: `Veja todas as notícias e artigos na categoria ${loaderData?.category} da NC Brasil.`,
    keywords: `notícia, nc brasil, categoria, ${loaderData?.category}`,
    canonical: `/noticias/categoria/${loaderData?.category}`,
  }),
  component: CategoryPage,
})

function CategoryPage() {
  const { category, posts } = Route.useLoaderData()

  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground list-none p-0 m-0">
              <li className="flex items-center gap-1">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3 opacity-50" aria-hidden="true" />
                <Link to="/noticias" className="hover:text-primary transition-colors">Notícias</Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3 opacity-50" aria-hidden="true" />
                <span className="text-foreground/80" aria-current="page">Categoria: {category}</span>
              </li>
            </ol>
          </nav>

          <Link to="/noticias" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-8">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Todas as notícias
          </Link>
        </Reveal>

        <SectionHeading
          eyebrow="Categoria"
          title={<>Assunto: <span className="text-gradient">{category}</span></>}
          description={`Encontramos ${posts.length} ${posts.length === 1 ? 'artigo relacionado' : 'artigos relacionados'} a esta categoria.`}
          align="left"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((news: any, i: number) => (
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
