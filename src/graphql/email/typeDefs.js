export default `
  type Email {
    id: Int!
    candidateId: Int!
    address: String!
    isBad: Boolean!
  }

  extend type Query {
    emails: [Email]
    email(id: Int!): Email
  }

  input EmailUpdate {
    candidateId: Int
    address: String
    isBad: Boolean
  }

  input EmailCreate {
    candidateId: Int!
    address: String!
    isBad: Boolean
  }

  input EmailChainCreate {
    address: String!
    isBad: Boolean
  }

  extend type Mutation {
    createEmail(create: EmailCreate): Email
    updateEmail(id: Int!, update: EmailUpdate): Email
  }
`;