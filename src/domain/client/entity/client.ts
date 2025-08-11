import { FamilyProfile } from "../enum/familyProfile";

export class Client {
  constructor(
    private name: string,
    private email: string,
    private age: number,
    private status: boolean,
    private familyProfile: FamilyProfile,
    private id?: string,         // Adicione como opcional
    private createdAt?: Date,    // Adicione como opcional
    private updatedAt?: Date
  ) {}

  getName(): string {
    return this.name;
  }

  getStatus(): boolean {
    return this.status;
  }

  getAge(): number {
    return this.age;
  }

  getEmail(): string {
    return this.email;
  }

  getFamilyProfile(): FamilyProfile {
    return this.familyProfile;
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
