import { Link } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/dist/toast'

import { Button } from 'src/components/ui/button'
import { Card, CardContent } from 'src/components/ui/card'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'

type HomeLayoutProps = {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 800,
        }}
      />
      <div className="bg-gradient-to-r from-violet-700/10 to-fuchsia-900/10 min-h-screen flex justify-center items-center">
        {children}
      </div>
    </>
  )
}

export default HomeLayout
