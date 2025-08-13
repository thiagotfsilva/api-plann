import { buildJsonSchemas } from 'fastify-zod';
import z from 'zod';

const baseUserSchema = z.object({
  name: z.string().max(256).min(4),
  email: z.string().email().max(256).min(4),
  password: z.string(),
  role: z.enum(['ADVISOR', 'VIEWER']),
});

const createUserSchema = baseUserSchema;

const responseUserSchema = baseUserSchema.extend({
  id: z.string(),
  role: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
export type ResponseUserDto = z.infer<typeof responseUserSchema>;

export const { schemas: usersSchemas, $ref } = buildJsonSchemas(
  {
    createUserSchema,
    responseUserSchema,
  },
  { $id: 'userSchema' }
);
