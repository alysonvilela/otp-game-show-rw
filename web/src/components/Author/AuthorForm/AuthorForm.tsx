import type { EditAuthorById, UpdateAuthorInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormAuthor = NonNullable<EditAuthorById['author']>

interface AuthorFormProps {
  author?: EditAuthorById['author']
  onSave: (data: UpdateAuthorInput, id?: FormAuthor['id']) => void
  error: RWGqlError
  loading: boolean
}

const AuthorForm = (props: AuthorFormProps) => {
  const onSubmit = (data: FormAuthor) => {
    props.onSave(data, props?.author?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAuthor> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="nick_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nick name
        </Label>

        <TextField
          name="nick_name"
          defaultValue={props.author?.nick_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="nick_name" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AuthorForm
