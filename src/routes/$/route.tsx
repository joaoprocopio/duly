import { ActionIcon, Anchor, AppShellMain, Card, Container, Title } from "@mantine/core"
import { Link } from "@remix-run/react"
import { IconArrowBackUp } from "@tabler/icons-react"
import styles from "./not-found-route.module.css"

export default function ErrorRoute() {
  return (
    <AppShellMain>
      <Container className={styles.notFoundRoute}>
        <Card className={styles.nfrCard}>
          <ActionIcon
            className={styles.nfrcIcon}
            component={Link}
            to="/"
            variant="transparent"
            size="xl">
            <IconArrowBackUp />
          </ActionIcon>

          <Title className={styles.nfrcTitle} size="larger">
            Página não encontrada
          </Title>

          <Anchor className={styles.nfrcLink} component={Link} to="/">
            Ir para a página inicial
          </Anchor>
        </Card>
      </Container>
    </AppShellMain>
  )
}
