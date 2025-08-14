import { Client } from 'domain/client/entity/client';
import { FamilyProfile } from 'domain/client/enum/familyProfile';
import { ClientRepository } from 'domain/client/repository/clientRepository';
import { prisma } from 'infrastructure/database/prisma/prisma';

export class PrismaClientRepository implements ClientRepository {
  async create(client: Client): Promise<Client> {
    const clientCreated = await prisma.client.create({
      data: {
        name: client.getName(),
        email: client.getEmail(),
        age: client.getAge(),
        status: client.getStatus(),
        advisorId: client.getAdvisorId(),
        familyProfile: client.getFamilyProfile(),
      },
    });

    return this.toDomain(clientCreated);
  }
  async findById(id: string): Promise<Client | null> {
    const client = await prisma.client.findUnique({ where: { id } });
    return client ? this.toDomain(client) : null;
  }

  async findAll(): Promise<Client[]> {
    const clients = await prisma.client.findMany();
    return clients.map((client) => this.toDomain(client));
  }

  async update(id: string, clientData: Client): Promise<Client | null> {
    const updatedClient = await prisma.client.update({
      where: { id },
      data: {
        ...clientData,
        /* name: clientData.getName(),
        email: clientData.getEmail(),
        age: clientData.getAge(),
        status: clientData.getStatus(),
        familyProfile: clientData.getFamilyProfile(),
        advisorId: clientData.getAdvisorId(), */
      },
    });

    return updatedClient ? this.toDomain(updatedClient) : null;
  }

  async delete(id: string): Promise<void> {
    await prisma.client.delete({ where: { id } });
  }

  private toDomain(prismaClient: any): Client {
    return new Client(
      prismaClient.advisorId,
      prismaClient.name,
      prismaClient.email,
      prismaClient.age,
      prismaClient.status,
      prismaClient.familyProfile as FamilyProfile,
      prismaClient.id,
      prismaClient.createdAt,
      prismaClient.updatedAt
    );
  }
}
