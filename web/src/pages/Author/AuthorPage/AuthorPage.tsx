import AuthorCell from 'src/components/Author/AuthorCell'

type AuthorPageProps = {
  id: string
}

const AuthorPage = ({ id }: AuthorPageProps) => {
  return <AuthorCell id={id} />
}

export default AuthorPage
