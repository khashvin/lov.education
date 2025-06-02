import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema.ts',
  dbCredentials: {
    url: 'file:./.wrangler/state/v3/d1/miniflare-D1DatabaseObject/36e3c9a58d2fd18136c257cbcab32224042788cbe7d730e04beb2f820904535e.sqlite',
  },
});
