import { ApolloServer, gql } from 'apollo-server-hapi';
import Hapi from 'hapi';
import schema from './graphql';

const config = {
  server: {
    port: 4000,
  },
};

async function startServer() {
  const server = new ApolloServer({
    schema,
    context: async () => Promise.resolve({ request: 'request' }),
  });

  const app = new Hapi.server(config.server);
  await server.applyMiddleware({
    app,
  });
  await server.installSubscriptionHandlers(app.listener);
  await app.start();
  console.log('server up');
}

startServer().catch(error => console.log(error.stack));