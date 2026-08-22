import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { useEffect, useMemo } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { resolveLegacyPath } from "@/lib/redirects";
import { WhatsappFab } from "@/components/WhatsappFab";
import { RocketLanding } from "@/components/RocketLanding";
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
  const target = resolveLegacyPath(pathname);

  useEffect(() => {
    trackNotFound(pathname);
    if (target && target !== pathname) {
      window.location.replace(target);
    }
  }, [pathname, target]);

  if (target && target !== pathname) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background bg-mesh px-4">
        <p className="text-sm text-muted-foreground">Redirecionando…</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background bg-mesh px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 font-display text-2xl font-semibold">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O endereço que você procurou não existe ou foi movido.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-none bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-sm hover:scale-105 transition-transform"
          >
            Voltar para a Home
          </Link>
          <Link
            to="/nossos-sistemas"
            className="inline-flex items-center justify-center rounded-none border border-white/10 px-5 py-2.5 text-sm font-semibold hover:border-primary/50 transition-colors"
          >
            Ver sistemas
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
      { title: "NcBrasil - Sistemas Web, Sites & Marketing Digital" },
      { property: "og:site_name", content: "NcBrasil" },
      { property: "og:title", content: "NcBrasil - Sistemas Web, Sites & Marketing Digital" },
      { label: "description", content: "NcBrasil: Desenvolvimento de sistemas web sob demanda, sites profissionais e apps. Tecnologia e marketing digital para empresas em todo o Brasil." },
      { property: "og:description", content: "NcBrasil: Desenvolvimento de sistemas web sob demanda, sites profissionais e apps. Tecnologia e marketing digital para empresas em todo o Brasil." },
      { property: "og:image", content: `${SITE_URL}/og-main.jpg` },
      { property: "og:url", content: SITE_URL },
      { label: "twitter:title", content: "NcBrasil - Sistemas Web, Sites & Marketing Digital" },
      { label: "twitter:description", content: "NcBrasil: Desenvolvimento de sistemas web sob demanda, sites profissionais e apps. Tecnologia e marketing digital para empresas em todo o Brasil." },
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
      <Helmet>
        <html lang="pt-BR" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a1428" />
        <meta name="author" content="NC Brasil" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:site_name" content="NC Brasil" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ncbrasil" />
        <link rel="stylesheet" href={appCss} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      </Helmet>
      <HeadContent />
      <div className="relative min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="pt-16 md:pt-20">
          <Outlet />
        </main>
        <SiteFooter />
        <RocketLanding />
        <WhatsappFab />
      </div>
      <Scripts />
    </>
  );
}
