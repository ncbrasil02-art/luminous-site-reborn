import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sitemap[.]xml')({
  server: {
    handlers: {
      GET: async () => {
        // Redirect or proxy to the API endpoint
        return fetch('http://localhost:8080/api/public/sitemap')
      }
    }
  }
})
