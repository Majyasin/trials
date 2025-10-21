import { pgTable, text, timestamp, json } from 'drizzle-orm/pg-core';
import { nanoid } from 'nanoid';
import { projects } from './projects';

export interface EndpointDefinition {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  description?: string;
  requestSchema?: any;
  responseSchema?: any;
  middleware?: string[];
}

export const apis = pgTable('apis', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => nanoid()),
  projectId: text('project_id')
    .notNull()
    .references(() => projects.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  description: text('description'),
  endpoints: json('endpoints').$type<EndpointDefinition[]>().notNull().default([]),
  code: text('code'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export type Api = typeof apis.$inferSelect;
export type NewApi = typeof apis.$inferInsert;
