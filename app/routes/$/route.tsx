import { ActionIcon, Anchor, AppShellMain, Card, Container, Title } from "@mantine/core"
import { Link } from "@remix-run/react"
import { IconArrowBackUp } from "@tabler/icons-react"
import "./$.css"

import { AppHeader } from "~/components"

export default function ErrorPage() {
  return (
    <>
      <AppHeader />

      <AppShellMain className="error-page-main">
        <Container>
          <Card className="epm-card">
            <ActionIcon
              className="epmc-icon"
              component={Link}
              to="/"
              variant="transparent"
              size="xl">
              <IconArrowBackUp />
            </ActionIcon>

            <Title className="epmc-title" size="larger">
              Página não encontrada
            </Title>

            <Anchor className="epmc-link" component={Link} to="/">
              Ir para a página inicial
            </Anchor>
          </Card>
        </Container>
      </AppShellMain>
    </>
  )
}
