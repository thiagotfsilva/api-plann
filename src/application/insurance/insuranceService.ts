import {
  CreateInsuranceDto,
  ResponseInsuranceDto,
  UpdateInsuranceDto,
} from 'api.v1/schemas/insuranceSchema';
import { AppError } from 'commons/domain/errors/appError';
import Insurance from 'domain/insurance/entity/insurance';
import InsuranceType from 'domain/insurance/enum/insureanceType';
import InsuranceRepository from 'domain/insurance/repository/insuranceRepository';

class InsuranceService {
  constructor(private readonly insuranceRepository: InsuranceRepository) {}

  async createInsurance(
    insuranceDto: CreateInsuranceDto
  ): Promise<ResponseInsuranceDto> {
    const insurance = await this.insuranceRepository.create(
      new Insurance(
        insuranceDto.clientId,
        insuranceDto.type as InsuranceType,
        insuranceDto.value
      )
    );

    return this.toResponseInsuranceDto(insurance);
  }

  async findAllInsurances(clientId: string): Promise<ResponseInsuranceDto[]> {
    const insurances = await this.insuranceRepository.findAll(clientId);
    return insurances.map((insurance) =>
      this.toResponseInsuranceDto(insurance)
    );
  }

  async findByIdInsurance(id: string): Promise<ResponseInsuranceDto> {
    const insurance = await this.insuranceRepository.findById(id);

    if (!insurance) {
      throw new AppError('insurance not found', 404);
    }

    return this.toResponseInsuranceDto(insurance);
  }

  async updateInsurance(
    id: string,
    insuranceDto: UpdateInsuranceDto
  ): Promise<ResponseInsuranceDto> {
    const insurance = await this.insuranceRepository.update(
      id,
      new Insurance(
        insuranceDto.clientId!,
        insuranceDto.type as InsuranceType,
        insuranceDto.value!
      )
    );

    return this.toResponseInsuranceDto(insurance!);
  }

  async deleteInsurance(id: string): Promise<void> {
    return await this.insuranceRepository.delete(id);
  }

  private toResponseInsuranceDto = (
    insurance: Insurance
  ): ResponseInsuranceDto => ({
    id: insurance.getId()!,
    clientId: insurance.getClientId(),
    type: insurance.getType(),
    value: insurance.getValue(),
  });
}

export default InsuranceService;
