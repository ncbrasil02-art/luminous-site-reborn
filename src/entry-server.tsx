import ReactDOMServer from 'react-dom/server';
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import { routeTree } from './routeTree.gen';

export function render(url: string) {
  try {
    const history = createMemoryHistory({
      initialEntries: [url],
    });

    const router = createRouter({
      routeTree,
      history,
    });

    const helmetContext: { helmet?: HelmetServerState } = {};

    // Wait for the router to be ready? Memory history is synchronous usually.
    // However, TanStack Router might need some internal processing.
    
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
