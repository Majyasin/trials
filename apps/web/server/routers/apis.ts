import { z } from 'zod';
import { router, protectedProcedure } from '../trpc';
import { apis } from '@woap/db/schema';
import { eq, and } from 'drizzle-orm';
import { TRPCError } from '@trpc/server';
import {
  createAIProvider,
  createAPIGeneratorPrompt,
  API_GENERATOR_SYSTEM_PROMPT,
  parseJSONFromText,
} from '@woap/ai';

export const apisRouter = router({
  create: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        name: z.string().min(1),
        description: z.string().optional(),
        endpoints: z.array(z.any()).default([]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const [api] = await ctx.db
        .insert(apis)
        .values({
          projectId: input.projectId,
          name: input.name,
          description: input.description,
          endpoints: input.endpoints,
        })
        .returning();

      return api;
    }),

  one: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const [api] = await ctx.db
        .select()
        .from(apis)
        .where(eq(apis.id, input.id))
        .limit(1);

      if (!api) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'API not found' });
      }

      return api;
    }),

  all: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(async ({ ctx, input }) => {
      const items = await ctx.db
        .select()
        .from(apis)
        .where(eq(apis.projectId, input.projectId));

      return items;
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        description: z.string().optional(),
        endpoints: z.array(z.any()).optional(),
        code: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;

      const [updated] = await ctx.db
        .update(apis)
        .set({ ...data, updatedAt: new Date() })
        .where(eq(apis.id, id))
        .returning();

      if (!updated) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'API not found' });
      }

      return updated;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const [deleted] = await ctx.db
        .delete(apis)
        .where(eq(apis.id, input.id))
        .returning();

      if (!deleted) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'API not found' });
      }

      return { success: true };
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

      const prompt = createAPIGeneratorPrompt(input.description, input.context);
      const response = await provider.generateText(prompt, API_GENERATOR_SYSTEM_PROMPT);

      const apiData = parseJSONFromText(response);
      return apiData;
    }),

  generateCode: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const [api] = await ctx.db
        .select()
        .from(apis)
        .where(eq(apis.id, input.id))
        .limit(1);

      if (!api) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'API not found' });
      }

      // Generate TypeScript code for the endpoints
      let code = "import express from 'express';\nimport { z } from 'zod';\n\n";
      code += 'const router = express.Router();\n\n';

      for (const endpoint of api.endpoints as any[]) {
        code += `// ${endpoint.description || endpoint.path}\n`;
        code += `router.${endpoint.method.toLowerCase()}('${endpoint.path}', async (req, res) => {\n`;
        code += '  try {\n';
        code += '    // Add your logic here\n';
        code += '    res.json({ success: true });\n';
        code += '  } catch (error) {\n';
        code += '    res.status(500).json({ error: error.message });\n';
        code += '  }\n';
        code += '});\n\n';
      }

      code += 'export default router;\n';

      // Update the API with generated code
      await ctx.db
        .update(apis)
        .set({ code, updatedAt: new Date() })
        .where(eq(apis.id, input.id));

      return { code };
    }),
});
