import { env } from '@/config/env'

const GEMINI_MODEL = 'gemini-3.5-flash'
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`

export interface TutorRequest {
  question: string
  organelleContext?: {
    name: string
    cellType: string
  }
}

export interface TutorResponse {
  answer: string
}

const SYSTEM_INSTRUCTION =
  'You are a friendly, precise cell biology tutor embedded in an interactive educational app about ' +
  'eukaryotic and prokaryotic cells. Answer questions accurately and concisely — 2 to 4 short ' +
  'paragraphs at most, unless the user explicitly asks for more detail. Stay strictly within cell ' +
  'biology, molecular biology, and closely related topics (biochemistry, genetics, microbiology). If ' +
  'asked something unrelated to biology, politely redirect the user back to cell biology topics. Use ' +
  'clear, accessible language suitable for a curious learner, without oversimplifying to the point of ' +
  'inaccuracy.'

class GeminiServiceError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message)
    this.name = 'GeminiServiceError'
  }
}

export async function askTutor(request: TutorRequest): Promise<TutorResponse> {
  const contextLine = request.organelleContext
    ? `The user is currently looking at the ${request.organelleContext.name} in a ${request.organelleContext.cellType} cell. `
    : ''

  const prompt = `${contextLine}${request.question}`

  const response = await fetch(`${GEMINI_API_URL}?key=${env.geminiApiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: SYSTEM_INSTRUCTION }],
      },
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 1024,
        thinkingConfig: {
          thinkingBudget: 0,
        },
      },
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new GeminiServiceError(
      `Gemini API request failed (${response.status}): ${errorBody}`,
      response.status
    )
  }

  const data = await response.json()
  const finishReason = data?.candidates?.[0]?.finishReason
  const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text

  if (!answer || typeof answer !== 'string') {
    throw new GeminiServiceError(
      `Gemini API returned an unexpected response shape (finishReason: ${finishReason ?? 'unknown'}).`,
      502
    )
  }

  return { answer }
}

export { GeminiServiceError }