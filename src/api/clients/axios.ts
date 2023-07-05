import axios from "axios"

import { env } from "@/config/project/env"

export const $axios = axios.create({
  baseURL: env.DEV && env.MOCK ? "/api" : env.API_URL
})
