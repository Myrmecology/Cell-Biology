const API_BASE_URL = 'http://localhost:3001'

export interface TutorAskParams {
  question: string
  organelleContext?: {
    name: string
    cellType: string
  }
}

export interface TutorAskResult {
  answer: string
}

export interface OrganelleImageResult {
  title: string
  imageUrl: string
  thumbnailUrl: string
  descriptionUrl: string
  license: string
  attribution: string
}

class ApiClientError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ApiClientError'
  }
}

async function parseErrorMessage(response: Response): Promise<string> {
  try {
    const body = await response.json()
    return body?.error ?? `Request failed with status ${response.status}`
  } catch {
    return `Request failed with status ${response.status}`
  }
}

export async function askTutor(params: TutorAskParams): Promise<TutorAskResult> {
  const response = await fetch(`${API_BASE_URL}/api/tutor`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  })

  if (!response.ok) {
    throw new ApiClientError(await parseErrorMessage(response))
  }

  return response.json()
}

export async function searchOrganelleImages(query: string): Promise<OrganelleImageResult[]> {
  const response = await fetch(`${API_BASE_URL}/api/images?q=${encodeURIComponent(query)}`)

  if (!response.ok) {
    throw new ApiClientError(await parseErrorMessage(response))
  }

  const data = await response.json()
  return data.results
}

export { ApiClientError }