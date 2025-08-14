import { PrismaGoalRepository } from "infrastructure/repositories/prismaGoalRepository";
import { GoalService } from "./goalService";

export function makeGoalServiceFactory(): GoalService {
  const prismaGoalRepository = new PrismaGoalRepository();
  return new GoalService(prismaGoalRepository);
}
