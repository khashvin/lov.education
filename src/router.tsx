import { createRouter as createTanstackRouter } from '@tanstack/react-router'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'
import { QueryClient } from '@tanstack/react-query'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import './styles.css'
import { DefaultNotFoundPage } from './components/DefaultNotFound'
import { DefaultErrorPage } from './components/DefaultErrorPage'
const queryClient = new QueryClient()

// Create a new router instance
export const createRouter = () => {
  const router = routerWithQueryClient(
    createTanstackRouter({
      routeTree,
      context: { queryClient },
      scrollRestoration: true,
      defaultPreload: 'intent',
      defaultPreloadDelay: 500,
      defaultPreloadStaleTime: 0,
      defaultErrorComponent: DefaultErrorPage,
      defaultNotFoundComponent: DefaultNotFoundPage
    }),
    queryClient,
  )

  return router
}

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
