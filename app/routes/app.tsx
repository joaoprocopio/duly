import { Outlet } from "@remix-run/react"

export default function AppLayout() {
  return (
    <>
      <header>app header</header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
