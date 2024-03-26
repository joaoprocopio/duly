import { CheckboxIcon } from "@radix-ui/react-icons"
import { Outlet } from "@remix-run/react"

export default function Auth() {
  return (
    <div className="container grid h-full flex-col items-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative flex items-center text-lg font-medium">
          <CheckboxIcon className="mr-2 h-6 w-6" />
          Duly
        </div>
      </div>
      <div className="p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-8 md:w-96">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
