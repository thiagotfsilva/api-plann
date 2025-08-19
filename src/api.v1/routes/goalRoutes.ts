import { GoalController } from 'api.v1/controllers/goalController';
import { $ref } from 'api.v1/schemas/goalSchemas';
import { FastifyInstance } from 'fastify';

const goalController = new GoalController();

export const goalRouter = async (app: FastifyInstance) => {
  app.post(
    '/',
    {
      schema: {
        body: $ref('createGoalSchema'),
        response: { 201: $ref('responseGoalSchema') },
      },
    },
    goalController.createGoal
  );

  app.get(
    '/client/:clientId',
    {
      schema: {
        params: $ref('paramsListSchema'),
        response: { 200: $ref('listGoalSchema') },
      },
    },
    goalController.listGoals
  );

  app.get(
    '/:id',
    {
      schema: {
        params: $ref('paramsSchema'),
        response: { 200: $ref('responseGoalSchema') },
      },
    },
    goalController.getGoalById
  );

  app.put(
    '/:id',
    {
      schema: {
        params: $ref('paramsSchema'),
        body: $ref('updateGoalSchema'),
        response: { 200: $ref('responseGoalSchema') },
      },
    },
    goalController.updateGoal
  );

  app.delete(
    '/:id',
    {
      schema: {
        params: $ref('paramsSchema'),
      },
    },
    goalController.deleteGoal
  );

  return app;
};
