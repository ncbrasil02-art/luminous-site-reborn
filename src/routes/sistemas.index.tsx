import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/sistemas/')({
  beforeLoad: () => {
    throw redirect({
      to: '/nossos-sistemas',
      statusCode: 301,
    })
  },
})
