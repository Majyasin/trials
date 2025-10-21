import { z } from 'zod';
import { router, protectedProcedure } from '../trpc';
import { deployments } from '@woap/db/schema';
import { eq, and, desc } from 'drizzle-orm';
import { TRPCError } from '@trpc/server';

export const deploymentsRouter = router({
  create: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const [deployment] = await ctx.db
        .insert(deployments)
        .values({
          projectId: input.projectId,
          status: 'pending',
          logs: 'Deployment initiated...\n',
        })
        .returning();

      // TODO: Trigger actual deployment process
      // This would typically involve:
      // 1. Building the project
      // 2. Creating Docker containers
      // 3. Deploying to cloud provider
      // 4. Updating deployment status

      return deployment;
    }),

  one: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const [deployment] = await ctx.db
        .select()
        .from(deployments)
        .where(eq(deployments.id, input.id))
        .limit(1);

      if (!deployment) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Deployment not found',
        });
      }

      return deployment;
    }),

  all: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(async ({ ctx, input }) => {
      const items = await ctx.db
        .select()
        .from(deployments)
        .where(eq(deployments.projectId, input.projectId))
        .orderBy(desc(deployments.createdAt));

      return items;
    }),

  logs: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const [deployment] = await ctx.db
        .select()
        .from(deployments)
        .where(eq(deployments.id, input.id))
        .limit(1);

      if (!deployment) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Deployment not found',
        });
      }

      return { logs: deployment.logs || '' };
    }),
});
