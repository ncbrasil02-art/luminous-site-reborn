import ReactDOMServer from 'react-dom/server';
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import { routeTree } from './routeTree.gen';

export function render(url: string) {
  const history = createMemoryHistory({
    initialEntries: [url],
  });

  const router = createRouter({
    routeTree,
    history,
  });

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
}
