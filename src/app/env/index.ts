import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().default('http://localhost:3000/api'),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('Environment variables validation error:', _env.error.format())
  throw new Error('Invalid environment variables.')
}

export const env = _env.data
