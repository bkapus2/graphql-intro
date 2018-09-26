import Email from './model';

export default {
  Query: {
    emails: async () => Email.findAll(),
    email: async (context, { id }) => Email.findById(id),
  },
  Mutation: {
    createEmail: async function (context, { create }) {
      return Email.create(create);
    },
    updateEmail: async function (context, { id, update }) {
      return Email.update(id, update);
    }, 
  },
  Email: {},
};