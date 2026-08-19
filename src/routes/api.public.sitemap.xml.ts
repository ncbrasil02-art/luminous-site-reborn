import { createFileRoute } from '@tanstack/react-router'
import { newsData } from '@/lib/news.data'

export const Route = createFileRoute('/api/public/sitemap/xml')({
  server: {
    handlers: {
      GET: async () => {
        const baseUrl = 'https://www.ncbrasil.com.br'
        const staticRoutes = [
          '',
          '/empresa/quem-somos',
          '/empresa/nossa-historia',
          '/empresa/clientes',
          '/nossos-servicos',
          '/nossos-sistemas',
          '/noticias',
          '/contato',
          '/orcamento'
        ]

        const newsUrls = newsData.map(post => `
          <url>
            <loc>${baseUrl}/noticias/${post.slug}</loc>
            <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
          </url>
        `).join('')

        const staticUrls = staticRoutes.map(route => `
          <url>
            <loc>${baseUrl}${route}</loc>
            <changefreq>weekly</changefreq>
            <priority>${route === '' ? '1.0' : '0.9'}</priority>
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
