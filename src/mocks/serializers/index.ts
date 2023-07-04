import { ActiveModelSerializer } from "miragejs"

export * from "./users"

export const serializers = {
  user: ActiveModelSerializer.extend({
    embed: true,
    root: false
  })
}
