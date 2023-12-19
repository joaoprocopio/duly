import { Button, Card, Container, PasswordInput, TextInput, Title } from "@mantine/core"
import { TransformedValues, useForm } from "@mantine/form"
import { ActionFunctionArgs, redirect } from "@remix-run/node"
import { Link, useSubmit } from "@remix-run/react"

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

  const handleSubmit = (values: TransformedValues<typeof form>) =>
    submit(values, { method: "post" })

  return (
    <Container>
      <Card>
        <Title size="larger">Seja bem-vindo!</Title>

        <form
          onSubmit={form.onSubmit(handleSubmit)}
          style={{ marginTop: "var(--mantine-spacing-md)" }}>
          <div>
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
              style={{ marginTop: "var(--mantine-spacing-xs)" }}
              {...form.getInputProps("password")}
            />
          </div>

          <div style={{ marginTop: "var(--mantine-spacing-xl)" }}>
            <Button type="submit" fullWidth>
              Entrar
            </Button>
            <Button
              component={Link}
              fullWidth
              to="/auth/registrar"
              variant="light"
              style={{ marginTop: "var(--mantine-spacing-xs)" }}>
              Criar conta
            </Button>
          </div>
        </form>
      </Card>
    </Container>
  )
}
