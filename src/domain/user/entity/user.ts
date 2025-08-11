import { UserRole } from '../enums/userRole';

export class User {
  constructor(
    private name: string,
    private email: string,
    private password: string,
    private role: UserRole,
    private id?: string,         // Adicione como opcional
    private createdAt?: Date,    // Adicione como opcional
    private updatedAt?: Date     // Adicione como opcional
  ) {}

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getRole(): UserRole {
    return this.role;
  }

  getId(): string | undefined {
    return this.id;
  }

  getCreatedAt(): Date | undefined {
    return this.createdAt;
  }

  getUpdatedAt(): Date | undefined {
    return this.updatedAt;
  }
}
