import { buildJsonSchemas } from "fastify-zod";
import z from "zod";

const createUserSchema = z.object({
  name: z.string().max(256).min(4),
  email: z.string().max(256).min(4),
  password: z.string(),
  role: z.enum(['ADVISOR', 'VIEWER'])
});

const responseUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
export type ResponseUserDto = z.infer<typeof responseUserSchema>;

export const { schemas: usersSchemas, $ref } = buildJsonSchemas({
  createUserSchema,
  responseUserSchema,
})
