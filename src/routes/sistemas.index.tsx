import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/sistemas/')({
  beforeLoad: () => {
    throw redirect({
      to: '/nossos-sistemas',
      statusCode: 301,
      search: {
        from_redirect: 'sistemas_migration'
      } as any
    })
  },
})
