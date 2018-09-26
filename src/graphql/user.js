import find from 'lodash/find';
import filter from 'lodash/filter';
import { users, emails } from '../data';

export const typeDefs = `
  type User {
    id: Int!
    username: String!
    emails: [Email!]!
  }

  extend type Query {
    users: [User]
    user(id: Int!): User
  }

  input UserUpdate {
    username: String
  }

  extend type Mutation {
    updateUser(id: Int!, update: UserUpdate): User
  }
`;

export const resolvers = {
  Query: {
    users: async () => Promise.resolve(users),
    user: async (context, { id }) => Promise.resolve(find(users, { id })),
  },
  Mutation: {
    updateUser: async function (context, { id, update }) {
      const user = find(users, {id});
      if (user) {
        Object.assign(user, update);
        return Promise.resolve(user);
      } else {
        throw new Error('Unable to find user');
      }
    }, 
  },
  User: {
    emails: async ({ id: userId }) => Promise.resolve(filter(emails, { userId })),
  },
};