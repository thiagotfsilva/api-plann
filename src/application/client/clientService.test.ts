import { CreateClientDto, UpdateClientDto } from 'api.v1/schemas/clientSchema';
import { ClientService } from 'application/client/clientService';
import { AppError } from 'commons/domain/errors/appError';
import { Client } from 'domain/client/entity/client';
import { FamilyProfile } from 'domain/client/enum/familyProfile';
import { ClientRepository } from 'domain/client/repository/clientRepository';

describe('ClientService', () => {
  let service: ClientService;
  let mockRepository: jest.Mocked<ClientRepository>;

  beforeEach(() => {
    mockRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    } as jest.Mocked<ClientRepository>;

    service = new ClientService(mockRepository);
  });

  describe('createClient', () => {
    it('should create a client and return the response DTO', async () => {
      const createDto: CreateClientDto = {
        advisorId: '1',
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
        status: true,
        familyProfile: FamilyProfile.SINGLE,
      };

      const createdClient = new Client(
        createDto.advisorId,
        createDto.name,
        createDto.email,
        createDto.age,
        createDto.status,
        createDto.familyProfile as FamilyProfile,
        '1',
        new Date(),
        new Date()
      );

      mockRepository.create.mockResolvedValue(createdClient);

      const result = await service.createClient(createDto);

      expect(mockRepository.create).toHaveBeenCalledWith(
        expect.objectContaining({
          name: createDto.name,
          email: createDto.email,
          age: createDto.age,
          status: createDto.status,
          familyProfile: createDto.familyProfile,
        })
      );

      expect(result).toEqual({
        advisorId: '1',
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
        status: true,
        familyProfile: FamilyProfile.SINGLE,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      });
    });
  });

  describe('findAll', () => {
    it('should return all clients as response DTOs', async () => {
      const client1 = new Client(
        '1',
        'John Doe',
        'john@example.com',
        30,
        true,
        FamilyProfile.SINGLE,
        '1',
        new Date(),
        new Date()
      );
      const client2 = new Client(
        '2',
        'Jane Doe',
        'jane@example.com',
        28,
        false,
        FamilyProfile.COUPLE,
        '2',
        new Date(),
        new Date()
      );

      mockRepository.findAll.mockResolvedValue([client1, client2]);

      const result = await service.findAll();

      expect(mockRepository.findAll).toHaveBeenCalled();
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        advisorId: '1',
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
        status: true,
        familyProfile: FamilyProfile.SINGLE,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      });
    });
  });

  describe('findById', () => {
    it('should return the client as response DTO if found', async () => {
      const client = new Client(
        '1',
        'John Doe',
        'john@example.com',
        30,
        true,
        FamilyProfile.SINGLE,
        '1',
        new Date(),
        new Date()
      );

      mockRepository.findById.mockResolvedValue(client);

      const result = await service.findById('1');

      expect(mockRepository.findById).toHaveBeenCalledWith('1');
      expect(result).toEqual({
        advisorId: '1',
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
        status: true,
        familyProfile: FamilyProfile.SINGLE,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      });
    });

    it('should throw AppError if client not found', async () => {
      mockRepository.findById.mockResolvedValue(null);

      await expect(service.findById('nonexistent')).rejects.toThrow(
        new AppError('client not found', 404)
      );
      expect(mockRepository.findById).toHaveBeenCalledWith('nonexistent');
    });
  });

  describe('update', () => {
    it('should update the client and return the response DTO', async () => {
      const updateDto: UpdateClientDto = {
        advisorId: '1',
        name: 'Updated John',
        email: 'updated@example.com',
        age: 31,
        status: false,
        familyProfile: FamilyProfile.COUPLE,
      };

      const updatedClient = new Client(
        updateDto.advisorId!,
        updateDto.name!,
        updateDto.email!,
        updateDto.age!,
        updateDto.status!,
        updateDto.familyProfile as FamilyProfile,
        '1',
        new Date(),
        new Date()
      );

      mockRepository.update.mockResolvedValue(updatedClient);

      const result = await service.update('1', updateDto);

      expect(mockRepository.update).toHaveBeenCalledWith(
        '1',
        expect.objectContaining({
          advisorId: updateDto.advisorId,
          name: updateDto.name,
          email: updateDto.email,
          age: updateDto.age,
          status: updateDto.status,
          familyProfile: updateDto.familyProfile,
        })
      );
      expect(result).toEqual({
        advisorId: '1',
        id: '1',
        name: 'Updated John',
        email: 'updated@example.com',
        age: 31,
        status: false,
        familyProfile: FamilyProfile.COUPLE,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      });
    });
  });

  describe('delete', () => {
    it('should delete the client', async () => {
      mockRepository.delete.mockResolvedValue(undefined);

      await service.delete('1');

      expect(mockRepository.delete).toHaveBeenCalledWith('1');
    });
  });
});
