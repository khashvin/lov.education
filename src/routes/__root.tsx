import {
  Outlet,
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { TopBar, Navigation, Footer } from '../components/layout'
import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

// Root document component
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <style>
          {`
            @keyframes slideDown {
              0% {
                transform: translateY(-100%);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                opacity: 1;
              }
            }
            .animate-slideDown {
              animation: slideDown 0.3s ease-in-out forwards;
            }
          `}
        </style>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Literacy of Virtue - Education Consultancy',
      },
      {
        name: 'description',
        content: 'Expert education consultancy services for international students',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
      },
    ],
  }),

  component: () => {
    return (
      <RootDocument>
        <div className="min-h-screen flex flex-col">
          <header className="w-full z-50">
            <TopBar />
            <Navigation />
          </header>
          
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
        <TanStackRouterDevtools />
        <ReactQueryDevtools buttonPosition="bottom-right" />
      </RootDocument>
    );
  }
})
