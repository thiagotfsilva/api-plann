import dotenv from 'dotenv';
dotenv.config();

import { userRouter } from 'api.v1/routes/userRoutes';
import { usersSchemas } from 'api.v1/schemas/userSchema';
import { clientRouter } from 'api.v1/routes/clientRoutes';
import Fastify from 'fastify';
import { clientSchemas } from 'api.v1/schemas/clientSchema';

export function buildApp() {
  const app = Fastify({ logger: true });

  for (const schema of [...usersSchemas, clientSchemas]) {
    app.addSchema(schema);
  }

  app.get('/hello', (_req, reply) => {
    reply.send({ message: 'hello dear!' });
  });

  app.register(userRouter, { prefix: 'api/v1/users' });
  app.register(clientRouter, { prefix: 'api/v1/clients' });

  app.setErrorHandler((error, _request, reply) => {
    reply.code(500).send({ message: error.message });
  });

  return app;
}
