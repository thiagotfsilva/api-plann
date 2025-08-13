import {
  CreateClientDto,
  ResponseClientDto,
  UpdateClientDto,
} from 'api.v1/schemas/clientSchema';
import { AppError } from 'commons/domain/errors/appError';
import { Client } from 'domain/client/entity/client';
import { FamilyProfile } from 'domain/client/enum/familyProfile';
import { ClientRepository } from 'domain/client/repository/clientRepository';

export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async createClient(clientDto: CreateClientDto): Promise<ResponseClientDto> {
    const client = await this.clientRepository.create(
      new Client(
        clientDto.advisorId,
        clientDto.name,
        clientDto.email,
        clientDto.age,
        clientDto.status,
        clientDto.familyProfile as FamilyProfile
      )
    );

    return this.toResponseDto(client);
  }

  async findAll(): Promise<ResponseClientDto[]> {
    const clients = await this.clientRepository.findAll();
    return clients.map((client) => this.toResponseDto(client));
  }

  async findById(id: string): Promise<ResponseClientDto> {
    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new AppError('Usuário não encontrado', 404);
    }

    return this.toResponseDto(client);
  }

  async update(
    id: string,
    clientDto: UpdateClientDto
  ): Promise<ResponseClientDto> {
    const client = await this.clientRepository.update(
      id,
      new Client(
        clientDto.advisorId!,
        clientDto.name!,
        clientDto.email!,
        clientDto.age!,
        clientDto.status!,
        clientDto.familyProfile as FamilyProfile
      )
    );

    return this.toResponseDto(client!);
  }

  async delete(id: string): Promise<void> {
    return await this.clientRepository.delete(id);
  }

  private toResponseDto = (client: Client): ResponseClientDto => ({
    id: client.getId()!,
    name: client.getName(),
    email: client.getEmail(),
    age: client.getAge(),
    status: client.getStatus(),
    familyProfile: client.getFamilyProfile(),
    advisorId: client.getAdvisorId(),
    createdAt: client.getCreatedAt()!,
    updatedAt: client.getUpdatedAt()!,
  });
}
