import type { Exact, FindRoomByOtp, Scalars } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Room from 'src/components/Room/Room'

export type FindRoomByOtpVariables = Exact<{
  otp: Scalars['String']
}>

export const beforeQuery = ({ otp }: { otp: string }) => {
  return {
    variables: { otp },
  }
}

export const QUERY: TypedDocumentNode<
  FindRoomByOtp,
  FindRoomByOtpVariables
> = gql`
  query FindRoomByOtp($otp: String!) {
    roomByOtp: roomByOtp(otp: $otp) {
      id
      otp
      title
      meta
      author_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  navigate(routes.home())
  return <div>Room not found</div>
}

export const Failure = ({
  error,
}: CellFailureProps<FindRoomByOtpVariables>) => {
  return <div className="rw-cell-error">{error?.message}</div>
}

export const Success = ({
  roomByOtp,
}: CellSuccessProps<FindRoomByOtp, FindRoomByOtpVariables>) => {
  return <Room room={roomByOtp} />
}
