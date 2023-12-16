import { AppShellMain } from "@mantine/core"
import { Outlet } from "@remix-run/react"

import { AppHeader } from "~/components"

export default function AppLayout() {
  return (
    <>
      <AppHeader />

      <AppShellMain>
        <Outlet />
      </AppShellMain>
    </>
  )
}
