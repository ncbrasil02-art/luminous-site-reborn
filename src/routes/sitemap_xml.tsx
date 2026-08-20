import { createFileRoute } from '@tanstack/react-router';
import { generateSitemap } from '@/lib/sitemap';

export const Route = createFileRoute('/sitemap[.]xml')({
  loader: () => {
    const xml = generateSitemap();
    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  },
  component: () => null,
});
