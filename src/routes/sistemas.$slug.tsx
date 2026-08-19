import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/sistemas/$slug')({
  beforeLoad: ({ params }) => {
    // Redirect /sistemas/something to /something (Flat structure migration)
    // We add search params to help track the source of the visit in analytics
    throw redirect({
      to: `/${params.slug}` as any,
      statusCode: 301,
      search: {
        from_redirect: 'sistemas_migration'
      }
    })
  },
})
