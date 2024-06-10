import type { FindAuthorById, FindAuthorByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Author from 'src/components/Author/Author'

export const QUERY: TypedDocumentNode<
  FindAuthorById,
  FindAuthorByIdVariables
> = gql`
  query FindAuthorById($id: String!) {
    author: author(id: $id) {
      id
      nick_name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Author not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindAuthorByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  author,
}: CellSuccessProps<FindAuthorById, FindAuthorByIdVariables>) => {
  return <Author author={author} />
}
