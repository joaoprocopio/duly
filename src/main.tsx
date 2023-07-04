import { createRoot } from "react-dom/client"

import { env } from "@/config/project/env"

import { App } from "~/app"
import { createServer } from "~/mocks"

if (env.DEV && env.MOCK) createServer()

const rootEl = document.getElementById("__react") as HTMLElement
const root = createRoot(rootEl)

root.render(<App />)
