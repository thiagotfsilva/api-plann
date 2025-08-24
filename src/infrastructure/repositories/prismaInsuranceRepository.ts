import Insurance from "domain/insurance/entity/insurance";
import InsuranceRepository from "domain/insurance/repository/insuranceRepository";
import { prisma } from "infrastructure/database/prisma/prisma";

class PrismaInsuranceRepository implements InsuranceRepository{
  async create(insurance: Insurance): Promise<Insurance> {
    const insuranceCreate = await prisma.insurance.create({
      data: {
        clientId: insurance.getClientId(),
        type: insurance.getType(),
        value: insurance.getValue(),
      }
    });

    return this.toDomain(insuranceCreate);
  }

  async findById(id: string): Promise<Insurance | null> {
    const insurance = await prisma.insurance.findUnique({ where: { id } });
    return insurance ? this.toDomain(insurance) : null;
  }

  async findAll(clientId: string): Promise<Insurance[]> {
    const insurances = await prisma.insurance.findMany({ where: { clientId } });
    return insurances.map((insurance) => this.toDomain(insurance));
  }

  async update(id: string, insuranceData: Insurance): Promise<Insurance | null> {
    const updateInsurance = await prisma.insurance.update({
      where: { id },
      data: {
        ...insuranceData,
      },
    });

    return this.toDomain(updateInsurance);
  }

  async delete(id: string): Promise<void> {
    await prisma.insurance.delete({ where: { id } });
  }

  toDomain(prismaInsurance: any): Insurance {
    return new Insurance(
      prismaInsurance.clientId,
      prismaInsurance.type,
      prismaInsurance.value,
      prismaInsurance.id,
    );
  }
}

export default PrismaInsuranceRepository;
