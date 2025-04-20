export async function getBindings() {
  if (import.meta.env.DEV) {
    const wrangler = await import('wrangler');
    const platformProxy = await wrangler.getPlatformProxy<CloudflareEnv>();
    return platformProxy.env;
  }

  return process.env as unknown as CloudflareEnv;
}
