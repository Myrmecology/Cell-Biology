import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { eukaryoteProkaryoteIntro, eukaryoteProkaryoteOutro, comparisonRows } from '@/data/comparisonContent'

export function ComparisonPanel() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'absolute',
          bottom: 'var(--space-lg)',
          left: 'var(--space-lg)',
          padding: 'var(--space-sm) var(--space-md)',
          borderRadius: 'var(--radius-md)',
          background: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-panel)',
          color: 'var(--color-text-primary)',
          fontSize: '0.85rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-xs)',
        }}
      >
        <span style={{ color: 'var(--color-accent-primary)' }}>⇄</span>
        Eukaryotic vs. Prokaryotic
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10, 14, 23, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 20,
              padding: 'var(--space-xl)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="scrollable"
              style={{
                width: '100%',
                maxWidth: '840px',
                maxHeight: '85vh',
                overflowY: 'auto',
                background: 'var(--color-bg-elevated)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-panel)',
                padding: 'var(--space-xl)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                <h2 style={{ fontSize: '1.4rem', fontWeight: 600 }}>
                  Eukaryotic vs. Prokaryotic Cells
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close comparison"
                  style={{ fontSize: '1.3rem', color: 'var(--color-text-secondary)', lineHeight: 1 }}
                >
                  ✕
                </button>
              </div>

              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-xl)',
                }}
              >
                {eukaryoteProkaryoteIntro}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                {comparisonRows.map((row) => (
                  <div
                    key={row.category}
                    style={{
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        padding: 'var(--space-sm) var(--space-md)',
                        background: 'var(--color-bg-secondary)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--color-accent-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {row.category}
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1px',
                        background: 'var(--color-border)',
                      }}
                    >
                      <div
                        style={{
                          padding: 'var(--space-md)',
                          background: 'var(--color-bg-elevated)',
                        }}
                      >
                        <p
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            color: 'var(--color-animal-cell)',
                            marginBottom: 'var(--space-xs)',
                            textTransform: 'uppercase',
                          }}
                        >
                          Eukaryotic
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                          {row.eukaryotic}
                        </p>
                      </div>
                      <div
                        style={{
                          padding: 'var(--space-md)',
                          background: 'var(--color-bg-elevated)',
                        }}
                      >
                        <p
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            color: 'var(--color-prokaryotic-cell)',
                            marginBottom: 'var(--space-xs)',
                            textTransform: 'uppercase',
                          }}
                        >
                          Prokaryotic
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                          {row.prokaryotic}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                  marginTop: 'var(--space-xl)',
                }}
              >
                {eukaryoteProkaryoteOutro}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}