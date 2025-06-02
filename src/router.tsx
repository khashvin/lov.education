import { createRouter as createTanstackRouter } from '@tanstack/react-router';
import { routerWithQueryClient } from '@tanstack/react-router-with-query';
import { QueryClient } from '@tanstack/react-query';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

import './styles.css';
import { DefaultNotFoundPage } from './components/DefaultNotFound';
import { DefaultErrorPage } from './components/DefaultErrorPage';

export interface MyRouterContext {
  queryClient: QueryClient;
}

// Create a new router instance
export const createRouter = () => {
  const queryClient = new QueryClient();

  const router = routerWithQueryClient(
    createTanstackRouter({
      routeTree,
      context: { queryClient },
      scrollRestoration: true,
      defaultPreload: 'intent',
      defaultErrorComponent: DefaultErrorPage,
      defaultNotFoundComponent: DefaultNotFoundPage,
    }),
    queryClient,
  );

  return router;
};

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
