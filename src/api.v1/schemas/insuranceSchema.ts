import { buildJsonSchemas } from "fastify-zod";
import z from "zod";

const baseInsuranceSchema = z.object({
  clientId: z.string().uuid(),
  type: z.enum(['LIFE','DISABILITY']),
  value: z.number().min(1),
});

const createInsuranceSchema = baseInsuranceSchema;

const responseInsuranceSchema = baseInsuranceSchema.extend({ id: z.string() });

const updateInsuranceSchema = baseInsuranceSchema.partial();

const paramsSchema = z.object({
  id: z.string().uuid(),
});

const listInsuranceResponseSchema = z.array(responseInsuranceSchema);

export type CreateInsuranceDto = z.infer<typeof createInsuranceSchema>;
export type UpdateInsuranceDto = z.infer<typeof updateInsuranceSchema>;
export type ResponseInsuranceDto = z.infer<typeof responseInsuranceSchema>;
export type ListInsuranceResponseDto = z.infer<typeof listInsuranceResponseSchema>;

export const {schemas: insuranceSchema, $ref } = buildJsonSchemas(
  {
    createInsuranceSchema,
    updateInsuranceSchema,
    responseInsuranceSchema,
    listInsuranceResponseSchema,
    paramsSchema,
  },
  {
    $id: 'insuranceSchema',
  }
);
