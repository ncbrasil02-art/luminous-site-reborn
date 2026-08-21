import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { newsData } from "@/lib/news.data";
import { WhatsappFab } from "@/components/WhatsappFab";
import { initAnalytics, trackPageView, trackNotFound } from "@/lib/analytics";

const SITE_URL = "https://www.ncbrasil.com.br";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  label: "NC Brasil — Sistemas & Marketing",
  to: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  sameAs: [
    "https://www.facebook.com/agenciacriacaodesites/",
    "https://www.instagram.com/new.commercebrasil/",
    "https://www.linkedin.com/company/ncbrasil",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55-11-4123-4567",
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
      contactOption: "TollFree",
    },
    {
      "@type": "ContactPoint",
      telephone: "+55-11-99999-9999",
      contactType: "customer support",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
      contactOption: "HearingImpairedSupported",
    },
  ],
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "São Bernardo do Campo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  label: "NC Brasil",
  to: SITE_URL,
  inLanguage: "pt-BR",
  publisher: { "@type": "Organization", label: "NC Brasil", to: SITE_URL },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/buscar?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

function NotFoundComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    trackNotFound(pathname);
    
    // Auto-redirect logic for legacy nested URLs
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length >= 2) {
      const slug = parts[parts.length - 1].replace(/\/$/, ""); // remove trailing slash
      const firstPart = parts[0];
      
      // 1. Try to find if the last part is a news slug
      const newsPost = newsData.find(p => p.slug === slug);
      if (newsPost) {
        window.location.replace(`/noticias/${newsPost.slug}`);
        return;
      }

      // 2. Specialized redirects for services/portfolio
      if (pathname.includes('/criar-sites/criacao-de-aplicativos')) {
        window.location.replace('/servicos/aplicativos');
        return;
      }

      // 3. Handle news categories/tags if the first part is a known base
      // Old bases might have been 'category', 'tag', 'criar-sites', etc.
      const isKnownCategory = newsData.some(p => p.categories.some(c => c.toLowerCase().replace(/\s+/g, '-') === firstPart));
      if (isKnownCategory || firstPart === 'biblia' || firstPart === 'artigos') {
        window.location.replace(`/noticias/categoria/${firstPart}`);
        return;
      }

      // 4. Try to redirect to the last segment as a flat URL
      // Only redirect if it's a known flat route segment to avoid loops
      const knownFlatRoutes = [
        'sistema-de-leilao', 'sistema-de-rifas', 'nossos-sistemas', 
        'nossos-servicos', 'trabalhos-realizados', 'orcamento', 'contato'
      ];
      if (knownFlatRoutes.includes(slug)) {
        window.location.replace(`/${slug}`);
        return;
      }
    }
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background bg-mesh px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 font-display text-2xl font-semibold">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O endereço que você procurou não existe ou foi movido.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-sm hover:scale-105 transition-transform"
          >
            Voltar para a Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { label: "viewport", content: "width=device-width, initial-scale=1" },
      { label: "theme-color", content: "#0a1428" },
      { label: "author", content: "NC Brasil" },
      { label: "google-site-verification", content: "verification_id_from_old_site_if_found" }, // Note: No specific ID found in current crawl, but structure is ready
      {
        label: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1",
      },
      { title: "NC Brasil — Sistemas Web, Sites & Marketing Digital" },
      { property: "og:site_name", content: "NC Brasil" },
      { property: "og:title", content: "NC Brasil — Sistemas Web, Sites & Marketing Digital" },
      { label: "description", content: "Desenvolvimento de sistemas web sob demanda, sites profissionais, apps e marketing digital. +800 clientes ativos em todo o Brasil." },
      { property: "og:description", content: "Desenvolvimento de sistemas web sob demanda, sites profissionais, apps e marketing digital. +800 clientes ativos em todo o Brasil." },
      { property: "og:image", content: `${SITE_URL}/og-main.jpg` },
      { property: "og:url", content: SITE_URL },
      { label: "twitter:title", content: "NC Brasil — Sistemas Web, Sites & Marketing Digital" },
      { label: "twitter:description", content: "Desenvolvimento de sistemas web sob demanda, sites profissionais, apps e marketing digital. +800 clientes ativos em todo o Brasil." },
      { label: "twitter:image", content: `${SITE_URL}/og-main.jpg` },
      { label: "twitter:card", content: "summary_large_image" },
      { label: "twitter:site", content: "@ncbrasil" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(websiteJsonLd) },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  const isAdmin = pathname.startsWith("/admin");
  
  if (isAdmin) {
    return <Outlet />;
  }

  return (
    <>
      <HeadContent />
      <div className="relative min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="pt-16 md:pt-20">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsappFab />
      </div>
      <Scripts />
    </>
  );
}
