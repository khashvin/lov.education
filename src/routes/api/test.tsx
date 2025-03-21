import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'
import { env } from 'cloudflare:workers'

export const APIRoute = createAPIFileRoute('/api/test')({
  GET: async () => {
    const result = await env.DB.prepare("SELECT * FROM sqlite_master WHERE type='table'").run();
    return json({ result: result.results })
  },
})
