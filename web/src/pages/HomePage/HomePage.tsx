import { useLazyQuery } from '@apollo/client'
import { Ticket } from 'lucide-react'
import { FindRoomByOtp, FindRoomByOtpVariables } from 'types/graphql'

import { useForm, Controller } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Room/RoomByOtpCell/RoomByOtpCell'
import { Button } from 'src/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'src/components/ui/card'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from 'src/components/ui/input-otp'
import { Label } from 'src/components/ui/label'

type FormValues = {
  code: string
}
const HomePage = () => {
  const formMethods = useForm<FormValues>({
    defaultValues: {
      code: '',
    },
  })
  const [query, { loading }] = useLazyQuery<
    FindRoomByOtp,
    FindRoomByOtpVariables
  >(QUERY, {
    async onCompleted(res) {
      if (!res.roomByOtp) {
        return toast.error('Código inválido', {
          duration: 3000,
        })
      }
      toast.success('Código validado')

      await new Promise((res) => setTimeout(res, 1000))
      navigate(routes.roomById({ id: res.roomByOtp.id }))
    },
    onError(error) {
      toast(error.message)
    },
  })

  const code = formMethods.watch('code')

  const onSubmit = (data: FormValues) => {
    query({
      variables: {
        otp: data.code,
      },
    })
  }

  return (
    <>
      <Metadata title="Mystery" description="Mystery box" />
      <Card className="grid grid-cols-6">
        <div className="col-span-6 lg:col-span-4 ">
          <CardHeader>
            <CardTitle>Você está quase lá!</CardTitle>
            <CardDescription>
              Use a sequência dos códigos que você recebeu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={formMethods.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div className="mx-auto grid gap-2">
                  <Controller
                    control={formMethods.control}
                    name="code"
                    render={({ field }) => (
                      <>
                        <Label htmlFor="code">Adicione seu código</Label>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPGroup>
                              <InputOTPGroup>
                                <InputOTPSlot index={0} className="bg-white" />
                                <InputOTPSlot index={1} className="bg-white" />
                              </InputOTPGroup>
                              <InputOTPSeparator />
                              <InputOTPGroup>
                                <InputOTPSlot index={2} className="bg-white" />
                                <InputOTPSlot index={3} className="bg-white" />
                              </InputOTPGroup>
                              <InputOTPSeparator />
                              <InputOTPGroup>
                                <InputOTPSlot index={4} className="bg-white" />
                                <InputOTPSlot index={5} className="bg-white" />
                              </InputOTPGroup>
                            </InputOTPGroup>
                          </InputOTPGroup>
                        </InputOTP>
                      </>
                    )}
                  />
                </div>
                <div>
                  <Button
                    disabled={loading || code?.length < 6}
                    className="w-full"
                  >
                    Desvendar
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </div>
        <Card className="col-span-6 flex h-full flex-col items-center justify-center rounded-t-none bg-gradient-to-r from-violet-500 to-fuchsia-500  py-6 text-white md:rounded-t-lg lg:col-span-2 lg:rounded-l-none">
          <Ticket size={48} />
          <CardDescription className="text-white">...</CardDescription>
        </Card>
      </Card>
    </>
  )
}

export default HomePage
