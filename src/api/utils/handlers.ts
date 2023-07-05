import { type AxiosError } from "axios"

export const reject = (error: AxiosError) => {
  Promise.reject(error)

  return error.response
}
