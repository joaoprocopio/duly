import { Server } from "miragejs"

import { factories } from "./factories"
import { models } from "./models"
import { routes } from "./routes"
import { seeds } from "./seeds"
import { serializers } from "./serializers"

export const createServer = ({ environment = "development" } = {}) =>
  new Server({
    environment,
    factories,
    models,
    routes,
    seeds,
    serializers
  })
