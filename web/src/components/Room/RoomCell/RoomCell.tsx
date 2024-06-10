import type { FindRoomById, FindRoomByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Room from 'src/components/Room/Room'

export const QUERY: TypedDocumentNode<
  FindRoomById,
  FindRoomByIdVariables
> = gql`
  query FindRoomById($id: String!) {
    room: room(id: $id) {
      id
      title
      meta
      author_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Room not found</div>

export const Failure = ({ error }: CellFailureProps<FindRoomByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  room,
}: CellSuccessProps<FindRoomById, FindRoomByIdVariables>) => {
  return <Room room={room} />
}
