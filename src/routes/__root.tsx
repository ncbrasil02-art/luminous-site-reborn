import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsappFab } from "@/components/WhatsappFab";

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
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "NovaTech Brilliance modernizes a website with a dark theme, glow effects, and animated transitions." },
      { property: "og:description", content: "NovaTech Brilliance modernizes a website with a dark theme, glow effects, and animated transitions." },
      { name: "twitter:description", content: "NovaTech Brilliance modernizes a website with a dark theme, glow effects, and animated transitions." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e982af6b-1ade-4249-9d1e-4c18e3b23665/id-preview-839d941c--96c5fed0-24f6-452f-b58a-e31c52f583e6.lovable.app-1776677627972.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e982af6b-1ade-4249-9d1e-4c18e3b23665/id-preview-839d941c--96c5fed0-24f6-452f-b58a-e31c52f583e6.lovable.app-1776677627972.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
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
