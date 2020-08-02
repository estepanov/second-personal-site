import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.GATSBY_API_BASE_URL
})
