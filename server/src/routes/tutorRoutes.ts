import { Router, type Request, type Response } from 'express'
import { askTutor, GeminiServiceError } from '@/services/geminiService'

export const tutorRouter = Router()

interface TutorRequestBody {
  question?: unknown
  organelleContext?: {
    name?: unknown
    cellType?: unknown
  }
}

const MAX_QUESTION_LENGTH = 500

tutorRouter.post('/', async (req: Request, res: Response) => {
  const body = req.body as TutorRequestBody

  if (typeof body.question !== 'string' || body.question.trim().length === 0) {
    res.status(400).json({ error: 'A non-empty "question" string is required.' })
    return
  }

  if (body.question.length > MAX_QUESTION_LENGTH) {
    res.status(400).json({
      error: `Question is too long. Please keep it under ${MAX_QUESTION_LENGTH} characters.`,
    })
    return
  }

  const organelleContext =
    typeof body.organelleContext?.name === 'string' &&
    typeof body.organelleContext?.cellType === 'string'
      ? { name: body.organelleContext.name, cellType: body.organelleContext.cellType }
      : undefined

  try {
    const result = await askTutor({
      question: body.question.trim(),
      organelleContext,
    })

    res.json(result)
  } catch (error) {
    if (error instanceof GeminiServiceError) {
      console.error('Gemini service error:', error.message)
      res.status(error.statusCode >= 400 && error.statusCode < 600 ? error.statusCode : 502).json({
        error: 'The AI tutor is temporarily unavailable. Please try again in a moment.',
      })
      return
    }

    console.error('Unexpected error in tutor route:', error)
    res.status(500).json({ error: 'An unexpected error occurred.' })
  }
})