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
  // ✅ ORDEM CORRETA: deleta dependências primeiro
  await prisma.goal.deleteMany();
  await prisma.client.deleteMany();
  await prisma.user.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();

  if (app) {
    await app.close();
  }
}, 15000); // Aumentar timeout

describe('Client Routes', () => {
  it('should create a new client', async () => {
    const timestamp = Date.now();

    user = await prisma.user.create({
      data: {
        name: "user test",
        email: `usertest${timestamp}@email.com`, // Email único
        password: "12345",
        role: UserRole.ADVISOR,
      },
    });

    const clientData = {
      advisorId: user.id,
      age: 30,
      name: 'John Doe',
      email: `john${timestamp}@example.com`, // Email único por teste
      familyProfile: FamilyProfile.SINGLE,
      status: true,
    };

    const res = await request(app.server)
      .post('/api/v1/clients')
      .send(clientData)
      .expect(201);

    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(clientData.name);
    expect(res.body.email).toBe(clientData.email);
  });

  it('should list clients', async () => {
    const timestamp = Date.now();

    user = await prisma.user.create({
      data: {
        name: "user test",
        email: `usertest${timestamp}@email.com`, // Email único
        password: "12345",
        role: UserRole.ADVISOR,
      },
    });

    const client = await prisma.client.create({
      data: {
        advisorId: user.id,
        age: 30,
        name: 'John Doe',
        email: `john${timestamp}@example.com`, // Email único
        familyProfile: FamilyProfile.SINGLE,
        status: true,
      },
    });

    const res = await request(app.server)
      .get('/api/v1/clients')
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(1);
    expect(res.body[0].id).toBe(client.id);
  });

  it('should get a client by id', async () => {
    const timestamp = Date.now();

    user = await prisma.user.create({
      data: {
        name: "user test",
        email: `usertest${timestamp}@email.com`, // Email único
        password: "12345",
        role: UserRole.ADVISOR,
      },
    });

    const client = await prisma.client.create({
      data: {
        advisorId: user.id,
        age: 30,
        name: 'John Doe',
        email: `john${timestamp}@example.com`, // Email único
        familyProfile: FamilyProfile.SINGLE,
        status: true,
      },
    });

    const res = await request(app.server)
      .get(`/api/v1/clients/${client.id}`)
      .expect(200);

    expect(res.body).toHaveProperty('id', client.id);
    expect(res.body.name).toBe(client.name);
    expect(res.body.email).toBe(client.email);
  });

  it('should update a client', async () => {
    const timestamp = Date.now();

    user = await prisma.user.create({
      data: {
        name: "user test",
        email: `usertest${timestamp}@email.com`, // Email único
        password: "12345",
        role: UserRole.ADVISOR,
      },
    });

    const client = await prisma.client.create({
      data: {
        advisorId: user.id,
        age: 30,
        name: 'John Doe',
        email: `john${timestamp}@example.com`, // Email único
        familyProfile: FamilyProfile.SINGLE,
        status: true,
      },
    });

    const updateData = {
      name: 'Jane Doe',
      age: 35,
    };

    const res = await request(app.server)
      .put(`/api/v1/clients/${client.id}`)
      .send(updateData)
      .expect(200);

    expect(res.body.name).toBe(updateData.name);
    expect(res.body.age).toBe(updateData.age);
    expect(res.body.email).toBe(client.email); // unchanged field
  });

  it('should delete a client', async () => {
    const timestamp = Date.now();

    user = await prisma.user.create({
      data: {
        name: "user test",
        email: `usertest${timestamp}@email.com`, // Email único
        password: "12345",
        role: UserRole.ADVISOR,
      },
    });

    const client = await prisma.client.create({
      data: {
        advisorId: user.id,
        age: 30,
        name: 'John Doe',
        email: `john${timestamp}@example.com`, // Email único
        familyProfile: FamilyProfile.SINGLE,
        status: true,
      },
    });

    await request(app.server)
      .delete(`/api/v1/clients/${client.id}`)
      .expect(204);

    // Verify deletion
    await request(app.server)
      .get(`/api/v1/clients/${client.id}`)
      .expect(404);
  });
});
