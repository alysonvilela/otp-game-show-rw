import type {
  DeleteRoomMutation,
  DeleteRoomMutationVariables,
  FindRoomByIdQuery,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_ROOM_MUTATION: TypedDocumentNode<
  DeleteRoomMutation,
  DeleteRoomMutationVariables
> = gql`
  mutation DeleteRoomMutation($id: String!) {
    deleteRoom(id: $id) {
      id
    }
  }
`

interface Props {
  room: NonNullable<FindRoomByIdQuery['room']>
}

const Room = ({ room }: Props) => {
  const [deleteRoom] = useMutation(DELETE_ROOM_MUTATION, {
    onCompleted: () => {
      toast.success('Room deleted')
      navigate(routes.home())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteRoomMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete room ' + id + '?')) {
      deleteRoom({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Room {room.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{room.id}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{room.slug}</td>
            </tr>
            <tr>
              <th>Otp</th>
              <td>{room.otp}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{room.title}</td>
            </tr>
            <tr>
              <th>Meta</th>
              <td>{room.meta}</td>
            </tr>
            <tr>
              <th>Author id</th>
              <td>{room.author_id}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRoom({ id: room.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(room.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Room
