import { buildJsonSchemas } from 'fastify-zod';
import z from 'zod';

const errorMessages = {
  advisorId: {
    required_error: 'O id do usuário é obrigatório.',
  },
  name: {
    required_error: 'O nome é obrigatório.',
    too_small: 'O nome deve ter pelo menos 4 caracteres.',
    too_big: 'O nome deve ter no máximo 256 caracteres.',
  },
  email: {
    required_error: 'O e-mail é obrigatório.',
    invalid_string: 'O e-mail deve ser válido.',
    too_small: 'O e-mail deve ter pelo menos 4 caracteres.',
    too_big: 'O e-mail deve ter no máximo 256 caracteres.',
  },
  age: {
    required_error: 'A idade é obrigatória.',
    too_small: 'A idade deve ser maior que 16.',
    invalid_type: 'A idade deve ser um número.',
  },
  status: {
    required_error: 'O status é obrigatório.',
    invalid_type: 'O status deve ser verdadeiro ou falso.',
  },
  familyProfile: {
    required_error: 'O perfil familiar é obrigatório.',
    invalid_enum_value:
      'O perfil familiar deve ser: SINGLE, COUPLE, FAMILY ou RETIRED.',
  },
};

const baseClientSchema = z.object({
  advisorId: z
    .string({ required_error: errorMessages.advisorId.required_error })
    .uuid(),
  name: z
    .string({ required_error: errorMessages.name.required_error })
    .min(4, { message: errorMessages.name.too_small })
    .max(256, { message: errorMessages.name.too_big }),
  email: z
    .string({ required_error: errorMessages.email.required_error })
    .email({ message: errorMessages.email.invalid_string })
    .min(4, { message: errorMessages.email.too_small })
    .max(256, { message: errorMessages.email.too_big }),
  age: z
    .number({ required_error: errorMessages.age.required_error })
    .min(17, { message: errorMessages.age.too_small }),
  status: z.boolean({ required_error: errorMessages.status.required_error }),
  familyProfile: z.enum(['SINGLE', 'COUPLE', 'FAMILY', 'RETIRED'], {
    required_error: errorMessages.familyProfile.required_error,
    invalid_type_error: errorMessages.familyProfile.invalid_enum_value,
  }),
});

const createClientSchema = baseClientSchema;

const responseClientSchema = baseClientSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const paramsSchema = z.object({
  id: z.string().uuid(),
});

const listClientsResponseSchema = z.array(responseClientSchema);

const updateClientSchema = baseClientSchema.partial();

export type CreateClientDto = z.infer<typeof createClientSchema>;
export type UpdateClientDto = z.infer<typeof updateClientSchema>;
export type ResponseClientDto = z.infer<typeof responseClientSchema>;
export type ListClientsResponseDto = z.infer<typeof listClientsResponseSchema>;

export const { schemas: clientSchemas, $ref } = buildJsonSchemas(
  {
    createClientSchema,
    updateClientSchema,
    responseClientSchema,
    listClientsResponseSchema,
    paramsSchema,
  },
  {
    $id: 'clientSchema',
  }
);
