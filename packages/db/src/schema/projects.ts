import { pgTable, text, timestamp, json } from 'drizzle-orm/pg-core';
import { nanoid } from 'nanoid';
import { users } from './users';

export const projectStatus = ['draft', 'published', 'archived'] as const;
export type ProjectStatus = (typeof projectStatus)[number];

export const projects = pgTable('projects', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => nanoid()),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  description: text('description'),
  status: text('status', { enum: projectStatus }).notNull().default('draft'),
  settings: json('settings').$type<Record<string, any>>().default({}),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
