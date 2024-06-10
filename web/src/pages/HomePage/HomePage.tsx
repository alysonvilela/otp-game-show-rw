import { useForm, Controller } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { Button } from 'src/components/ui/button'
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
  const formMethods = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    navigate(routes.roomByOtp({ otp: data.code }))
  }
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <div className="grid gap-2 text-center">
        <h1 className="text-2xl font-bold">Parabéns, você está quase lá!</h1>
        <p className="text-balance text-muted-foreground">
          Use a sequência dos códigos que você recebeu
        </p>
      </div>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-2 mx-auto">
            <Controller
              control={formMethods.control}
              name="code"
              render={({ field }) => (
                <>
                  <Label htmlFor="code">Adicione seu código</Label>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTPGroup>
                  </InputOTP>
                </>
              )}
            />
          </div>
          <div>
            <Button className="w-full">Entrar na sala</Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default HomePage
