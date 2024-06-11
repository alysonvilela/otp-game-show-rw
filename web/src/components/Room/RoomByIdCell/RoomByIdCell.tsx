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
  return (
    <div>
      <CardTitle>Agora é com você!</CardTitle>
      <CardDescription className="pb-4">
        Parabéns! Você conseguiu desvendar o mistério
      </CardDescription>
      <Card>
        <CardHeader>{room.title}</CardHeader>
        <CardContent className="font-mono">{room.meta}</CardContent>
      </Card>
    </div>
  )
}
