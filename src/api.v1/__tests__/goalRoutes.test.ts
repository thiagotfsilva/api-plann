import { buildApp } from 'app';
import { FamilyProfile } from 'domain/client/enum/familyProfile';
import { GoalType } from 'domain/goal/enum/goalType';
import { UserRole } from 'domain/user/enums/userRole';
import { FastifyInstance } from 'fastify';
import { PrismaClient } from 'infrastructure/database/generated/prisma';
import request from 'supertest';

const prisma = new PrismaClient();
let app: FastifyInstance;
let user: any;
let client: any;

beforeAll(async () => {
  app = buildApp();
  await app.ready();
});

beforeEach(async () => {
  // ✅ ORDEM CORRETA: deleta na ordem inversa das dependências
  await prisma.goal.deleteMany();
  await prisma.client.deleteMany();
  await prisma.user.deleteMany();

  // ✅ Usar timestamp para garantir emails únicos
  const timestamp = Date.now();

  user = await prisma.user.create({
    data: {
      name: 'user test',
      email: `usertest${timestamp}@email.com`, // Email único
      password: '12345',
      role: UserRole.ADVISOR,
    },
  });

  client = await prisma.client.create({
    data: {
      advisorId: user.id,
      age: 30,
      name: 'John Doe',
      email: `john${timestamp}@example.com`, // Email único
      familyProfile: FamilyProfile.SINGLE,
      status: true,
    },
  });
});

afterAll(async () => {

  await prisma.$disconnect();

  if (app) {
    await app.close();
  }
}, 15000); // Aumentar timeout

describe('Goal Routes', () => {
  it('Should create a new goal', async () => {
    const goalData = {
      clientId: client.id,
      type: GoalType.MEDIUM_TERM,
      targetValue: 50000,
      targetDate: '2027-06-15T00:00:00-03:00',
    };

    const res = await request(app.server)
      .post('/api/v1/goals')
      .send(goalData)
      .expect(201);

    expect(res.body).toHaveProperty('id');
    expect(res.body.clientId).toBe(goalData.clientId);
    expect(res.body.type).toBe(goalData.type);
  });

  it('should get a goal by id', async () => {
    const goal = await prisma.goal.create({
      data: {
        clientId: client.id,
        type: GoalType.MEDIUM_TERM,
        targetValue: 50000,
        targetDate: '2027-06-15T00:00:00-03:00',
      },
    });

    const res = await request(app.server)
      .get(`/api/v1/goals/${goal.id}`)
      .expect(200);

    expect(res.body).toHaveProperty('id', goal.id);
    expect(res.body.clientId).toBe(goal.clientId);
    expect(res.body.targetValue).toBe(goal.targetValue);
  });

  it('should list goals', async () => {
    const goal = await prisma.goal.create({
      data: {
        clientId: client.id,
        type: GoalType.MEDIUM_TERM,
        targetValue: 50000,
        targetDate: '2027-06-15T00:00:00-03:00',
      },
    });

    const res = await request(app.server)
      .get(`/api/v1/goals/client/${goal.clientId}`)
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(1);
  });

  it('should update a goal', async () => {
    const goal = await prisma.goal.create({
      data: {
        clientId: client.id,
        type: GoalType.MEDIUM_TERM,
        targetValue: 50000,
        targetDate: '2027-06-15T00:00:00-03:00',
      },
    });

    const updateData = {
      targetValue: 100000,
      targetDate: '2028-06-15T00:00:00-03:00',
    };

    const res = await request(app.server)
      .put(`/api/v1/goals/${goal.id}`)
      .send(updateData)
      .expect(200);

    expect(res.body.targetValue).toBe(updateData.targetValue);
  });

  it('should delete a goal', async () => {
    const goal = await prisma.goal.create({
      data: {
        clientId: client.id,
        type: GoalType.MEDIUM_TERM,
        targetValue: 50000,
        targetDate: '2027-06-15T00:00:00-03:00',
      },
    });

    await request(app.server)
      .delete(`/api/v1/goals/${goal.id}`)
      .expect(204);

    // Verify deletion
    await request(app.server)
      .get(`/api/v1/goals/${goal.id}`)
      .expect(404);
  });
});
