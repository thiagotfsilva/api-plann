import { CreateGoalDto, UpdateGoalDto } from "api.v1/schemas/goalSchemas";
import { makeGoalServiceFactory } from "application/goal/goalFactory";
import { FastifyReply, FastifyRequest } from "fastify";

export class GoalController {
  async createGoal(
    req: FastifyRequest<{ Body: CreateGoalDto }>,
    reply: FastifyReply
  ) {
    const goalService = makeGoalServiceFactory();
    const goal = await goalService.createGoal(req.body);
    return reply.status(201).send(goal);
  }

  async listGoals(req: FastifyRequest<{ Params: {clientId: string } }>, reply: FastifyReply) {
    const { clientId } = req.params;
    const goalService = makeGoalServiceFactory();
    const goals = await goalService.findAllGoals(clientId);
    return reply.status(200).send(goals);
  }

  async getGoalById(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    const { id } = req.params;
    const goalService = makeGoalServiceFactory();
    const goal = await goalService.findGoalById(id);
    return reply.status(200).send(goal)
  }

  async updateGoal(
    req: FastifyRequest<{ Params: { id: string }; Body: UpdateGoalDto }>,
    reply: FastifyReply
  ) {
    const { id } = req.params;
    const dto = req.body;
    const goalService = makeGoalServiceFactory();
    const goal = await goalService.updateGoal(id, dto);
    return reply.status(200).send(goal);
  }

  async deleteGoal(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    const { id } = req.params;
    const goalService = makeGoalServiceFactory();
    await goalService.delete(id);
    return reply.status(204).send();
  }
}
