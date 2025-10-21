import { pgTable, text, timestamp, json } from 'drizzle-orm/pg-core';
import { nanoid } from 'nanoid';
import { projects } from './projects';

export interface TableDefinition {
  name: string;
  fields: Array<{
    name: string;
    type: string;
    required: boolean;
    unique: boolean;
    defaultValue?: any;
  }>;
}

export interface Relationship {
  from: string;
  to: string;
  type: 'one-to-many' | 'many-to-many' | 'one-to-one';
  foreignKey: string;
}

export const schemas = pgTable('schemas', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => nanoid()),
  projectId: text('project_id')
    .notNull()
    .references(() => projects.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  tables: json('tables').$type<TableDefinition[]>().notNull().default([]),
  relationships: json('relationships').$type<Relationship[]>().notNull().default([]),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export type Schema = typeof schemas.$inferSelect;
export type NewSchema = typeof schemas.$inferInsert;
