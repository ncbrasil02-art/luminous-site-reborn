import ReactDOMServer from 'react-dom/server';
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import { routeTree } from './routeTree.gen';

export async function render(url: string) {
  try {
    const history = createMemoryHistory({
      initialEntries: [url],
    });

    const router = createRouter({
      routeTree,
      history,
    });

    // Wait for the router to load the route match and any critical data
    await router.load();

    const helmetContext: { helmet?: HelmetServerState } = {};
    
    // Using renderToString to be sure everything is rendered
    const html = ReactDOMServer.renderToString(
      <HelmetProvider context={helmetContext}>
        <RouterProvider router={router} />
      </HelmetProvider>
    );
    
    // IMPORTANT: Helmet data must be accessed AFTER renderToString
    const { helmet } = helmetContext;
    console.log(`[SSR] Rendered ${url}, helmet title: ${helmet?.title?.toString() || 'none'}`);

    
    let head = '';
    if (helmet) {
      head = `
        ${helmet.title ? helmet.title.toString() : ''}
        ${helmet.meta ? helmet.meta.toString() : ''}
        ${helmet.link ? helmet.link.toString() : ''}
        ${helmet.script ? helmet.script.toString() : ''}
      `;
    }

    return {
      html,
      head
    };
  } catch (error) {
    console.error(`Error in entry-server for URL ${url}:`, error);
    return { html: '', head: '' };
  }
}
