import { createFileRoute, redirect } from '@tanstack/react-router'
import { trackRedirect } from '@/lib/analytics'

export const Route = createFileRoute('/sistemas/$slug')({
  beforeLoad: ({ params, location }) => {
    // We can't easily track client-side redirects before the navigation happens in TanStack Router
    // as it throws a redirect exception.
    // However, we can use the location context or just let the redirect happen
    // and track it on the destination page if we pass parameters, but since we want to monitor
    // which OLD URLs are being hit, we'll try to log it if possible.
    
    // Note: trackRedirect is for window usage, here we are in the routing layer.
    // TanStack Start might run this on server too.
    
    throw redirect({
      to: `/${params.slug}` as any,
      statusCode: 301,
      search: (prev) => ({
        ...prev,
        utm_source: 'redirect',
        utm_medium: '301',
        utm_campaign: 'migration'
      })
    })
  },
})
