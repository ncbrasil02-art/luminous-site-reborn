import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/sistemas/$slug')({
  beforeLoad: ({ params, location }) => {
    // Redirect /sistemas/something to /something (Flat structure migration)
    // We add a search param so the destination page can track this redirect in analytics
    // Since search params are typed, we use 'as any' to allow tracking parameters 
    // without polluting all route definitions
    throw redirect({
      to: `/${params.slug}` as any,
      statusCode: 301,
      search: {
        from_redirect: 'sistemas_migration'
      } as any
    })
  },
})
