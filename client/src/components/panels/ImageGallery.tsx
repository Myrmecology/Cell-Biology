import { useState, useEffect } from 'react'
import { searchOrganelleImages, type OrganelleImageResult, ApiClientError } from '@/services/apiClient'

interface ImageGalleryProps {
  query: string
}

type LoadState = 'loading' | 'success' | 'error'

export function ImageGallery({ query }: ImageGalleryProps) {
  const [images, setImages] = useState<OrganelleImageResult[]>([])
  const [loadState, setLoadState] = useState<LoadState>('loading')

  useEffect(() => {
    let isCancelled = false

    setLoadState('loading')
    setImages([])

    searchOrganelleImages(query)
      .then((results) => {
        if (isCancelled) return
        setImages(results)
        setLoadState('success')
      })
      .catch((error) => {
        if (isCancelled) return
        console.error('Image search failed:', error instanceof ApiClientError ? error.message : error)
        setLoadState('error')
      })

    return () => {
      isCancelled = true
    }
  }, [query])

  if (loadState === 'loading') {
    return (
      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Loading real imagery…</p>
    )
  }

  if (loadState === 'error' || images.length === 0) {
    return (
      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
        No supplementary imagery available right now.
      </p>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'var(--space-sm)',
        }}
      >
        {images.map((image) => (
 <a         
            key={image.imageUrl}
            href={image.descriptionUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block' }}
          >
            <img
              src={image.thumbnailUrl}
              alt={image.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '90px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
              }}
            />
          </a>
        ))}
      </div>
      <p style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
        Real scientific imagery via Wikimedia Commons. Click any image for source and license
        details.
      </p>
    </div>
  )
}