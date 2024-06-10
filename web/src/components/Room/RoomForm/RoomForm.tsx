import type { EditRoomById, UpdateRoomInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  Controller,
  useForm,
} from '@redwoodjs/forms'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from 'src/components/ui/input-otp'

type FormRoom = NonNullable<EditRoomById['room']>

interface RoomFormProps {
  room?: EditRoomById['room']
  onSave: (data: UpdateRoomInput, id?: FormRoom['id']) => void
  error: RWGqlError
  loading: boolean
}

const RoomForm = (props: RoomFormProps) => {
  const formMethods = useForm<FormRoom>({
    defaultValues: {
      otp: '',
      title: props.room?.title,
      meta: props.room?.meta,
      author_id: props.room?.author_id,
    },
  })
  const onSubmit = (data: FormRoom) => {
    props.onSave(data, props?.room?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form formMethods={formMethods} onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <Controller
          control={formMethods.control}
          name="otp"
          render={({ field }) => (
            <>
              <Label
                name="otp"
                className="rw-label pb-2"
                errorClassName="rw-label rw-label-error"
              >
                Código
              </Label>
              <InputOTP maxLength={6} {...field}>
                <InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="bg-white" />
                    <InputOTPSlot index={1} className="bg-white" />
                    <InputOTPSlot index={2} className="bg-white" />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} className="bg-white" />
                    <InputOTPSlot index={4} className="bg-white" />
                    <InputOTPSlot index={5} className="bg-white" />
                  </InputOTPGroup>
                </InputOTPGroup>
              </InputOTP>
            </>
          )}
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
