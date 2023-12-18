import { Button, Card, Container, TextInput, Title } from "@mantine/core"
import { Link } from "@remix-run/react"

export default function AuthRoute() {
  return (
    <Container>
      <Card withBorder>
        <Title size="x-large">Seja bem-vindo!</Title>

        <TextInput required withAsterisk={false} label="Usuário ou Email" />
        <TextInput required withAsterisk={false} label="Senha" />

        <Button type="submit">Entrar</Button>
        <Button component={Link} to="/auth/registrar" variant="light">
          Criar conta
        </Button>
      </Card>
    </Container>
  )
}
