import { pgTable, text, timestamp, json } from 'drizzle-orm/pg-core';
import { nanoid } from 'nanoid';
import { projects } from './projects';

export const chatRole = ['user', 'assistant', 'system'] as const;
export type ChatRole = (typeof chatRole)[number];

export interface MessageMetadata {
  context?: any;
  toolsUsed?: string[];
  model?: string;
  tokens?: number;
}

export const chatMessages = pgTable('chat_messages', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => nanoid()),
  projectId: text('project_id')
    .notNull()
    .references(() => projects.id, { onDelete: 'cascade' }),
  role: text('role', { enum: chatRole }).notNull(),
  content: text('content').notNull(),
  metadata: json('metadata').$type<MessageMetadata>().default({}),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type ChatMessage = typeof chatMessages.$inferSelect;
export type NewChatMessage = typeof chatMessages.$inferInsert;
