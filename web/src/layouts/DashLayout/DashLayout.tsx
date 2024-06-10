import { CardTitle } from 'src/components/ui/card'

type DashLayoutProps = {
  children?: React.ReactNode
}

const DashLayout = ({ children }: DashLayoutProps) => {
  return (
    <section className="bg-slate-100/20 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl py-4">
          <CardTitle>m.dash</CardTitle>
        </div>
      </header>
      <section className="p-6 mx-auto max-w-5xl pt-16">{children}</section>
    </section>
  )
}

export default DashLayout
