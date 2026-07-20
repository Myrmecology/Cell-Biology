import express, { type Request, type Response } from 'express'
import { corsMiddleware, apiRateLimiter } from '@/middleware/security'
import { tutorRouter } from '@/routes/tutorRoutes'
import { imageRouter } from '@/routes/imageRoutes'

export function createApp() {
  const app = express()

  app.use(corsMiddleware)
  app.use(express.json({ limit: '10kb' }))

  app.get('/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' })
  })

  app.use('/api/tutor', apiRateLimiter, tutorRouter)
  app.use('/api/images', apiRateLimiter, imageRouter)

  app.use((_req: Request, res: Response) => {
    res.status(404).json({ error: 'Not found' })
  })

  return app
}