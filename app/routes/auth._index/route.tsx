import { Button, Card, Container, PasswordInput, TextInput, Title } from "@mantine/core"
import { TransformedValues, useForm } from "@mantine/form"
import { ActionFunctionArgs, redirect } from "@remix-run/node"
import { Form, Link, useSubmit } from "@remix-run/react"

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  console.log(data)

  return redirect("/")
}

export default function AuthRoute() {
  const form = useForm({
    initialValues: {
      identifier: "",
      password: ""
    }
  })
  const submit = useSubmit()

  const handleSubmit = (values: TransformedValues<typeof form>) => {
    submit(values, { method: "post" })
  }

  return (
    <Container>
      <Card withBorder>
        <Title size="larger" style={{ marginBottom: 16 }}>
          Seja bem-vindo!
        </Title>

        <Form onSubmit={form.onSubmit(handleSubmit)}>
          <div style={{ marginBottom: 32 }}>
            <TextInput
              required
              withAsterisk={false}
              name="identifier"
              label="Usuário ou Email"
              {...form.getInputProps("identifier")}
            />
            <PasswordInput
              required
              withAsterisk={false}
              name="password"
              label="Senha"
              {...form.getInputProps("password")}
            />
          </div>

          <div>
            <Button type="submit" fullWidth style={{ marginBottom: 8 }}>
              Entrar
            </Button>
            <Button component={Link} fullWidth to="/auth/registrar" variant="light">
              Criar conta
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
}
