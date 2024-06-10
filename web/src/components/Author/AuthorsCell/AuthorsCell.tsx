import type { FindAuthors, FindAuthorsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Authors from 'src/components/Author/Authors'

export const QUERY: TypedDocumentNode<FindAuthors, FindAuthorsVariables> = gql`
  query FindAuthors {
    authors {
      id
      nick_name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No authors yet. '}
      <Link to={routes.newAuthor()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindAuthors>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  authors,
}: CellSuccessProps<FindAuthors, FindAuthorsVariables>) => {
  return <Authors authors={authors} />
}
