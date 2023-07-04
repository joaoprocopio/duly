import { Server } from "miragejs"

import { factories } from "./factories"
import { models } from "./models"
import { seeds } from "./seeds"
import { serializers } from "./serializers"

export const createServer = ({ environment = "development" } = {}) =>
  new Server({
    factories,
    environment,
    serializers,
    models,
    seeds
  })
