import { ClientController } from 'api.v1/controllers/ClientController';
import { $ref } from 'api.v1/schemas/clientSchema';
import { FastifyInstance } from 'fastify';

const clientController = new ClientController();
export const clientRouter = async (app: FastifyInstance) => {
  app.post(
    '/',
    {
      schema: {
        body: $ref('createClientSchema'),
        response: { 201: $ref('responseClientSchema') },
      },
    },
    clientController.createCLient
  );

  app.get(
    '/',
    {
      schema: {
        response: { 200: $ref('listClientsResponseSchema')},
      }
    },
    clientController.listClients
  );

  app.get(
    '/:id',
    {
      schema: {
        params: $ref('paramsSchema'),
        response: { 200: $ref('responseClientSchema')},
      }
    },
    clientController.getClientById
  );

  app.put(
    '/:id',
    {
      schema: {
        params: $ref('paramsSchema'),
        body: $ref('updateClientSchema'),
        response: { 200: $ref('responseClientSchema')},
      }
    },
    clientController.updateClient
  );

  app.delete(
    '/:id',
    {
      schema: {
        params: $ref('paramsSchema'),
      }
    },
    clientController.deleteClient
  );

  return app;
};
