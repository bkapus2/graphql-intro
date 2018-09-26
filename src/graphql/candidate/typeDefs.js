export default `
  type Candidate {
    id: Int!
    name: String!
    emails: [Email]
  }

  extend type Query {
    candidates: [Candidate]
    candidate(id: Int!): Candidate
  }

  input CandidateUpdate {
    name: String!
  }

  input CandidateCreate {
    name: String!
    emails: [EmailChainCreate!]
  }

  extend type Mutation {
    createCandidate(create: CandidateCreate): Candidate
    updateCandidate(id: Int!, update: CandidateUpdate): Candidate
  }
`;