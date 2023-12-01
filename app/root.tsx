import "@mantine/core/styles.css"

import type { MetaFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"
import { MantineProvider, ColorSchemeScript } from "@mantine/core"

export const meta: MetaFunction = () => {
  return [{ title: "Molecule" }, { name: "description", content: "Welcome to Molecule!" }]
}

export default function Root() {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>

      <body>
        <MantineProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MantineProvider>
      </body>
    </html>
  )
}
