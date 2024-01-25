import type { MetaFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"
import "~/styles/index.css"

export const meta: MetaFunction = () => {
  return [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: "Molecule",
    },
  ]
}

export default function Root() {
  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
