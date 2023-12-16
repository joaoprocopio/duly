import { ActionIcon, AppShellHeader, AppShellMain, Container } from "@mantine/core"
import { Link, Outlet } from "@remix-run/react"
import { IconHexagons } from "@tabler/icons-react"
import styles from "./_landing.module.scss"

export default function LandingLayout() {
  return (
    <>
      <AppShellHeader className={styles.header}>
        <Container className={styles.hContainer} py="0">
          <ActionIcon component={Link} to="/" size="xl" variant="transparent">
            <IconHexagons height="100%" width="100%" />
          </ActionIcon>
        </Container>
      </AppShellHeader>

      <AppShellMain>
        <Outlet />
      </AppShellMain>
    </>
  )
}
