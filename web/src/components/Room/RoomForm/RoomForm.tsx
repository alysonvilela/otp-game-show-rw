import type { EditRoomById, UpdateRoomInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormRoom = NonNullable<EditRoomById['room']>

interface RoomFormProps {
  room?: EditRoomById['room']
  onSave: (data: UpdateRoomInput, id?: FormRoom['id']) => void
  error: RWGqlError
  loading: boolean
}

const RoomForm = (props: RoomFormProps) => {
  const onSubmit = (data: FormRoom) => {
    props.onSave(data, props?.room?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormRoom> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="slug"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slug
        </Label>

        <TextField
          name="slug"
          defaultValue={props.room?.slug}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="otp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Otp
        </Label>

        <TextField
          name="otp"
          defaultValue={props.room?.otp}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="otp" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.room?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="meta"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Meta
        </Label>

        <TextField
          name="meta"
          defaultValue={props.room?.meta}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="meta" className="rw-field-error" />

        <Label
          name="author_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author id
        </Label>

        <TextField
          name="author_id"
          defaultValue={props.room?.author_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="author_id" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RoomForm
