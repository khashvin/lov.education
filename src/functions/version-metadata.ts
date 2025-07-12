import { createServerFn } from '@tanstack/react-start';

import { getBindings } from '@/lib/cf-bindings';

export const getVersionMetadata = createServerFn().handler(async () => {
  const cf = await getBindings();

  return {
    metadata: cf.VERSION_METADATA,
  };
});
