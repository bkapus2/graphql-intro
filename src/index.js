import { ApolloServer } from 'apollo-server-hapi';
import Hapi from 'hapi';
import schema from './graphql';
import loaders from './graphql/loaders';

const config = {
  server: {
    port: 4000,
  },
};

async function startServer() {
  const server = new ApolloServer({
    schema,
    context: async (context) => Promise.resolve({ loaders: loaders(context) }),
  });

  const app = new Hapi.server(config.server);
  await server.applyMiddleware({
    app,
  });
  await server.installSubscriptionHandlers(app.listener);
  await app.start();
  console.log('server up'); // eslint-disable-line no-console
}

startServer().catch(error => {
  console.log(error.stack); // eslint-disable-line no-console
});