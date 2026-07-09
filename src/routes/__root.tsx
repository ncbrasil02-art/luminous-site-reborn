import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsappFab } from "@/components/WhatsappFab";
import { initAnalytics, trackPageView } from "@/lib/analytics";

const SITE_URL = "https://www.ncbrasil.com.br";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NC Brasil — Sistemas & Marketing",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  sameAs: [
    "https://www.facebook.com/ncbrasil",
    "https://www.instagram.com/ncbrasil",
    "https://www.linkedin.com/company/ncbrasil",
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

function NotFoundComponent() {
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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0a1428" },
      { name: "author", content: "NC Brasil" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1",
      },
      { title: "NC Brasil — Sistemas Web, Sites & Marketing Digital" },
      { property: "og:site_name", content: "NC Brasil" },
      { name: "description", content: "Desenvolvimento de sistemas web sob demanda, sites profissionais, apps e marketing digital. +800 clientes ativos em todo o Brasil." },
      { property: "og:description", content: "Desenvolvimento de sistemas web sob demanda, sites profissionais, apps e marketing digital. +800 clientes ativos em todo o Brasil." },
      { name: "twitter:description", content: "Desenvolvimento de sistemas web sob demanda, sites profissionais, apps e marketing digital. +800 clientes ativos em todo o Brasil." },
      { name: "twitter:card", content: "summary_large_image" },
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
      {
        type: "application/ld+json",
        children: JSON.stringify(orgJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-16 md:pt-20">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsappFab />
    </div>
  );
}
