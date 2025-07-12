import { createServerFn } from '@tanstack/react-start';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/d1';

import * as schema from '@/drizzle/schema';
import { getBindings } from '@/lib/cf-bindings';

export const fetchUniversities = createServerFn().handler(async () => {
  const cf = await getBindings();
  const db = drizzle(cf.DB, { schema });
  return await db
    .select()
    .from(schema.universities)
    .where(eq(schema.universities.enabled, true));
});

export const fetchUniversity = createServerFn()
  .validator((uniPath: string) => uniPath)
  .handler(async (ctx) => {
    const cf = await getBindings();
    const db = drizzle(cf.DB, { schema });
    return await db.query.universities.findFirst({
      where: eq(schema.universities.path, ctx.data),
    });
  });

export const fetchFaculties = createServerFn()
  .validator((universityId: number) => universityId)
  .handler(async (ctx) => {
    const cf = await getBindings();
    const db = drizzle(cf.DB, { schema });
    return await db.query.faculties.findMany({
      where: eq(schema.faculties.university, ctx.data),
    });
  });

export const fetchCourses = createServerFn()
  .validator((facultyId: number) => facultyId)
  .handler(async (ctx) => {
    const cf = await getBindings();
    const db = drizzle(cf.DB, { schema });
    return await db.query.courses.findMany({
      where: eq(schema.courses.faculty, ctx.data),
    });
  });
