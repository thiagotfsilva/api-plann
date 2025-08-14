import { buildJsonSchemas } from 'fastify-zod';
import z from 'zod';

const baseGoalSchema = z.object({
  clientId: z.string().uuid(),
  type: z.enum(['RETIREMENT', 'SHORT_TERM', 'MEDIUM_TERM']),
  targetValue: z.number(),
  targetDate: z.date(),
});

const createGoalSchema = baseGoalSchema;

const responseGoalSchema = baseGoalSchema.extend({
  id: z.string(),
  /* createdAt: z.date(),
  updatedAt: z.date(), */
});

const paramsSchema = z.object({
  id: z.string().uuid(),
});

const listGoalSchema = z.array(responseGoalSchema);

const updateGoalSchema = baseGoalSchema.partial();

export type CreateGoalDto = z.infer<typeof createGoalSchema>;
export type UpdateGoalDto = z.infer<typeof updateGoalSchema>;
export type ResponseGoalDto = z.infer<typeof responseGoalSchema>;
export type ListGoalSDto = z.infer<typeof listGoalSchema>;

export const { schemas: goalSchema, $ref } = buildJsonSchemas(
  {
    createGoalSchema,
    updateGoalSchema,
    paramsSchema,
    responseGoalSchema,
    listGoalSchema,
  },
  {
    $id: 'goalSchema'
  }
);


