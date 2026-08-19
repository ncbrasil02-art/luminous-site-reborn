import { createFileRoute } from '@tanstack/react-router';
import { buildMeta, SITE_URL } from '@/lib/seo';

export const Route = createFileRoute('/api/public/audit-seo')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const results: any[] = [];
        
        // Static routes to audit
        const routes = [
          '/',
          '/empresa/quem-somos',
          '/servicos/aplicativos',
          '/solucoes-web/desenvolvimento-de-sites',
          '/portfolio/sites-criados',
          '/sistema-de-leilao',
          '/noticias',
        ];

        for (const path of routes) {
          const canonical = `${SITE_URL}${path === '/' ? '' : path}`;
          results.push({
            path,
            canonical,
            hreflang: 'pt-BR'
          });
        }

        return new Response(JSON.stringify({ 
          success: true, 
          audit_time: new Date().toISOString(),
          results 
        }, null, 2), {
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }
  }
});
