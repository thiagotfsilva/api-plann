import InsuranceRepository from 'domain/insurance/repository/insuranceRepository';
import InsuranceService from './insuranceService';
import {
  CreateInsuranceDto,
  UpdateInsuranceDto,
} from 'api.v1/schemas/insuranceSchema';
import InsuranceType from 'domain/insurance/enum/insureanceType';
import Insurance from 'domain/insurance/entity/insurance';
import { AppError } from 'commons/domain/errors/appError';

describe('InsuranceService', () => {
  let service: InsuranceService;
  let mockRepository: jest.Mocked<InsuranceRepository>;

  beforeEach(() => {
    mockRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    } as jest.Mocked<InsuranceRepository>;

    service = new InsuranceService(mockRepository);
  });

  describe('createInsurance', () => {
    it('Should create a insurance and return the response DTO', async () => {
      const createDto: CreateInsuranceDto = {
        clientId: '1',
        type: InsuranceType.DISABILITY,
        value: 200000,
      };

      const insuranceCreated = new Insurance(
        createDto.clientId,
        createDto.type as InsuranceType,
        createDto.value,
        '1'
      );

      mockRepository.create.mockResolvedValue(insuranceCreated);

      const result = await service.createInsurance(createDto);

      expect(mockRepository.create).toHaveBeenCalledWith(
        expect.objectContaining({
          clientId: createDto.clientId,
          type: createDto.type,
          value: createDto.value,
        })
      );

      expect(result).toEqual({
        id: '1',
        clientId: '1',
        type: InsuranceType.DISABILITY,
        value: 200000,
      });
    });
  });

  describe('findAll', () => {
    it('should return all insurance as response DTO', async () => {
      const insurance = new Insurance('1', InsuranceType.LIFE, 3000, '1');
      const insurance2 = new Insurance(
        '2',
        InsuranceType.DISABILITY,
        3000,
        '2'
      );

      mockRepository.findAll.mockResolvedValue([insurance, insurance2]);

      const result = await service.findAllInsurances(insurance.getClientId());

      expect(mockRepository.findAll).toHaveBeenCalled();
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        id: '1',
        clientId: '1',
        type: InsuranceType.LIFE,
        value: 3000,
      });
    });
  });

  describe('findById', () => {
    it('should return the insurance as respose DTO if found', async () => {
      const insurance = new Insurance('1', InsuranceType.LIFE, 3000, '1');

      mockRepository.findById.mockResolvedValue(insurance);

      const result = await service.findByIdInsurance('1');

      expect(mockRepository.findById).toHaveBeenCalledWith('1');
      expect(result).toEqual({
        id: '1',
        clientId: '1',
        type: InsuranceType.LIFE,
        value: 3000,
      });
    });

    it('should throw AppErro if insurance not found', async () => {
      mockRepository.findById.mockResolvedValue(null);

      await expect(service.findByIdInsurance('nonexistent')).rejects.toThrow(
        new AppError('insurance not found', 404)
      );
      expect(mockRepository.findById).toHaveBeenCalledWith('nonexistent');
    });
  });

  describe('update', () => {
    it('should update the insurance and return the response DTO', async () => {
      const updateInsuranceDto: UpdateInsuranceDto = {
        clientId: '1',
        type: InsuranceType.DISABILITY,
        value: 30000,
      };

      const updateInsurance = new Insurance(
        updateInsuranceDto.clientId!,
        updateInsuranceDto.type as InsuranceType,
        updateInsuranceDto.value!,
        '1',
      );

      mockRepository.update.mockResolvedValue(updateInsurance);

      const result = await service.updateInsurance('1', updateInsuranceDto);

      expect(mockRepository.update).toHaveBeenCalledWith(
        '1',
        expect.objectContaining({
          clientId: updateInsuranceDto.clientId,
          type: updateInsuranceDto.type,
          value: updateInsuranceDto.value,
        })
      );

      expect(result).toEqual({
        id: '1',
        clientId: '1',
        type: InsuranceType.DISABILITY,
        value: 30000,
      });
    });
  });

  describe('delete', () => {
    it('should delete the goal', async () => {
      mockRepository.delete.mockResolvedValue(undefined);

      await service.deleteInsurance('1');

      expect(mockRepository.delete).toHaveBeenCalledWith('1');
    });
  });
});
