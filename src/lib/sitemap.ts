import { newsData } from '@/lib/news.data';
import { SITE_URL } from '@/lib/seo';

// Manual list of static routes to ensure inclusion
const staticRoutes = [
  '/',
  '/empresa/quem-somos',
  '/empresa/nossa-historia',
  '/empresa/clientes',
  '/contato',
  '/orcamento',
  '/trabalhos-realizados',
  '/nossos-servicos',
  '/nossos-sistemas',
  '/solucoes-web/desenvolvimento-de-sites',
  '/solucoes-web/loja-virtual',
  '/solucoes-web/landing-pages',
  '/solucoes-web/marketing-digital',
  '/solucoes-web/seo-google',
  '/solucoes-web/hospedagem',
  '/servicos/desenvolvimento',
  '/servicos/sistemas-web',
  '/servicos/aplicativos',
  '/servicos/identidade-visual',
  '/servicos/google-ads',
  '/servicos/facebook-ads',
  '/servicos/consultoria',
  '/sistema-de-leilao',
  '/sistema-de-leilao-rural',
  '/classificados-de-veiculos',
  '/sistema-de-cupom-descontos',
  '/plataforma-chinesa-apostas-cassino',
  '/sistema-de-raspadinha',
  '/sistema-de-rifas',
  '/sistema-de-ofertas-cupom-marketplace',
  '/sistema-de-revenda-de-veiculos',
  '/sistema-de-leilao-de-centavos',
  '/noticias',
  '/portfolio/sites-criados',
  '/portfolio/lojas-virtuais-criadas',
  '/portfolio/criacao-de-aplicativos',
  '/portfolio/criacao-de-sistemas',
  '/portfolio/identidade-visual',
  '/portfolio/logotipos-criados',
  '/portfolio/sistema-de-compra-coletiva',
  '/portfolio/sistemas-criados',
];

export function generateSitemap() {
  const newsRoutes = newsData
    .filter(post => post.slug)
    .map(post => `/noticias/${post.slug}`);
    
  const categories = Array.from(new Set(newsData.flatMap(p => p.categories)));
  const categoryRoutes = categories.map(cat => `/noticias/categoria/${encodeURIComponent(cat)}`);
  
  const tags = Array.from(new Set(newsData.flatMap(p => p.tags)));
  const tagRoutes = tags.map(tag => `/noticias/tag/${encodeURIComponent(tag)}`);

  const allRoutes = [...staticRoutes, ...newsRoutes, ...categoryRoutes, ...tagRoutes];
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(route => `  <url>
    <loc>${SITE_URL}${route === '/' ? '' : route}</loc>
    <changefreq>${route.startsWith('/noticias/') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route.includes('/sistema-') ? '0.9' : '0.8'}</priority>
  </url>`)
  .join('\n')}
</urlset>`;

  return xml;
}
