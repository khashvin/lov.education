import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './src/drizzle/migrations',
  dialect: 'sqlite',
  schema: './src/drizzle/schema.ts',
  driver: 'd1-http',
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID as string,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID as string,
    token: process.env.CLOUDFLARE_TOKEN as string,
  },
});
