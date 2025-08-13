import { PrismaClientRepository } from "infrastructure/repositories/prismaClientRepository";
import { ClientService } from "./clientService";

export function makeClientServiceFactory(): ClientService {
  const prismaCLientRepository = new PrismaClientRepository()
  return new ClientService(prismaCLientRepository);
}
