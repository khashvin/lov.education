import { defineConfig } from '@tanstack/react-start/config'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import nitroCloudflareDev from 'nitro-cloudflare-dev'
import { cloudflare } from 'unenv'

export default defineConfig({
  server: {
    preset: 'cloudflare-module',
    unenv: cloudflare,
    modules: [nitroCloudflareDev],
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
  },
})
