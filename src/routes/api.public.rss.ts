import { createFileRoute } from '@tanstack/react-router'
import { newsData } from '@/lib/news.data'

export const Route = createFileRoute('/api/public/rss/xml')({
  server: {
    handlers: {
      GET: async () => {
        const baseUrl = 'https://www.ncbrasil.com.br'
        
        const items = newsData.map(post => `
          <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${baseUrl}/noticias/${post.slug}</link>
            <guid isPermaLink="true">${baseUrl}/noticias/${post.slug}</guid>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <description><![CDATA[${post.content.replace(/<[^>]*>/g, '').slice(0, 200)}...]]></description>
            ${post.image_url ? `<media:content url="${post.image_url}" medium="image" />` : ''}
          </item>
        `).join('')

        const rss = `<?xml version="1.0" encoding="UTF-8" ?>
          <rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">
            <channel>
              <title>NC Brasil - Revista Digital</title>
              <link>${baseUrl}/noticias</link>
              <description>Últimas notícias sobre tecnologia, sistemas web e inovação.</description>
              <language>pt-br</language>
              <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
              <atom:link href="${baseUrl}/api/public/rss" rel="self" type="application/rss+xml" />
              ${items}
            </channel>
          </rss>`

        return new Response(rss, {
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
          }
        })
      }
    }
  }
})
