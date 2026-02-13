import { config } from 'dotenv'

config()

export default () => ({
  port: 3000,
  isDev: process.env.NODE_ENV === 'development',
})
