import ReactDOMServer from 'react-dom/server';
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export function render(url: string) {
  const history = createMemoryHistory({
    initialEntries: [url],
  });

  const router = createRouter({
    routeTree,
    history,
  });

  // Pre-load the route to ensure it's ready
  // router.load() returns a promise, but for string rendering we usually need the sync result
  // In dynamic SSG we might need to await something if loaders are async
  
  const html = ReactDOMServer.renderToString(
    <RouterProvider router={router} />
  );
  
  return html;
}
