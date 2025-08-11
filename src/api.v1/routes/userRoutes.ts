import { UserController } from 'api.v1/controllers/UserController';
import { $ref } from 'api.v1/schemas/userSchema';
import { UserService } from 'application/userService';
import { FastifyInstance } from 'fastify';
import { UserPrismaRespository } from 'infrastructure/repositories/userPrismaRepository';

const userRepository = new UserPrismaRespository();
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
};
