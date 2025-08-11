import { Client } from "../entity/client";

export interface ClientRepository {
  create(client: Client): Promise<Client>;
  findById(id: string): Promise<Client | null>;
  findAll(): Promise<Client[]>;
  update(id: string, clientData: Partial<Client>): Promise<Client | null>;
  delete(id: string): Promise<void>;
}
