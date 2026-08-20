import { createFileRoute, redirect } from '@tanstack/react-router'
import { newsData } from '@/lib/news.data'

export const Route = createFileRoute('/$tag/$slug')({
  beforeLoad: ({ params }) => {
    // 1. First, check if the slug matches a news article
    const newsPost = newsData.find(p => p.slug === params.slug)
    if (newsPost) {
      throw redirect({
        to: '/noticias/$slug',
        params: { slug: newsPost.slug },
        statusCode: 301
      })
    }

    // 2. Check if it's a known legacy pattern (like /criar-sites/something)
    // The user mentioned: https://www.ncbrasil.com.br/criar-sites/criacao-de-aplicativos/
    // We can redirect these to the root slug or a news post if it exists
    if (params.tag === 'criar-sites' && params.slug === 'criacao-de-aplicativos') {
       throw redirect({
        to: '/servicos/aplicativos',
        statusCode: 301
      })
    }
    
    // 3. General fallback: if it's a deep legacy URL, try to see if the second part matches a flat route
    // We already have flat routes for most services/systems.
    // TanStack Router will try to match specific routes first before this wildcard.
  }
})
