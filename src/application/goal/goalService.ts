import {
  CreateGoalDto,
  ListGoalSDto,
  ResponseGoalDto,
  UpdateGoalDto,
} from 'api.v1/schemas/goalSchemas';
import { AppError } from 'commons/domain/errors/appError';
import { Goal } from 'domain/goal/entity/goal';
import { GoalType } from 'domain/goal/enum/goalType';
import { GoalRepository } from 'domain/goal/repository/goalRepository';

export class GoalService {
  constructor(private readonly goalRepository: GoalRepository) {}

  async createGoal(goalDto: CreateGoalDto): Promise<ResponseGoalDto> {
    const createdGoal = await this.goalRepository.create(
      new Goal(
        goalDto.clientId,
        goalDto.type as GoalType,
        goalDto.targetValue,
        goalDto.targetDate
      )
    );

    return this.toResponseDto(createdGoal);
  }

  async findGoalById(id: string): Promise<ResponseGoalDto> {
    const goal = await this.goalRepository.findById(id);

    if (!goal) {
      throw new AppError('goal not found', 404);
    }

    return this.toResponseDto(goal);
  }

  async findAllGoals(): Promise<ResponseGoalDto[]> {
    const goals = await this.goalRepository.findAll();
    return goals.map((goal) => this.toResponseDto(goal));
  }

  async updateGoal(
    id: string,
    goalDto: UpdateGoalDto
  ): Promise<ResponseGoalDto> {
    const goal = await this.goalRepository.update(
      id,
      new Goal(
        goalDto.clientId!,
        goalDto.type as GoalType,
        goalDto.targetValue!,
        goalDto.targetDate!
      )
    );

    if (!goal) {
      throw new AppError('server error', 500);
    }

    return this.toResponseDto(goal);
  }

  async delete(id: string) {
    await this.goalRepository.delete(id);
  }

  private toResponseDto = (goal: Goal): ResponseGoalDto => ({
    id: goal.getId()!,
    clientId: goal.getClientId(),
    type: goal.getType(),
    targetValue: goal.getTargetValue(),
    targetDate: goal.getTargetDate(),
    /* createdAt: goal.getCreatedAt()!,
    updatedAt: goal.getUpdatedAt()!, */
  });
}
