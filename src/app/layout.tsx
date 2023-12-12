import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  Container,
  MantineProvider
} from "@mantine/core"
import "@mantine/core/styles.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { theme } from "~/app/theme"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Molecule"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <AppShell header={{ height: 60 }}>
            <AppShellHeader>
              <Container>a</Container>
            </AppShellHeader>

            <AppShellMain>{children}</AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}
