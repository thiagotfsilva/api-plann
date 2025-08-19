import { Goal } from '../entity/goal';

export interface GoalRepository {
  create(goal: Goal): Promise<Goal>;
  findById(id: string): Promise<Goal | null>;
  findAll(clientId: string): Promise<Goal[]>;
  update(id: string, goalData: Goal): Promise<Goal | null>;
  delete(id: string): Promise<void>;
}
