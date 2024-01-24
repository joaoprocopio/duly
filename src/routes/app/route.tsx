import { AppShellMain } from "@mantine/core"
import { Outlet } from "@remix-run/react"

export default function AppLayout() {
  return (
    <AppShellMain>
      <Outlet />
    </AppShellMain>
  )
}
