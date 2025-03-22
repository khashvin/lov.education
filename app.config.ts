import { defineConfig } from '@tanstack/react-start/config'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    preset: 'cloudflare-module',
    cloudflare: {
      deployConfig: true,
      wrangler: {
        name: 'lov-education',
        compatibility_date: '2024-09-19',
        compatibility_flags: ['nodejs_compat'],
        assets: {
          directory: '.output/public/',
          binding: 'ASSETS',
        },
        placement: {
          mode: 'smart',
        },
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'LOV_DB',
            database_id: '85bac0e1-a2cf-4157-a54c-399e597ece62',
            migrations_dir: './src/drizzle/migrations',
          },
        ],
        observability: {
          logs: {
            enabled: true,
          },
        },
      },
    },
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
          'cloudflare:workers'
        ]
      }
    }
  },
})
