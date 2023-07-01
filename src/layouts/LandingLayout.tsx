import { Outlet } from 'react-router-dom'

export function LandingLayout() {
  return (
    <>
      <header>i am a header</header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
