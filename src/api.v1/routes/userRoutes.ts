import { UserController } from 'api.v1/controllers/UserController';
import { $ref } from 'api.v1/schemas/userSchema';
import { UserService } from 'application/userService';
import { FastifyInstance } from 'fastify';
import { PrismaUserRespository } from 'infrastructure/repositories/prismaUserRepository';

const userRepository = new PrismaUserRespository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export const userRouter = async (app: FastifyInstance) => {
  app.post(
    '/',
    {
      schema: {
        body: $ref('createUserSchema'),
        response: { 201: $ref('responseUserSchema') },
      },
    },
    userController.createUser.bind(userController) // <-- Corrigido aqui
  );

  return app;
};
