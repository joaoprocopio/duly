import { ActionIcon, Anchor, AppShellMain, Card, Container, Title } from "@mantine/core"
import { Link } from "@remix-run/react"
import { IconArrowBackUp } from "@tabler/icons-react"

import { AppHeader } from "~/components"

export default function AuthLayout() {
  return (
    <>
      <AppHeader />

      <AppShellMain>
        <Container>
          <Card style={{ textAlign: "center" }}>
            <ActionIcon
              component={Link}
              style={{ margin: "0 auto" }}
              variant="transparent"
              size="xl"
              to="/">
              <IconArrowBackUp style={{ width: "100%", height: "100%" }} />
            </ActionIcon>

            <Title size="larger" style={{ marginTop: "var(--mantine-spacing-lg)" }}>
              Página não encontrada
            </Title>

            <Anchor component={Link} style={{ marginTop: "var(--mantine-spacing-md)" }} to="/">
              Ir para a página inicial
            </Anchor>
          </Card>
        </Container>
      </AppShellMain>
    </>
  )
}
