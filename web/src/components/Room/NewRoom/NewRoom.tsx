import type {
  CreateRoomMutation,
  CreateRoomInput,
  CreateRoomMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RoomForm from 'src/components/Room/RoomForm'

const CREATE_ROOM_MUTATION: TypedDocumentNode<
  CreateRoomMutation,
  CreateRoomMutationVariables
> = gql`
  mutation CreateRoomMutation($input: CreateRoomInput!) {
    createRoom(input: $input) {
      id
    }
  }
`

const NewRoom = () => {
  const [createRoom, { loading, error }] = useMutation(CREATE_ROOM_MUTATION, {
    onCompleted: () => {
      toast.success('Room created')
      navigate(routes.home())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = ({ meta, otp, title, author_id }: CreateRoomInput) => {
    createRoom({
      variables: {
        input: {
          meta,
          title,
          author_id,
          otp: String(otp),
        },
      },
    })
  }

  console.log(error)
  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Room</h2>
      </header>
      <div className="rw-segment-main">
        <RoomForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRoom
