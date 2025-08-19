import { GoalRepository } from "domain/goal/repository/goalRepository";
import { GoalService } from "./goalService";
import { CreateGoalDto, UpdateGoalDto } from "api.v1/schemas/goalSchemas";
import { Goal } from "domain/goal/entity/goal";
import { GoalType } from "domain/goal/enum/goalType";
import { AppError } from "commons/domain/errors/appError";

describe('GoalService', () => {
  let service: GoalService;
  let mockRepository: jest.Mocked<GoalRepository>;

  beforeEach(() => {
    mockRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    } as jest.Mocked<GoalRepository>;

    service = new GoalService(mockRepository);
  });

  describe('createGoal', () => {
    it('Should create a goal and return the response DTO', async () => {
      const createDto: CreateGoalDto = {
        clientId: '1',
        type: GoalType.MEDIUM_TERM,
        targetValue: 500000,
        targetDate: new Date(),
      };

      const createdGoal = new Goal(
        createDto.clientId,
        createDto.type as GoalType,
        createDto.targetValue,
        createDto.targetDate,
        '1',
        /* new Date(),
        new Date() */
      );

      mockRepository.create.mockResolvedValue(createdGoal);

      const result = await service.createGoal(createDto);

      expect(mockRepository.create).toHaveBeenCalledWith(
        expect.objectContaining({
          clientId: createDto.clientId,
          type: createDto.type,
          targetValue: createDto.targetValue,
          targetDate: createDto.targetDate,
        })
      );

      expect(result).toEqual({
        id: '1',
        clientId: '1',
        type: GoalType.MEDIUM_TERM,
        targetValue: 500000,
        targetDate: expect.any(Date),
        /* createdAt: expect.any(Date),
        updatedAt: expect.any(Date), */
      });
    });
  });

  describe('findAll', () => {
    it('should return all goals as response DTOs', async () => {
      const goal1 = new Goal(
        '1',
        GoalType.SHORT_TERM,
        100000,
        new Date(),
        '1',
        /* new Date(),
        new Date() */
      );
      const goal2 = new Goal(
        '2',
        GoalType.MEDIUM_TERM,
        1000000,
        new Date(),
        '2',
        /* new Date(),
        new Date() */
      );

      mockRepository.findAll.mockResolvedValue([goal1, goal2]);

      const result = await service.findAllGoals(goal1.getClientId());

      expect(mockRepository.findAll).toHaveBeenCalled();
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        id: '1',
        clientId: '1',
        type: GoalType.SHORT_TERM,
        targetValue: 100000,
        targetDate: expect.any(Date),
        /* createdAt: expect.any(Date),
        updatedAt: expect.any(Date), */
      });
    });
  });

  describe('findById', () => {
    it('should return the goal as response DTO if found', async () => {
      const goal = new Goal(
        '1',
        GoalType.MEDIUM_TERM,
        500000,
        new Date(),
        '1',
        /* new Date(),
        new Date() */
      );

      mockRepository.findById.mockResolvedValue(goal);

      const result = await service.findGoalById('1');

      expect(mockRepository.findById).toHaveBeenCalledWith('1');
      expect(result).toEqual({
        id: '1',
        clientId: '1',
        type: GoalType.MEDIUM_TERM,
        targetValue: 500000,
        targetDate: expect.any(Date),
        /* createdAt: expect.any(Date),
        updatedAt: expect.any(Date), */
      });
    });

    it('should throw AppError if goal not found', async () => {
      mockRepository.findById.mockResolvedValue(null);

      await expect(service.findGoalById('nonexistent')).rejects.toThrow(
        new AppError('goal not found', 404)
      );
      expect(mockRepository.findById).toHaveBeenCalledWith('nonexistent');
    });
  });

  describe('update', () => {
    it('should update the goal and return the response DTO', async () => {
      const updateDto: UpdateGoalDto = {
        clientId: '1',
        type: GoalType.RETIREMENT,
        targetValue: 750000,
        targetDate: new Date(),
      };

      const updatedGoal = new Goal(
        updateDto.clientId!,
        updateDto.type as GoalType,
        updateDto.targetValue!,
        updateDto.targetDate!,
        '1',
        /* new Date(),
        new Date() */
      );

      mockRepository.update.mockResolvedValue(updatedGoal);

      const result = await service.updateGoal('1', updateDto);

      expect(mockRepository.update).toHaveBeenCalledWith(
        '1',
        expect.objectContaining({
          clientId: updateDto.clientId,
          type: updateDto.type,
          targetValue: updateDto.targetValue,
          targetDate: updateDto.targetDate,
        })
      );
      expect(result).toEqual({
        id: '1',
        clientId: '1',
        type: GoalType.RETIREMENT,
        targetValue: 750000,
        targetDate: expect.any(Date),
        /* createdAt: expect.any(Date),
        updatedAt: expect.any(Date), */
      });
    });
  });

  describe('delete', () => {
    it('should delete the goal', async () => {
      mockRepository.delete.mockResolvedValue(undefined);

      await service.delete('1');

      expect(mockRepository.delete).toHaveBeenCalledWith('1');
    });
  });
});
