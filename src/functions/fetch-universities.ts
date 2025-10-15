import { createServerFn } from '@tanstack/react-start';
import { env } from 'cloudflare:workers';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/d1';

import * as schema from '@/drizzle/schema';

export const fetchUniversities = createServerFn().handler(async () => {
  const db = drizzle(env.DB, { schema });
  return await db
    .select()
    .from(schema.universities)
    .where(eq(schema.universities.enabled, true));
});

export const fetchUniversity = createServerFn()
  .inputValidator((uniPath: string) => uniPath)
  .handler(async (ctx) => {
    const db = drizzle(env.DB, { schema });
    return await db.query.universities.findFirst({
      where: eq(schema.universities.path, ctx.data),
    });
  });

export const fetchFaculties = createServerFn()
  .inputValidator((universityId: number) => universityId)
  .handler(async (ctx) => {
    const db = drizzle(env.DB, { schema });
    return await db.query.faculties.findMany({
      where: eq(schema.faculties.university, ctx.data),
    });
  });

export const fetchCourses = createServerFn()
  .inputValidator((facultyId: number) => facultyId)
  .handler(async (ctx) => {
    const db = drizzle(env.DB, { schema });
    return await db.query.courses.findMany({
      where: eq(schema.courses.faculty, ctx.data),
    });
  });
