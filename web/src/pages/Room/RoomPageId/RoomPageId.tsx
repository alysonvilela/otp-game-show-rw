import RoomCell from 'src/components/Room/RoomByIdCell'

type RoomByIdPageProps = {
  id: string
}

const RoomByIdPage = ({ id }: RoomByIdPageProps) => {
  return <RoomCell id={id} />
}

export default RoomByIdPage
