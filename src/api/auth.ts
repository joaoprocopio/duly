import { $axios } from "./clients"
import { reject } from "./utils"

const current = async () =>
  await $axios
    .get("/auth/current")
    .then((response) => response)
    .catch((error) => reject(error))

export const AuthAPI = {
  current
}
