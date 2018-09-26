import loadEmailsByCandidateId from './email/loaders/byCandidateId';

export default function loaders(context) {
  return {
    emails: {
      byCandidateId: loadEmailsByCandidateId(context),
    },
  };
}