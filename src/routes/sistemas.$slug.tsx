import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/sistemas/$slug')({
  beforeLoad: ({ params }) => {
    // Redirect /sistemas/something to /something (Flat structure migration)
    throw redirect({
      to: `/${params.slug}` as any,
      statusCode: 301,
    })
  },
})
