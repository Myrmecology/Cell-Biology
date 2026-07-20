import dotenv from 'dotenv'

dotenv.config()

interface EnvConfig {
  port: number
  nodeEnv: string
  clientOrigin: string
  geminiApiKey: string
  scienceImageApiKey: string
  rateLimitWindowMs: number
  rateLimitMaxRequests: number
}

/**
 * Reads and validates required environment variables once at startup.
 * Fails loudly and immediately if something essential is missing, rather
 * than letting the server start in a broken state and fail mysteriously
 * later on the first real request.
 */
function loadEnvConfig(): EnvConfig {
  const geminiApiKey = process.env.GEMINI_API_KEY

  if (!geminiApiKey || geminiApiKey === 'your_gemini_api_key_here') {
    throw new Error(
      'GEMINI_API_KEY is missing or still set to the placeholder value in server/.env. ' +
        'Get a key at https://aistudio.google.com/apikey and set it there.'
    )
  }

  return {
    port: Number(process.env.PORT) || 3001,
    nodeEnv: process.env.NODE_ENV ?? 'development',
    clientOrigin: process.env.CLIENT_ORIGIN ?? 'http://localhost:5173',
    geminiApiKey,
    scienceImageApiKey: process.env.SCIENCE_IMAGE_API_KEY ?? '',
    rateLimitWindowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60000,
    rateLimitMaxRequests: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 20,
  }
}

export const env = loadEnvConfig()