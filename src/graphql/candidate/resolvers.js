import Candidate from './model';
import Email from '../email/model';

export default {
  Query: {
    candidates: async () => Candidate.findAll(),
    candidate: async (context, { id }) => Candidate.findById(id),
  },
  Mutation: {
    createCandidate: async function (context, { create }) {
      return Candidate.create(create);
    },
    updateCandidate: async function (context, { id, update }) {
      return Candidate.update(id, update);
    }, 
  },
  Candidate: {
    emails: async function ({ id: candidateId }) {
      return Email.findAll({ where: { candidateId } });
    },
  },
};