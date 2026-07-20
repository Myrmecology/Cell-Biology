import cors from 'cors'
import rateLimit from 'express-rate-limit'
import { env } from '@/config/env'

/**
 * Restricts which origins are allowed to call this API. In development,
 * this is just the Vite dev server. In production, update CLIENT_ORIGIN
 * in .env to your real deployed frontend domain.
 */
export const corsMiddleware = cors({
  origin: env.clientOrigin,
  methods: ['GET', 'POST'],
  credentials: false,
})

/**
 * Basic rate limiting applied to the AI tutor and image proxy routes —
 * the two endpoints that actually cost money per request via third-party
 * APIs. Limits are intentionally generous for normal use, but prevent a
 * runaway script or malicious actor from burning through API quota.
 */
export const apiRateLimiter = rateLimit({
  windowMs: env.rateLimitWindowMs,
  max: env.rateLimitMaxRequests,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many requests. Please wait a moment before trying again.',
  },
})