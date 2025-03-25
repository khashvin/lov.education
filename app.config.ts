import { defineConfig } from '@tanstack/react-start/config'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from 'unenv'

export default defineConfig({
  server: {
    preset: 'cloudflare-module',
    unenv: cloudflare,
  },
  tsr: {
    appDirectory: 'src',
  },
  vite: {
    plugins: [
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      tailwindcss(),
    ],
    build: {
      rollupOptions: {
        external: [
          'cloudflare:workers',
        ]
      },
      sourcemap: true,
    },
  },
})
