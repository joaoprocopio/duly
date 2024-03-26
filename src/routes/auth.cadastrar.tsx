import { Link } from "@remix-run/react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

export default function Cadastrar() {
  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Crie sua conta
        </h1>
        <p className="text-sm text-muted-foreground">
          Insira seu email e senha para criar sua conta
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
            <Button>Cadastrar</Button>
            <Button asChild variant="link">
              <Link to="../entrar">Já tenho uma conta</Link>
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}
