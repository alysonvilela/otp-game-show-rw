import RoomCell from 'src/components/Room/RoomByOtpCell'

type RoomPageProps = {
  otp: string
}

const RoomPage = ({ otp }: RoomPageProps) => {
  return <RoomCell otp={otp} />
}

export default RoomPage
