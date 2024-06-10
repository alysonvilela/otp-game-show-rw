import type {
  FindRoomByIdQuery,
  FindRoomByIdQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'src/components/ui/card'

import Room from '../Room/Room'

export const QUERY: TypedDocumentNode<
  FindRoomByIdQuery,
  FindRoomByIdQueryVariables
> = gql`
  query FindRoomByIdQuery($id: String!) {
    room: room(id: $id) {
      id
      title
      meta
      author_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<FindRoomByIdQuery>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  room,
}: CellSuccessProps<FindRoomByIdQuery, FindRoomByIdQueryVariables>) => {
  const meta = JSON.parse(room.meta)
  return (
    <div>
      <CardTitle>Agora é com você!</CardTitle>
      <CardDescription className="pb-4">
        Desvende o seguinte mistério
      </CardDescription>
      <Card>
        <CardHeader>{room.title}</CardHeader>
        <CardContent>{JSON.stringify(meta, null, 2)}</CardContent>
      </Card>
    </div>
  )
}
