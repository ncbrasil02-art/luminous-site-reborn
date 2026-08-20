export const SITE_URL = "https://www.ncbrasil.com.br";
export const SITE_NAME = "NC Brasil";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo-nc-brasil.png`;

export type MetaOptions = {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  faq?: { q: string; a: string }[];
  breadcrumbs?: { label: string; to: string }[];
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
    image?: string;
    headline?: string;
  };
};

export function buildMeta(options: MetaOptions) {
  const {
    title,
    description,
    keywords,
    canonical,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = "website",
    noIndex = false,
    faq,
    breadcrumbs,
    article,
  } = options;

  const fullTitle = title.includes(SITE_NAME) ? title : `${title} · ${SITE_NAME}`;
  const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  const meta = [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: canonical || SITE_URL },
    { property: "og:image", content: absoluteOgImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:locale", content: "pt_BR" },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@ncbrasil" },
    { name: "twitter:creator", content: "@ncbrasil" },
    { name: "linkedin:profile", content: "https://www.linkedin.com/company/new-commerce-brasil" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: absoluteOgImage },
    { name: "image", content: absoluteOgImage },
    { property: "og:image:secure_url", content: absoluteOgImage },
  ];

  if (noIndex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }

  if (article && ogType === "article") {
    if (article.publishedTime) meta.push({ property: "article:published_time", content: article.publishedTime });
    if (article.modifiedTime) meta.push({ property: "article:modified_time", content: article.modifiedTime });
    if (article.author) meta.push({ property: "article:author", content: article.author });
    if (article.section) meta.push({ property: "article:section", content: article.section });
    if (article.tags) {
      article.tags.forEach(tag => meta.push({ property: "article:tag", content: tag }));
    }
  }

  const scripts: { type: string; children: string }[] = [];

  if (breadcrumbs) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.label,
          item: b.to.startsWith("http") ? b.to : `${SITE_URL}${b.to}`,
        })),
      }),
    });
  }

  if (faq && faq.length > 0) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    });
  }

  if (article && ogType === "article") {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: article.headline || title,
        image: article.image || absoluteOgImage,
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime || article.publishedTime,
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/favicon.png`,
          },
        },
      }),
    });
  }

  return {
    meta,
    links: [
      { rel: "canonical", href: canonical || SITE_URL },
      { rel: "alternate", hrefLang: "pt-BR", href: canonical || SITE_URL },
      { rel: "alternate", hrefLang: "x-default", href: canonical || SITE_URL },
      { rel: "icon", type: "image/png", href: `${SITE_URL}/favicon.png` },
      { rel: "shortcut icon", href: `${SITE_URL}/favicon.png` },
      { rel: "apple-touch-icon", href: `${SITE_URL}/favicon.png` },
    ],
    scripts,
  };
}
