import { router } from '../trpc';
import { projectsRouter } from './projects';
import { schemasRouter } from './schemas';
import { apisRouter } from './apis';
import { deploymentsRouter } from './deployments';
import { aiRouter } from './ai';
import { usersRouter } from './users';

export const appRouter = router({
  projects: projectsRouter,
  schemas: schemasRouter,
  apis: apisRouter,
  deployments: deploymentsRouter,
  ai: aiRouter,
  users: usersRouter,
});

export type AppRouter = typeof appRouter;
