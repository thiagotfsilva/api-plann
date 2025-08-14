import { CreateClientDto, ResponseClientDto, UpdateClientDto } from 'api.v1/schemas/clientSchema';
import { makeClientServiceFactory } from 'application/client/clientFactory';
import { FastifyReply, FastifyRequest } from 'fastify';

export class ClientController {
  async createCLient(
    req: FastifyRequest<{ Body: CreateClientDto }>,
    reply: FastifyReply
  ) {
    const clientService = makeClientServiceFactory();
    const client = await clientService.createClient(req.body);
    return reply.status(201).send(client);
  }

  async listClients(_req: FastifyRequest, reply: FastifyReply) {
    const clientService = makeClientServiceFactory();
    const clients = await clientService.findAll();
    return reply.status(200).send(clients);
  }

  async getClientById(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    const { id } = req.params;
    const clientService = makeClientServiceFactory();
    const client = await clientService.findById(id);
    return reply.status(200).send(client);
  }

  async updateClient(
    req: FastifyRequest<{ Params: { id: string }; Body: UpdateClientDto }>,
    reply: FastifyReply
  ) {
    const { id } = req.params;
    const dto = req.body;
    const clientService = makeClientServiceFactory();
    const client = await clientService.update(id, dto);
    return reply.status(200).send(client);
  }

  async deleteClient(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    const { id } = req.params;
    const clientService = makeClientServiceFactory();
    await clientService.delete(id)
    return reply.status(204).send();
  }
}
