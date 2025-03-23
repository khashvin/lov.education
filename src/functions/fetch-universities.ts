import { createServerFn } from '@tanstack/react-start'
import { drizzle } from 'drizzle-orm/d1'
import { env } from 'cloudflare:workers'
import * as schema from '@/drizzle/schema'
import { eq } from 'drizzle-orm'

export const fetchUniversities = createServerFn()
    .handler(async () => {
        const db = drizzle(env.DB, { schema })
        return await db.select().from(schema.universities).where(eq(schema.universities.enabled, true))
    })

export const fetchUniversity = createServerFn()
    .validator((uniPath: string) => uniPath)
    .handler(async (ctx) => {
        const db = drizzle(env.DB, { schema })
        return await db.query.universities.findFirst({
            where: eq(schema.universities.path, ctx.data)
        })
    })

export const fetchFaculties = createServerFn()
    .validator((universityId: number) => universityId)
    .handler(async (ctx) => {
        const db = drizzle(env.DB, { schema })
        return await db.query.faculties.findMany({
            where: eq(schema.faculties.university, ctx.data)
        })
    })

export const fetchCourses = createServerFn()
    .validator((facultyId: number) => facultyId)
    .handler(async (ctx) => {
        const db = drizzle(env.DB, { schema })
        return await db.query.courses.findMany({
            where: eq(schema.courses.faculty, ctx.data)
        })
    })