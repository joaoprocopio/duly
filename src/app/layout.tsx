import {
  ActionIcon,
  AppShell,
  AppShellHeader,
  AppShellMain,
  Button,
  ColorSchemeScript,
  Container,
  MantineProvider
} from "@mantine/core"
import "@mantine/core/styles.css"
import { IconAssembly, IconChevronRight } from "@tabler/icons-react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
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
          <AppShell header={{ height: 64 }}>
            <AppShellHeader>
              <Container
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "space-between"
                }}>
                <ActionIcon component={Link} variant="transparent" size="lg" href="/">
                  <IconAssembly size="100%" />
                </ActionIcon>

                <Button
                  variant="light"
                  href="/auth/login"
                  component={Link}
                  rightSection={<IconChevronRight />}>
                  Entrar
                </Button>
              </Container>
            </AppShellHeader>

            <AppShellMain>{children}</AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}
