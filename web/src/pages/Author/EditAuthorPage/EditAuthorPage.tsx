import EditAuthorCell from 'src/components/Author/EditAuthorCell'

type AuthorPageProps = {
  id: string
}

const EditAuthorPage = ({ id }: AuthorPageProps) => {
  return <EditAuthorCell id={id} />
}

export default EditAuthorPage
