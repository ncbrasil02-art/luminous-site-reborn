import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sitemap/xml')({
  server: {
    handlers: {
      GET: async () => {
        // Redirect or proxy to the dynamic sitemap
        // In this case, we'll just redirect to keep it simple, 
        // but for SEO a direct response is better.
        // Let's actually just copy the logic or import it.
        
        // Since TanStack Start doesn't easily allow importing handlers between routes 
        // without refactoring, we'll just fetch it or redirect.
        // Redirecting with 301 is fine for robots.
        
        return new Response(null, {
          status: 301,
          headers: {
            'Location': '/api/public/sitemap'
          }
        })
      }
    }
  }
})
