import { CreateUserDto, ResponseUserDto } from "api.v1/schemas/userSchema";
import { User } from "../domain/user/entity/user";
import { UserRepository } from "../domain/user/repository/userRepository";
import { UserRole } from "../domain/user/enums/userRole";
import { hash } from 'bcrypt';

export class UserService {

  constructor(private readonly userRepository: UserRepository) {}

  async createUser(dto: CreateUserDto): Promise<ResponseUserDto> {
    const hashPassword = await hash(dto.password, 12);
    const user = await this.userRepository.create(new User(
      dto.name,
      dto.email,
      hashPassword,
      dto.role as UserRole
    ));

    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt(),
    } as ResponseUserDto;
  }
}
