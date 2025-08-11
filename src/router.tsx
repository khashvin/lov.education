import { QueryClient } from '@tanstack/react-query';
import { createRouter as createTanstackRouter } from '@tanstack/react-router';
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query';

import { routeTree } from './routeTree.gen';

import './styles.css';

import { DefaultErrorPage } from './components/DefaultErrorPage';
import { DefaultNotFoundPage } from './components/DefaultNotFound';

export interface MyRouterContext {
  queryClient: QueryClient;
}

export const createRouter = () => {
  const queryClient = new QueryClient();

  const router = createTanstackRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultErrorComponent: DefaultErrorPage,
    defaultNotFoundComponent: DefaultNotFoundPage,
  });

  setupRouterSsrQueryIntegration({ router, queryClient });

  return router;
};

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
