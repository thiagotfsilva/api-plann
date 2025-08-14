import { User } from 'domain/user/entity/user';
import { UserRepository } from 'domain/user/repository/userRepository';
import { prisma } from 'infrastructure/database/prisma/prisma';
import { UserRole } from 'domain/user/enums/userRole';

export class PrismaUserRespository implements UserRepository {
  async create(user: User): Promise<User> {
    const userCreated = await prisma.user.create({
      data: {
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      },
    });

    return new User(
      userCreated.name,
      userCreated.email,
      userCreated.password,
      userCreated.role as UserRole,
      userCreated.id, // Passe o id
      userCreated.createdAt, // Passe createdAt
      userCreated.updatedAt // Passe updatedAt
    );
  }
}
