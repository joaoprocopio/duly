import { ColorSchemeScript, Container, MantineProvider, createTheme } from "@mantine/core"
import "@mantine/core/styles.css"
import type { LinksFunction, MetaFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"

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
        {/* TODO: mover o tema pra um lugar decente */}
        <MantineProvider
          theme={createTheme({
            components: {
              Container: Container.extend({
                defaultProps: {
                  size: "xl",
                  py: "xl"
                }
              })
            }
          })}>
          <ScrollRestoration />
          <Outlet />
          <Scripts />
          <LiveReload />
        </MantineProvider>
      </body>
    </html>
  )
}
