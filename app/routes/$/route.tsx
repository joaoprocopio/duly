import { ActionIcon, Anchor, AppShellMain, Card, Container, Title } from "@mantine/core"
import { Link } from "@remix-run/react"
import { IconArrowBackUp } from "@tabler/icons-react"
import "./$.css"

import { AppHeader } from "~/components"

export default function ErrorRoute() {
  return (
    <>
      <AppHeader />

      <AppShellMain>
        <Container className="error-route">
          <Card className="er-card">
            <ActionIcon
              className="erc-icon"
              component={Link}
              to="/"
              variant="transparent"
              size="xl">
              <IconArrowBackUp />
            </ActionIcon>

            <Title className="erc-title" size="larger">
              Página não encontrada
            </Title>

            <Anchor className="erc-link" component={Link} to="/">
              Ir para a página inicial
            </Anchor>
          </Card>
        </Container>
      </AppShellMain>
    </>
  )
}
