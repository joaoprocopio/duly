import { Outlet } from "@remix-run/react"

export default function LandingLayout() {
  return (
    <>
      <header>landing header</header>

      <main>
        <Outlet />
      </main>
    </>
  )
}
