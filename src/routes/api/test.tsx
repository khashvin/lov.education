import * as schema from '@/drizzle/schema'
import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'
import { env } from 'cloudflare:workers'
import { drizzle } from 'drizzle-orm/d1'

export const APIRoute = createAPIFileRoute('/api/test')({
  GET: async () => {
    const db = drizzle(env.DB);
    const result = await db.select().from(schema.universities);
    return json({ result })
  },
})
