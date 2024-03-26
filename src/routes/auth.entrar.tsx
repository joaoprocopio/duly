import { Link } from "@remix-run/react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

export default function Entrar() {
  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Seja bem-vindo
        </h1>
        <p className="text-sm text-muted-foreground">
          Insira seu email e senha para entrar
        </p>
      </div>
      <form>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input
              placeholder="nome@exemplo.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-2">
            <Label>Senha</Label>
            <Input
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-2">
            <Button>Entrar</Button>
            <Button asChild variant="link">
              <Link to="../cadastrar">Quero criar uma conta</Link>
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}
