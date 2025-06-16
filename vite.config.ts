import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { cloudflare } from '@cloudflare/vite-plugin';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      target: 'cloudflare-module',
      react: {
        babel: {
          plugins: [['babel-plugin-react-compiler', { target: '19' }]],
        },
      },
    }),
    cloudflare(),
  ],
  build: {
    rollupOptions: {
      external: ['cloudflare:workers'],
    },
  },
});
