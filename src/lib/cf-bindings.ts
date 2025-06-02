export async function getBindings() {
  if (import.meta.env.DEV) {
    const wrangler = await import('wrangler');
    const platformProxy = await wrangler.getPlatformProxy<Cloudflare.Env>();
    return platformProxy.env;
  }

  return await import('cloudflare:workers').then(({ env }) => env);
}
