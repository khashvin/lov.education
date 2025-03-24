import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"

export const universities = sqliteTable("universities", {
  id: integer().primaryKey(),
  name: text().notNull(),
  path: text().notNull(),
  description: text().notNull(),
  intake: text().notNull(),
  location: text().notNull(),
  image: text().notNull(),
  thumbnail: text().notNull(),
  fieldOfStudies: text({ mode: "json" }).$type<FieldOfStudy[]>().default([]),
  enabled: integer({ mode: "boolean" }).notNull().default(true),
})

export const faculties = sqliteTable("faculties", {
  id: integer().primaryKey(),
  name: text().notNull(),
  university: integer().references(() => universities.id, { onDelete: "cascade"}),
})

export const courses = sqliteTable("courses", {
  id: integer().primaryKey(),
  name: text().notNull(),
  faculty: integer().references(() => faculties.id, { onDelete: "cascade"}),
})

export type FieldOfStudy = "Business" | "Engineering" | "Arts" | "Science" | "Medicine" | "Law" | "Education" | "Technology" | "Agriculture" | "Architecture" | "Design" | "Music" | "Visual Arts" | "Finance" | "Social Sciences" | "Humanities" | "Other"

export type University = typeof universities.$inferSelect
export type Faculty = typeof faculties.$inferSelect
export type Course = typeof courses.$inferSelect

export type FacultyWithCourses = Faculty & {
  courses: Course[]
}

export type UniversityWithFaculties = University & {
  faculties: FacultyWithCourses[]
}