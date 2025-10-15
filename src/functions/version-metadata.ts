import { createServerFn } from '@tanstack/react-start';
import { env } from 'cloudflare:workers';

export const getVersionMetadata = createServerFn().handler(async () => {
  return {
    metadata: env.VERSION_METADATA,
  };
});
