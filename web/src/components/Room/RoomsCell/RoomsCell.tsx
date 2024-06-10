import type { FindRooms, FindRoomsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Rooms from 'src/components/Room/Rooms'

export const QUERY: TypedDocumentNode<FindRooms, FindRoomsVariables> = gql`
  query FindRooms {
    rooms {
      id
      slug
      otp
      title
      meta
      author_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No rooms yet. '}
      <Link to={routes.newRoom()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindRooms>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  rooms,
}: CellSuccessProps<FindRooms, FindRoomsVariables>) => {
  return <Rooms rooms={rooms} />
}
