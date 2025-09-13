import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      target: 'cloudflare-module',
      customViteReactPlugin: true,
    }),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', { target: '19' }]],
      },
    }),
    tanstackCloudflareDevFixPlugin(),
    cloudflare(),
  ],
  build: {
    rollupOptions: {
      external: ['cloudflare:workers'],
    },
  },
});

export function tanstackCloudflareDevFixPlugin(): Plugin {
  const externalsToRemove = new Set([
    '@tanstack/form-core',
    '@tanstack/react-store',
    '@tanstack/router-devtools-core',
    '@tanstack/router-ssr-query-core',
    'decode-formdata',
    'devalue',
  ]);

  return {
    name: 'tanstack-cloudflare-dev-fix',
    config(config, { command }) {
      // Skip this plugin during build when using Cloudflare
      // The Cloudflare Vite plugin handles externals automatically
      if (command === 'build') {
        console.warn(
          'Skipping SSR external modifications for Cloudflare compatibility',
        );
        return;
      }

      if (config.resolve && Array.isArray(config.resolve.external)) {
        config.resolve.external = config.resolve.external.filter((external) => {
          return !externalsToRemove.has(external);
        });
      }
    },
  };
}
