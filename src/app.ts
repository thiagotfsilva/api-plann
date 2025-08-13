import dotenv from 'dotenv';
dotenv.config();

import { userRouter } from 'api.v1/routes/userRoutes';
import { usersSchemas } from 'api.v1/schemas/userSchema';
import { clientRouter } from 'api.v1/routes/clientRoutes';
import Fastify from 'fastify';
import { clientSchemas } from 'api.v1/schemas/clientSchema';

export function buildApp() {
  const app = Fastify({ logger: true });

  const allSchemas = [...usersSchemas, ...clientSchemas];

  for (const schema of allSchemas) {
    // Verifica se o schema tem $id antes de adicionar
    if (schema && schema.$id) {
      try {
        app.addSchema(schema);
      } catch (error) {
        console.warn(`Erro ao adicionar schema ${schema.$id}:`, error);
      }
    } else {
      console.warn('Schema sem $id encontrado:', schema);
    }
  }

  app.get('/hello', (_req, reply) => {
    reply.send({ message: 'hello dear!' });
  });

  app.register(userRouter, { prefix: 'api/v1/users' });
  app.register(clientRouter, { prefix: 'api/v1/clients' });

  app.setErrorHandler((error, _request, reply) => {
    app.log.error(error);

    if (error instanceof Fastify.errorCodes.FST_ERR_NOT_FOUND || error.statusCode === 404) {
      return reply.code(404).send({
        message: error.message,
      });
    }

    if (error instanceof Fastify.errorCodes.FST_ERR_VALIDATION || error.statusCode === 400) {
      return reply.code(400).send({
        message: error.message,
      });
    }

    return reply.code(500).send({ message: error.message });
  });

  return app;
}
