import { motion } from 'motion/react'
import type { CellType } from '@/types/organelle'
import { allCellDefinitions } from '@/data/cellDefinitions'

interface CellTypeSwitcherProps {
  activeCellType: CellType
  onSelectCellType: (cellType: CellType) => void
}

export function CellTypeSwitcher({ activeCellType, onSelectCellType }: CellTypeSwitcherProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 'var(--space-lg)',
        left: 'var(--space-lg)',
        display: 'flex',
        gap: 'var(--space-xs)',
        padding: 'var(--space-xs)',
        background: 'var(--color-bg-elevated)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-panel)',
      }}
    >
      {allCellDefinitions.map((definition) => {
        const isActive = definition.cellType === activeCellType

        return (
          <button
            key={definition.cellType}
            onClick={() => onSelectCellType(definition.cellType)}
            style={{
              position: 'relative',
              padding: 'var(--space-sm) var(--space-md)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: isActive ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)',
              overflow: 'hidden',
              zIndex: 0,
            }}
          >
            {isActive && (
              <motion.div
                layoutId="cell-switcher-active-bg"
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `var(${definition.accentColorVar})`,
                  borderRadius: 'var(--radius-sm)',
                  zIndex: -1,
                }}
              />
            )}
            {definition.displayName}
          </button>
        )
      })}
    </div>
  )
}