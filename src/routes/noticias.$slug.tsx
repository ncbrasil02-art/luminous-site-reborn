import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { newsData } from '@/lib/news.data'
import { Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'
import { Reveal } from '@/components/Section'

export const Route = createFileRoute('/noticias/$slug')({
  loader: ({ params }) => {
    const post = newsData.find(p => p.slug === params.slug)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title || 'Notícia'} · NC Brasil` },
      { name: 'description', content: loaderData?.content.replace(/<[^>]*>/g, '').slice(0, 160) || '' },
      { property: 'og:title', content: loaderData?.title || '' },
      { property: 'og:type', content: 'article' },
      { property: 'og:image', content: loaderData?.image_url || '' },
    ],
  }),
  component: NewsPostPage,
})

function NewsPostPage() {
  const post = Route.useLoaderData()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": post.image_url,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "NC Brasil"
    }
  }

  return (
    <main className="pt-24 pb-20">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <Reveal>
          <Link to="/noticias" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Voltar para notícias
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {post.categories.map(cat => (
                <Link
                  key={cat}
                  to="/noticias/categoria/$category"
                  params={{ category: cat }}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider hover:bg-primary/20 transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-between border-y border-border py-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </span>
              </div>
              <button className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <Share2 className="h-4 w-4" />
                Compartilhar
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 aspect-video overflow-hidden rounded-[2rem] bg-surface">
            {post.image_url ? (
              <img src={post.image_url} alt={post.title} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-primary/5 text-primary/10">Sem Imagem</div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <article className="prose prose-invert prose-primary max-w-none mt-12 
            prose-headings:font-display prose-headings:font-bold
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Link
                  key={tag}
                  to="/noticias/tag/$tag"
                  params={{ tag: tag }}
                  className="flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
