import { Goal } from "domain/goal/entity/goal";
import { GoalRepository } from "domain/goal/repository/goalRepository";
import { prisma } from "infrastructure/database/prisma/prisma";

export class PrismaGoalRepository implements GoalRepository {
  async create(goal: Goal): Promise<Goal> {
    const goalCreate = await prisma.goal.create({
      data: {
        clientId: goal.getClientId(),
        type: goal.getType(),
        targetValue: goal.getTargetValue(),
        targetDate: goal.getTargetDate()
      }
    });

    return this.toDomain(goalCreate);
  }

  async findById(id: string): Promise<Goal | null> {
    const goal = await prisma.goal.findUnique({ where: { id } });
    return goal ? this.toDomain(goal) : null;
  }

  async findAll(clientId: string): Promise<Goal[]> {
    const goals = await prisma.goal.findMany({ where: { clientId } });
    return goals.map((goal) => this.toDomain(goal));
  }

  async update(id: string, goalData: Goal): Promise<Goal | null> {
    const updateGoal = await prisma.goal.update({
      where: { id },
      data: {
        ...goalData,
      }
    });

    return this.toDomain(updateGoal);
  }

  async delete(id: string): Promise<void> {
    await prisma.goal.delete({ where: { id } })
  }

  private toDomain(prismaGoal: any): Goal {
      return new Goal(
        prismaGoal.clientId,
        prismaGoal.type,
        prismaGoal.targetValue,
        prismaGoal.targetDate,
        prismaGoal.id,
        /* prismaGoal.createdAt,
        prismaGoal.updatedAt */
      );
    }

}
