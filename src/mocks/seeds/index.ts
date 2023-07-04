import { type Server } from "miragejs"

import { users } from "../fixtures"

const userSeeds = users.length

export function seeds(server: Server) {
  server.createList("user", userSeeds)
}
