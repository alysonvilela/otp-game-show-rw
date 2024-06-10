export const schema = gql`
  type Room {
    id: String!
    slug: String!
    otp: String!
    title: String!
    meta: String!
    Author: Author
    author_id: String
  }

  type Query {
    rooms: [Room!]! @requireAuth
    room(id: String!): Room @requireAuth
  }

  input CreateRoomInput {
    slug: String!
    otp: String!
    title: String!
    meta: String!
    author_id: String
  }

  input UpdateRoomInput {
    slug: String
    otp: String
    title: String
    meta: String
    author_id: String
  }

  type Mutation {
    createRoom(input: CreateRoomInput!): Room! @requireAuth
    updateRoom(id: String!, input: UpdateRoomInput!): Room! @requireAuth
    deleteRoom(id: String!): Room! @requireAuth
  }
`
