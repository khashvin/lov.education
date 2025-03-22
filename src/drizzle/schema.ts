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

export type University = typeof universities.$inferSelect
export type Faculty = typeof faculties.$inferSelect
export type Course = typeof courses.$inferSelect