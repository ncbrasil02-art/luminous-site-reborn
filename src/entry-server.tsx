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
    
    const { helmet } = helmetContext;
    
    // Log for debugging (will show in sandbox output)
    console.log(`Rendered URL: ${url}`);
    
    // Return both the HTML content and the Helmet-captured head tags
    // Important: Helmet data needs to be extracted after renderToString
    let head = '';
    if (helmet) {
      head = `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      `;
      console.log(`Head tags found for ${url}: ${head.length} chars`);
    } else {
      console.log(`No helmet context found for ${url}`);
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
