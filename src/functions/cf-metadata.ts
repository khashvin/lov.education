import { getBindings } from "@/lib/cf-bindings";
import { createServerFn } from "@tanstack/react-start";

export const fetchVersionMetadata = createServerFn()
    .handler(async () => {
        const cf = await getBindings();
        return cf.CF_VERSION_METADATA
    })