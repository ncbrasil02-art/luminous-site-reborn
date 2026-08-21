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

  // Wait for the router to be ready
  // In a real SSG environment, you'd want to handle data fetching here too
  
  const html = ReactDOMServer.renderToString(
    <RouterProvider router={router} />
  );
  
  return html;
}
