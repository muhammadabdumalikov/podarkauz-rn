import axios from "axios"
import rateLimit from "axios-rate-limit"

import config from "../../config"
import storage from "./storage"

const api = axios.create({
  baseURL: config.apiURL,
  headers: {
    get "x-authorization"() {
      const token = storage.getItem("token")

      if (!token) return null

      return `Token ${token}`
    },
  },
})

storage.register("string", "beforewrite", (key, value) => {
  if (key === "token") {
    api.defaults.headers["x-authorization"] = `Token ${value}`
  }

  return value
})

export default rateLimit(api, {
  maxRequests: 5,
  perMilliseconds: 1000,
})