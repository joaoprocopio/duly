import { ColorSchemeScript, MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import type { LinksFunction, MetaFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"

import { theme } from "~/theme"

export const links: LinksFunction = () => {
  return [
    {
      rel: "shortcut icon",
      type: "image/svg+xml",
      href: "/favicon.svg"
    }
  ]
}

export const meta: MetaFunction = () => {
  return [
    {
      charSet: "utf-8"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
    {
      title: "Molecule"
    }
  ]
}

export default function Root() {
  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>

      <body>
        <MantineProvider theme={theme}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MantineProvider>
      </body>
    </html>
  )
}
