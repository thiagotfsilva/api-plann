import Fastify from 'fastify';

const app = Fastify({
    logger: true
})

app.listen({port: 3000}, () => console.log('App is runnings'))

