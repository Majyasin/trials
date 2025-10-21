import { z } from 'zod';
import { router, protectedProcedure } from '../trpc';
import { schemas } from '@woap/db/schema';
import { eq, and } from 'drizzle-orm';
import { TRPCError } from '@trpc/server';
import {
  createAIProvider,
  createSchemaDesignerPrompt,
  SCHEMA_DESIGNER_SYSTEM_PROMPT,
  parseJSONFromText,
} from '@woap/ai';

export const schemasRouter = router({
  create: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        name: z.string().min(1),
        tables: z.array(z.any()).default([]),
        relationships: z.array(z.any()).default([]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const [schema] = await ctx.db
        .insert(schemas)
        .values({
          projectId: input.projectId,
          name: input.name,
          tables: input.tables,
          relationships: input.relationships,
        })
        .returning();

      return schema;
    }),

  one: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const [schema] = await ctx.db
        .select()
        .from(schemas)
        .where(eq(schemas.id, input.id))
        .limit(1);

      if (!schema) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Schema not found' });
      }

      return schema;
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        tables: z.array(z.any()).optional(),
        relationships: z.array(z.any()).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;

      const [updated] = await ctx.db
        .update(schemas)
        .set({ ...data, updatedAt: new Date() })
        .where(eq(schemas.id, id))
        .returning();

      if (!updated) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Schema not found' });
      }

      return updated;
    }),

  generateFromDescription: protectedProcedure
    .input(
      z.object({
        description: z.string(),
        context: z.any().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const provider = createAIProvider({
        provider: 'claude',
        apiKey: process.env.ANTHROPIC_API_KEY!,
      });

      const prompt = createSchemaDesignerPrompt(input.description, input.context);
      const response = await provider.generateText(prompt, SCHEMA_DESIGNER_SYSTEM_PROMPT);

      const schemaData = parseJSONFromText(response);
      return schemaData;
    }),

  exportSQL: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const [schema] = await ctx.db
        .select()
        .from(schemas)
        .where(eq(schemas.id, input.id))
        .limit(1);

      if (!schema) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Schema not found' });
      }

      // Generate SQL from schema
      let sql = '';
      for (const table of schema.tables as any[]) {
        sql += `CREATE TABLE ${table.name} (\n`;
        const fields = table.fields.map((field: any) => {
          let line = `  ${field.name} ${field.type.toUpperCase()}`;
          if (field.required) line += ' NOT NULL';
          if (field.unique) line += ' UNIQUE';
          if (field.defaultValue) line += ` DEFAULT ${field.defaultValue}`;
          return line;
        });
        sql += fields.join(',\n');
        sql += '\n);\n\n';
      }

      return { sql };
    }),

  exportDrizzle: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const [schema] = await ctx.db
        .select()
        .from(schemas)
        .where(eq(schemas.id, input.id))
        .limit(1);

      if (!schema) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Schema not found' });
      }

      // Generate Drizzle schema code
      let code = "import { pgTable, text, timestamp, integer, boolean } from 'drizzle-orm/pg-core';\n\n";

      for (const table of schema.tables as any[]) {
        code += `export const ${table.name} = pgTable('${table.name}', {\n`;
        const fields = (table.fields as any[]).map((field: any) => {
          let line = `  ${field.name}: `;
          switch (field.type) {
            case 'string':
              line += 'text';
              break;
            case 'number':
              line += 'integer';
              break;
            case 'boolean':
              line += 'boolean';
              break;
            case 'date':
              line += 'timestamp';
              break;
            default:
              line += 'text';
          }
          line += `('${field.name}')`;
          if (field.required) line += '.notNull()';
          if (field.unique) line += '.unique()';
          return line;
        });
        code += fields.join(',\n');
        code += '\n});\n\n';
      }

      return { code };
    }),
});
