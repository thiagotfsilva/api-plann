import dotenv from 'dotenv';

dotenv.config();
import { userRouter } from 'api.v1/routes/userRoutes';
import { usersSchemas } from 'api.v1/schemas/userSchema';
import Fastify from 'fastify';

const app = Fastify({ logger: true });

/* app.register(fastifyCors) */

for (const schema of [...usersSchemas]) {
  app.addSchema(schema);
}

app.get('/hello', (request, reply) => {
  reply.send({ message: 'hello dear!' });
});

app.register(userRouter, { prefix: 'api/v1/users' });

app.setErrorHandler((error, _request, reply) => {
  reply.code(500).send({ message: error.message });
});

const port = 3000;

app.listen({ port: port, host: '0.0.0.0' }, () =>
  console.log(`App is runnings in port ${port}`)
);
