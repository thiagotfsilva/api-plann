import { CreateUserDto } from 'api.v1/schemas/userSchema';
import { UserService } from 'application/userService';
import { FastifyReply, FastifyRequest } from 'fastify';

export class UserController {
  constructor(private userService: UserService) {}

  async createUser(
    req: FastifyRequest<{ Body: CreateUserDto }>,
    reply: FastifyReply
  ) {
    try {
      const res = await this.userService.createUser(req.body);
      reply.status(201).send(res);
    } catch (error) {
      reply.status(500).send({ message: (error as Error).message });
    }
  }
}
