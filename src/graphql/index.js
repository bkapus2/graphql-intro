import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs as candidateTypeDefs, resolvers as candidateResolvers } from './candidate';
import { typeDefs as emailTypeDefs, resolvers as emailResolvers } from './email';

const rootTypeDefs = `
  type Query {
    _empty: String
  }
  type Mutation {
    empty_: String
  }
`;

const rootResolvers = {};

export default makeExecutableSchema({
  typeDefs: [
    rootTypeDefs,
    emailTypeDefs,
    candidateTypeDefs,
  ],
  resolvers: [
    rootResolvers,
    emailResolvers,
    candidateResolvers,
  ],
});

