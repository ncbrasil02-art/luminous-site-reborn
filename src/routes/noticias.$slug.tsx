import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { newsData, type NewsPost } from "@/lib/news.data";
import { buildMeta, SITE_URL } from "@/lib/seo";
import { Reveal } from "@/components/Section";
import { ShareButtons } from "@/components/ShareButtons";
import { Calendar, ChevronRight, ArrowRight, Tag } from "lucide-react";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const post = newsData.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    const related = newsData
      .filter(
        (p) =>
          p.slug &&
          p.slug !== post.slug &&
          (p.categories.some((c) => post.categories.includes(c)) ||
            p.tags.some((t) => post.tags.includes(t))),
      )
      .slice(0, 3);
    return { post, related };
  },
  head: ({ params }) => {
    const post = newsData.find((p) => p.slug === params.slug);
    if (!post) {
      return buildMeta({
        title: "NcBrasil - Notícia Não Encontrada",
        description: "A notícia que você procura não foi encontrada no blog da NcBrasil.",
        keywords: "notícias ncbrasil, blog tecnologia, marketing digital",
        canonical: "/noticias",
      });
    }

    return buildMeta({
      title: `NcBrasil - ${post.title}`,
      description: `NcBrasil Blog: ${post.title}. Leia mais sobre tecnologia, sistemas e marketing digital em nosso portal de notícias.`,
      keywords: post.tags.length > 0 ? post.tags.join(", ") : post.categories.join(", "),
      canonical: `/noticias/${post.slug}`,
      ogImage: post.image_url,
      ogType: "article",
      article: {
        publishedTime: post.date,
        tags: post.tags,
        section: post.categories[0],
      },
    });
  },
  component: NewsArticle,
});

function NewsArticle() {
  const { post, related } = Route.useLoaderData();
  const dateLabel = (() => {
    const d = new Date(post.date);
    return isNaN(d.getTime()) ? "" : d.toLocaleDateString("pt-BR");
  })();

  return (
    <main className="pt-24 pb-20">
      <article className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground list-none p-0 m-0">
              <li className="flex items-center gap-1">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3 opacity-50" aria-hidden="true" />
                <Link to="/noticias" className="hover:text-primary transition-colors">Notícias</Link>
              </li>
              <li className="flex items-center gap-1 min-w-0">
                <ChevronRight className="h-3 w-3 opacity-50 shrink-0" aria-hidden="true" />
                <span className="truncate text-foreground/80" aria-current="page">{post.title}</span>
              </li>
            </ol>
          </nav>

          <div className="mb-4 flex flex-wrap gap-2">
            {post.categories.map((cat: string) => (
              <Link
                key={cat}
                to="/noticias/categoria/$category"
                params={{ category: cat }}
                className="rounded-none border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary"
              >
                {cat}
              </Link>
            ))}
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight break-words">
            {post.title}
          </h1>

          {dateLabel && (
            <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              {dateLabel}
            </p>
          )}
        </Reveal>

        {post.image_url && (
          <div className="mt-8 aspect-[16/9] w-full overflow-hidden border border-border bg-surface">
            <img
              src={post.image_url}
              alt={post.title}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/news/default-nc.jpg";
              }}
            />
          </div>
        )}

        <div
          className="prose prose-invert mt-10 max-w-none break-words prose-headings:font-display prose-a:text-primary prose-img:w-full prose-img:h-auto"
          dangerouslySetInnerHTML={{ __html: post.content || "<p>Conteúdo indisponível para este artigo.</p>" }}
        />

        {post.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-primary" aria-hidden="true" />
            {post.tags.map((t: string) => (
              <Link
                key={t}
                to="/noticias/tag/$tag"
                params={{ tag: t }}
                className="rounded-none border border-border px-3 py-1 text-xs text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                #{t}
              </Link>
            ))}
          </div>
        )}

        <div className="mt-10 border-t border-border pt-6">
          <ShareButtons url={`${SITE_URL}/noticias/${post.slug}`} title={post.title} />
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold">Leia também</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((news: NewsPost) => (
                <Link
                  key={news.id}
                  to="/noticias/$slug"
                  params={{ slug: news.slug }}
                  className="group block space-y-3 border border-border bg-card/40 p-4 transition-colors hover:border-primary/40"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-surface">
                    <img
                      src={news.image_url || "/news/default-nc.jpg"}
                      alt={news.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/news/default-nc.jpg";
                      }}
                    />
                  </div>
                  <h3 className="line-clamp-2 font-display text-base font-bold group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        <Link
          to="/noticias"
          className="mt-12 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:underline"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          Voltar para as notícias
        </Link>
      </article>
    </main>
  );
}
