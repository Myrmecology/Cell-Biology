import { Router, type Request, type Response } from 'express'
import { searchOrganelleImages, WikimediaServiceError } from '@/services/wikimediaService'

export const imageRouter = Router()

const MAX_QUERY_LENGTH = 150

imageRouter.get('/', async (req: Request, res: Response) => {
  const query = req.query.q

  if (typeof query !== 'string' || query.trim().length === 0) {
    res.status(400).json({ error: 'A non-empty "q" query parameter is required.' })
    return
  }

  if (query.length > MAX_QUERY_LENGTH) {
    res.status(400).json({
      error: `Query is too long. Please keep it under ${MAX_QUERY_LENGTH} characters.`,
    })
    return
  }

  try {
    const results = await searchOrganelleImages({ query: query.trim() })
    res.json({ results })
  } catch (error) {
    if (error instanceof WikimediaServiceError) {
      console.error('Wikimedia service error:', error.message)
      res.status(502).json({
        error: 'The image search is temporarily unavailable. Please try again in a moment.',
      })
      return
    }

    console.error('Unexpected error in image route:', error)
    res.status(500).json({ error: 'An unexpected error occurred.' })
  }
})