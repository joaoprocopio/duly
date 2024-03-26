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
        title: "Duly",
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

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function Root() {
    return <Outlet />
}
