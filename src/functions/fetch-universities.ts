import { createServerFn } from '@tanstack/react-start'
import { drizzle } from 'drizzle-orm/d1'
import { env } from 'cloudflare:workers'
import * as schema from '@/drizzle/schema'

export const fetchUniversities = createServerFn().handler(async () => {
    const db = drizzle(env.DB, { schema })
    return await db.select().from(schema.universities)
})
