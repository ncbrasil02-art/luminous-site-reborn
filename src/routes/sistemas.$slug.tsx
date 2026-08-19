import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/sistemas/$slug')({
  beforeLoad: ({ params }) => {
    // Redirect /sistemas/something to /something
    throw redirect({
      to: `/${params.slug}`,
      statusCode: 301,
    })
  },
})
