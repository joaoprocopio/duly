import { AppShellMain } from "@mantine/core"
import { Outlet } from "@remix-run/react"

export default function LandingLayout() {
  return (
    <AppShellMain>
      <Outlet />
    </AppShellMain>
  )
}
