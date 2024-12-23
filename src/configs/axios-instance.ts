import { env } from "@/lib/env"
import { getItem } from "@/lib/localStorage"
import axios from "axios"

export const baseURL = env.NEXT_PUBLIC_BE_URL

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    // get token from local storage
    const token = getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
