import { createFileRoute } from "@tanstack/react-router";
import { newsData } from "@/lib/news.data";
import { buildMeta, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/noticias/$slug")({
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
  component: () => null, // Component is handled elsewhere or is a stub
});
