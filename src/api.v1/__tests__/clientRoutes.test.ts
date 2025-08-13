import { buildApp } from 'app';
import { FamilyProfile } from 'domain/client/enum/familyProfile';
import { UserRole } from 'domain/user/enums/userRole';
import { FastifyInstance } from 'fastify';
import { PrismaClient } from 'infrastructure/database/generated/prisma';
import request from 'supertest';

const prisma = new PrismaClient();
let app: FastifyInstance;
let user: any;

beforeAll(async () => {
  app = buildApp();
  await app.ready();
});

beforeEach(async () => {
  // Limpa tabela antes de cada teste
  await prisma.client.deleteMany();
  user = await prisma.user.create({
    data: {
      name: "user test",
      email: "usertest@email.com",
      password: "12345",
      role: UserRole.ADVISOR,
    },
  });
});

afterAll(async () => {
  if (app) { // Verifique se app existe antes de fechar
    await app.close();
  }
  await prisma.$disconnect();
}, 10000);

describe('Client Routes', () => {
  it('should create a new client', async () => {
    const clientData = {
      advisorId: user.id,
      age: 30,
      name: 'John Doe',
      email: 'john@example.com',
      familyProfile: FamilyProfile.SINGLE,
      status: true,
    };

    const res = await request(app.server)
      .post('/api/v1/clients')
      .send(clientData)
      .expect(201);

    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(clientData.name);
  });

  it('should list clients', async () => {
    await prisma.client.create({
      data: {
        advisorId: user.id,
        age: 30,
        name: 'John Doe',
        email: 'john@example.com',
        familyProfile: FamilyProfile.SINGLE,
        status: true,
      },
    });

    const res = await request(app.server).get('/api/v1/clients').expect(200);

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(1);
  });
});
