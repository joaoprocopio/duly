import { ActionIcon, AppShellHeader, AppShellMain, Button, Container } from "@mantine/core"
import { Link, Outlet } from "@remix-run/react"
import { IconChevronRight, IconHexagons } from "@tabler/icons-react"
import "./_landing.scss"

export default function LandingLayout() {
  return (
    <>
      <AppShellHeader className="landing-layout-header">
        <Container className="lyh-container" py="0">
          <ActionIcon
            className="lyhc-button"
            component={Link}
            size="xl"
            to="/"
            variant="transparent">
            <IconHexagons />
          </ActionIcon>

          <Button component={Link} variant="light" to="/auth" rightSection={<IconChevronRight />}>
            Entrar
          </Button>
        </Container>
      </AppShellHeader>

      <AppShellMain>
        <Outlet />
      </AppShellMain>
    </>
  )
}
