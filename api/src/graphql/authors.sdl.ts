export const schema = gql`
  type Author {
    id: String!
    nick_name: String!
    Room: [Room]!
  }

  type Query {
    authors: [Author!]! @requireAuth
    author(id: String!): Author @requireAuth
  }

  input CreateAuthorInput {
    nick_name: String!
  }

  input UpdateAuthorInput {
    nick_name: String
  }

  type Mutation {
    createAuthor(input: CreateAuthorInput!): Author! @requireAuth
    updateAuthor(id: String!, input: UpdateAuthorInput!): Author! @requireAuth
    deleteAuthor(id: String!): Author! @requireAuth
  }
`
