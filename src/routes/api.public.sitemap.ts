import { createFileRoute } from '@tanstack/react-router'
import { newsData } from '@/lib/news.data'

export const Route = createFileRoute('/api/public/sitemap')({
  server: {
    handlers: {
      GET: async () => {
        const baseUrl = 'https://www.ncbrasil.com.br'
        const today = new Date().toISOString().split('T')[0]
        
        const staticRoutes = [
          { path: '', priority: '1.0' },
          { path: '/empresa/quem-somos', priority: '0.8' },
          { path: '/empresa/nossa-historia', priority: '0.7' },
          { path: '/empresa/clientes', priority: '0.7' },
          { path: '/nossos-servicos', priority: '0.9' },
          { path: '/nossos-sistemas', priority: '0.9' },
          { path: '/noticias', priority: '0.8' },
          { path: '/solucoes-web', priority: '0.9' },
          { path: '/solucoes-web/desenvolvimento-de-sites', priority: '0.9' },
          { path: '/solucoes-web/loja-virtual', priority: '0.9' },
          { path: '/solucoes-web/landing-pages', priority: '0.9' },
          { path: '/solucoes-web/marketing-digital', priority: '0.9' },
          { path: '/solucoes-web/seo-google', priority: '0.9' },
          { path: '/solucoes-web/hospedagem', priority: '0.8' },
          { path: '/sistema-de-leilao', priority: '0.9' },
          { path: '/sistema-de-leilao-rural', priority: '0.9' },
          { path: '/classificados-de-veiculos', priority: '0.9' },
          { path: '/sistema-de-cupom-descontos', priority: '0.9' },
          { path: '/plataforma-chinesa-apostas-cassino', priority: '0.9' },
          { path: '/sistema-de-raspadinha', priority: '0.9' },
          { path: '/sistema-de-rifas', priority: '0.9' },
          { path: '/sistema-de-ofertas-cupom-marketplace', priority: '0.9' },
          { path: '/sistema-de-revenda-de-veiculos', priority: '0.9' },
          { path: '/sistema-de-leilao-de-centavos', priority: '0.9' },
          { path: '/contato', priority: '0.8' },
          { path: '/orcamento', priority: '0.9' }
        ]

        const newsUrls = newsData.map(post => {
          // Parse WordPress-style date "Tue, 07 Aug 2018 15:56:10 +0000"
          let dateStr = today;
          try {
            const date = new Date(post.date);
            if (!isNaN(date.getTime())) {
              dateStr = date.toISOString().split('T')[0];
            }
          } catch (e) {
            // fallback to today if invalid
          }

          return `
            <url>
              <loc>${baseUrl}/noticias/${post.slug}</loc>
              <lastmod>${dateStr}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        }).join('')

        const staticUrls = staticRoutes.map(route => `
          <url>
            <loc>${baseUrl}${route.path}</loc>
            <lastmod>${today}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>${route.priority}</priority>
          </url>
        `).join('')

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${staticUrls}
            ${newsUrls}
          </urlset>`

        return new Response(sitemap, {
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=86400'
          }
        })
      }
    }
  }
})
