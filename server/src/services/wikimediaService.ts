const WIKIMEDIA_API_URL = 'https://commons.wikimedia.org/w/api.php'

export interface OrganelleImageResult {
  title: string
  imageUrl: string
  thumbnailUrl: string
  descriptionUrl: string
  license: string
  attribution: string
}

export interface ImageSearchRequest {
  query: string
  maxResults?: number
}

class WikimediaServiceError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message)
    this.name = 'WikimediaServiceError'
  }
}

interface WikimediaApiPage {
  title: string
  imageinfo?: Array<{
    url: string
    thumburl: string
    descriptionurl: string
    extmetadata?: {
      LicenseShortName?: { value: string }
      Artist?: { value: string }
    }
  }>
}

const ALLOWED_IMAGE_EXTENSIONS = new Set(['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'tif', 'tiff'])

function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, '').trim()
}

/**
 * Wikimedia's File namespace includes videos and audio alongside images.
 * This checks the file extension on the actual asset URL to filter down
 * to real static images only — we never want to hand the frontend a
 * video file when it's expecting an <img> source.
 */
function isActualImageFile(url: string): boolean {
  const extensionMatch = url.match(/\.([a-zA-Z0-9]+)(?:\?|$)/)
  const extension = extensionMatch?.[1]?.toLowerCase()
  return extension ? ALLOWED_IMAGE_EXTENSIONS.has(extension) : false
}

export async function searchOrganelleImages(
  request: ImageSearchRequest
): Promise<OrganelleImageResult[]> {
  const maxResults = Math.min(request.maxResults ?? 4, 10)

  // Request more than we need from the API itself, since some results
  // will get filtered out as non-image files — this keeps us from
  // returning fewer results than requested just because the first few
  // happened to be videos.
  const overFetchLimit = Math.min(maxResults * 3, 20)

  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    generator: 'search',
    gsrnamespace: '6',
    gsrsearch: request.query,
    gsrlimit: String(overFetchLimit),
    prop: 'imageinfo',
    iiprop: 'url|extmetadata',
    iiurlwidth: '600',
    origin: '*',
  })

  const response = await fetch(`${WIKIMEDIA_API_URL}?${params.toString()}`)

  if (!response.ok) {
    throw new WikimediaServiceError(
      `Wikimedia API request failed (${response.status})`,
      response.status
    )
  }

  const data = await response.json()
  const pages = data?.query?.pages as Record<string, WikimediaApiPage> | undefined

  if (!pages) {
    return []
  }

  return Object.values(pages)
    .filter((page) => page.imageinfo && page.imageinfo.length > 0)
    .filter((page) => isActualImageFile(page.imageinfo![0].url))
    .slice(0, maxResults)
    .map((page) => {
      const info = page.imageinfo![0]
      const license = info.extmetadata?.LicenseShortName?.value ?? 'Unknown license'
      const rawArtist = info.extmetadata?.Artist?.value ?? 'Unknown source'

      return {
        title: page.title.replace(/^File:/, ''),
        imageUrl: info.url,
        thumbnailUrl: info.thumburl,
        descriptionUrl: info.descriptionurl,
        license,
        attribution: stripHtml(rawArtist),
      }
    })
}

export { WikimediaServiceError }