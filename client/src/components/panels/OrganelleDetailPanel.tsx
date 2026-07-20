import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { CellType } from '@/types/organelle'
import { organelleById } from '@/data/organelles'
import { ImageGallery } from '@/components/panels/ImageGallery'
import { TutorPanel } from '@/components/panels/TutorPanel'

interface OrganelleDetailPanelProps {
  organelleId: string | null
  cellType: CellType
  onClose: () => void
  onStartQuiz: (organelleId: string) => void
  onPlayAnimation: (animationId: string) => void
}

const CELL_TYPE_LABELS: Record<CellType, string> = {
  animal: 'Animal Cell',
  plant: 'Plant Cell',
  prokaryotic: 'Prokaryotic Cell',
}

export function OrganelleDetailPanel({
  organelleId,
  cellType,
  onClose,
  onStartQuiz,
  onPlayAnimation,
}: OrganelleDetailPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    setIsExpanded(false)
  }, [organelleId])

  const organelle = organelleId ? organelleById[organelleId] : null

  return (
    <AnimatePresence>
      {organelle && (
        <motion.div
          key={organelle.id}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 32 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            top: 'var(--space-lg)',
            right: 'var(--space-lg)',
            width: '380px',
            maxHeight: 'calc(100% - var(--space-lg) * 2)',
            background: 'var(--color-bg-elevated)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-panel)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              padding: 'var(--space-lg)',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{organelle.name}</h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                {CELL_TYPE_LABELS[cellType]}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close panel"
              style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', lineHeight: 1 }}
            >
              ✕
            </button>
          </div>

          <div className="scrollable" style={{ padding: 'var(--space-lg)', overflowY: 'auto' }}>
            <p style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-md)' }}>
              {organelle.shortDescription}
            </p>

            <div
              style={{
                display: 'flex',
                gap: 'var(--space-sm)',
                marginBottom: 'var(--space-md)',
                flexWrap: 'wrap',
              }}
            >
              {organelle.animation && (
                <button
                  onClick={() => onPlayAnimation(organelle.animation!.animationId)}
                  style={{
                    fontSize: '0.8rem',
                    padding: 'var(--space-xs) var(--space-sm)',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-accent-primary)',
                  }}
                >
                  ▶ {organelle.animation.label}
                </button>
              )}

              <button
                onClick={() => onStartQuiz(organelle.id)}
                style={{
                  fontSize: '0.8rem',
                  padding: 'var(--space-xs) var(--space-sm)',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-accent-secondary)',
                }}
              >
                Take quiz ({organelle.quizQuestions.length})
              </button>
            </div>

            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-text-secondary)',
                textDecoration: 'underline',
                marginBottom: 'var(--space-md)',
              }}
            >
              {isExpanded ? 'Show less' : 'Read the full explanation'}
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: 'hidden' }}
                >
                  <Section title="Function">
                    <p>{organelle.function}</p>
                  </Section>

                  <Section title="In depth">
                    <p>{organelle.deepDescription}</p>
                  </Section>

                  {organelle.analogy && (
                    <Section title="Think of it like">
                      <p>{organelle.analogy}</p>
                    </Section>
                  )}

                  {organelle.comparisonNotes && (
                    <Section title="Across cell types">
                      {Object.entries(organelle.comparisonNotes).map(([otherType, note]) => (
                        <div key={otherType} style={{ marginBottom: 'var(--space-sm)' }}>
                          <p
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              color: 'var(--color-text-muted)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.03em',
                              marginBottom: '2px',
                            }}
                          >
                            {CELL_TYPE_LABELS[otherType as CellType]}
                          </p>
                          <p>{note}</p>
                        </div>
                      ))}
                    </Section>
                  )}

                  {organelle.imageQuery && (
                    <Section title="Real imagery">
                      <ImageGallery query={organelle.imageQuery.query} />
                    </Section>
                  )}

                  <Section title="Ask the tutor">
                    <TutorPanel organelleName={organelle.name} cellType={CELL_TYPE_LABELS[cellType]} />
                  </Section>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 'var(--space-lg)' }}>
      <h3
        style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          marginBottom: 'var(--space-xs)',
          color: 'var(--color-accent-primary)',
        }}
      >
        {title}
      </h3>
      <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  )
}