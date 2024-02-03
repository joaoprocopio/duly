import type { LinksFunction, MetaFunction } from "@remix-run/node"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import "~/styles/index.css"

export const meta: MetaFunction = () => [
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

export const links: LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
  },
  {
    rel: "icon",
    type: "image/svg+xml",
    href: "/favicon.svg",
  },
]

export default function Root() {
  return (
    // TODO: trocar pra pt-br
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen antialiased">
        <ScrollRestoration />
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
