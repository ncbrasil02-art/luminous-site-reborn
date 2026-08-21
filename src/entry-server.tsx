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

    // CRITICAL: Preload all data needed for the route
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
    if (helmet) {
      console.log(`Title: ${helmet.title.toString()}`);
    }

    return {
      html,
      head: helmet ? `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      ` : ''
    };
  } catch (error) {
    console.error(`Error in entry-server for URL ${url}:`, error);
    return { html: '', head: '' };
  }
}
