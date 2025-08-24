import Insurance from '../entity/insurance';

interface InsuranceRepository {
  create(insurance: Insurance): Promise<Insurance>;
  findById(id: string): Promise<Insurance | null>;
  findAll(clientId: string): Promise<Insurance[]>;
  update(id: string, insuranceData: Insurance): Promise<Insurance | null>;
  delete(id: string): Promise<void>;
}

export default InsuranceRepository;
