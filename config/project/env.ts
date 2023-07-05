export const env = {
  get API_URL() {
    return import.meta.env.VITE_API_URL
  },
  get MODE() {
    return import.meta.env.MODE
  },
  get DEV() {
    return env.MODE === "development"
  },
  get MOCK() {
    return import.meta.env.VITE_API_MOCK === "true"
  }
}
