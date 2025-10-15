import type { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import React from 'react';
import { Toaster } from 'sonner';

import { getVersionMetadata } from '@/functions/version-metadata';
import { Footer, Navigation, TopBar } from '../components/layout';
import appCss from '../styles.css?url';

export interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async () => {
    const metadata = await getVersionMetadata();
    return { metadata };
  },
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Literacy of Virtue - Education Consultancy' },
      {
        name: 'description',
        content:
          'Expert education consultancy services for international students',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
      },
    ],
  }),
  shellComponent: RootComponent,
});

function RootComponent({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">
          <header className="z-50 w-full">
            <TopBar />
            <Navigation />
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster position="top-right" />
        <TanStackRouterDevtools />
        <ReactQueryDevtools buttonPosition="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
