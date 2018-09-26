import Candidate from './model';

export default {
  Query: {
    candidates: async () => Candidate.findAll(),
    candidate: async (context, { id }) => Candidate.findById(id),
  },
  Mutation: {
    createCandidate: async function (context, { create }) {
      return Candidate.create(create, {
        include: [
          { association: Candidate.Emails },
        ],
      });
    },
    updateCandidate: async function (context, { id, update }) {
      return Candidate.update(id, update);
    }, 
  },
  Candidate: {
    emails: async function ({ id: candidateId }, args, context) {
      return context.loaders.emails.byCandidateId.load(candidateId);
    },
  },
};