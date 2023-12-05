import "@mantine/core/styles.css"

import type { LinksFunction, MetaFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"
import { MantineProvider, ColorSchemeScript } from "@mantine/core"

export const meta: MetaFunction = () => {
  return [
    { title: "Molecule" },
    { name: "description", content: "Welcome to Molecule!" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { charSet: "utf-8" }
  ]
}

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }
]

export default function Root() {
  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>

      <body>
        <MantineProvider>
          <ScrollRestoration />
          <Outlet />
          <LiveReload />
          <Scripts />
        </MantineProvider>
      </body>
    </html>
  )
}
