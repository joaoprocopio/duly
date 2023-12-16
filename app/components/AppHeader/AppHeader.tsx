import { ActionIcon, AppShellHeader, Button, Container } from "@mantine/core"
import { Link } from "@remix-run/react"
import { IconChevronRight, IconHexagons } from "@tabler/icons-react"
import "./AppHeader.scss"

export default function AppHeader() {
  return (
    <AppShellHeader className="app-header">
      <Container className="ah-container" py="0">
        <ActionIcon className="ahc-button" component={Link} size="xl" to="/" variant="transparent">
          <IconHexagons />
        </ActionIcon>

        <Button component={Link} variant="light" to="/auth" rightSection={<IconChevronRight />}>
          Entrar
        </Button>
      </Container>
    </AppShellHeader>
  )
}
