import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { nanoid } from 'nanoid';
import { projects } from './projects';

export const deploymentStatus = ['pending', 'building', 'success', 'failed'] as const;
export type DeploymentStatus = (typeof deploymentStatus)[number];

export const deployments = pgTable('deployments', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => nanoid()),
  projectId: text('project_id')
    .notNull()
    .references(() => projects.id, { onDelete: 'cascade' }),
  status: text('status', { enum: deploymentStatus }).notNull().default('pending'),
  url: text('url'),
  logs: text('logs').default(''),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export type Deployment = typeof deployments.$inferSelect;
export type NewDeployment = typeof deployments.$inferInsert;
