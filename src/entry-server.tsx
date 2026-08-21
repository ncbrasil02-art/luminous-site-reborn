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
    
    const html = ReactDOMServer.renderToString(
      <HelmetProvider context={helmetContext}>
        <RouterProvider router={router} />
      </HelmetProvider>
    );
    
    const { helmet } = helmetContext;
    
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
