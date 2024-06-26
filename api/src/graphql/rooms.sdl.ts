export const schema = gql`
  type Room {
    id: String!
    otp: String!
    title: String!
    meta: String!
    Author: Author
    author_id: String
  }

  type Query {
    rooms: [Room!]! @requireAuth
    room(id: String!): Room @requireAuth
    roomByOtp(otp: String!): Room @requireAuth
  }

  input CreateRoomInput {
    otp: String!
    title: String!
    meta: String!
    author_id: String
  }

  input UpdateRoomInput {
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
