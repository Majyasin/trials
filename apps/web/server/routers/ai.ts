import { z } from 'zod';
import { router, protectedProcedure } from '../trpc';
import { chatMessages } from '@woap/db/schema';
import { eq } from 'drizzle-orm';
import { createAIProvider } from '@woap/ai';

export const aiRouter = router({
  chat: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        message: z.string(),
        provider: z.enum(['openai', 'claude', 'mistral']).default('claude'),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Save user message
      await ctx.db.insert(chatMessages).values({
        projectId: input.projectId,
        role: 'user',
        content: input.message,
      });

      // Get AI response
      const apiKey =
        input.provider === 'openai'
          ? process.env.OPENAI_API_KEY!
          : input.provider === 'claude'
          ? process.env.ANTHROPIC_API_KEY!
          : process.env.MISTRAL_API_KEY!;

      const provider = createAIProvider({
        provider: input.provider,
        apiKey,
      });

      const systemPrompt = `You are an expert backend architect helping users design and build their backend systems.
You can help with:
- Designing database schemas
- Creating REST API endpoints
- Writing business logic
- Deployment configurations
- Best practices and optimization

Be concise, clear, and provide actionable advice.`;

      const response = await provider.generateText(input.message, systemPrompt);

      // Save assistant message
      await ctx.db.insert(chatMessages).values({
        projectId: input.projectId,
        role: 'assistant',
        content: response,
        metadata: {
          model: input.provider,
        },
      });

      return { response };
    }),

  messages: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(async ({ ctx, input }) => {
      const messages = await ctx.db
        .select()
        .from(chatMessages)
        .where(eq(chatMessages.projectId, input.projectId))
        .orderBy(chatMessages.createdAt);

      return messages;
    }),

  generateBackend: protectedProcedure
    .input(
      z.object({
        description: z.string(),
        requirements: z.array(z.string()).optional(),
      })
    )
    .mutation(async ({ input }) => {
      const provider = createAIProvider({
        provider: 'claude',
        apiKey: process.env.ANTHROPIC_API_KEY!,
      });

      const prompt = `Generate a complete backend design for:\n\n${input.description}\n\n${
        input.requirements
          ? `Requirements:\n${input.requirements.map((r) => `- ${r}`).join('\n')}`
          : ''
      }\n\nProvide:\n1. Database schema\n2. API endpoints\n3. Authentication approach\n4. Key business logic`;

      const response = await provider.generateText(prompt);

      return { design: response };
    }),

  suggestImprovements: protectedProcedure
    .input(
      z.object({
        schema: z.any().optional(),
        apis: z.any().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const provider = createAIProvider({
        provider: 'claude',
        apiKey: process.env.ANTHROPIC_API_KEY!,
      });

      let prompt = 'Analyze the following backend design and suggest improvements:\n\n';

      if (input.schema) {
        prompt += `Database Schema:\n${JSON.stringify(input.schema, null, 2)}\n\n`;
      }

      if (input.apis) {
        prompt += `API Endpoints:\n${JSON.stringify(input.apis, null, 2)}\n\n`;
      }

      prompt += 'Focus on:\n1. Performance\n2. Scalability\n3. Security\n4. Best practices';

      const response = await provider.generateText(prompt);

      return { suggestions: response };
    }),
});
