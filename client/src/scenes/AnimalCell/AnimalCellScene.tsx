import { useState } from 'react'
import { SceneCanvas } from '@/scenes/SceneCanvas'
import { OrganelleMesh } from '@/organelles/geometry/OrganelleMesh'
import { getOrganellesForCellType } from '@/data/organelles'
import { useProgressStore } from '@/systems/progress/progressStore'

interface AnimalCellSceneProps {
  /** Called when the user selects an organelle, so parent UI (detail panel) can respond */
  onOrganelleSelect?: (organelleId: string) => void
}

const CELL_TYPE = 'animal' as const

export function AnimalCellScene({ onOrganelleSelect }: AnimalCellSceneProps) {
  const [selectedOrganelleId, setSelectedOrganelleId] = useState<string | null>(null)
  const markOrganelleViewed = useProgressStore((state) => state.markOrganelleViewed)

  const organelles = getOrganellesForCellType(CELL_TYPE)

  function handleSelect(organelleId: string) {
    setSelectedOrganelleId(organelleId)
    markOrganelleViewed(CELL_TYPE, organelleId)
    onOrganelleSelect?.(organelleId)
  }

  return (
    <SceneCanvas backgroundColor="#0a0e17" autoRotate={selectedOrganelleId === null}>
      {/* Semi-transparent outer membrane sphere, giving visual context for the cell boundary
          without a dedicated organelle mesh blocking the view of what's inside it. */}
      <mesh>
        <sphereGeometry args={[5.2, 48, 48]} />
        <meshStandardMaterial
          color="#4fd1c5"
          transparent
          opacity={0.06}
          roughness={0.1}
          metalness={0}
          depthWrite={false}
        />
      </mesh>

      {organelles.map((organelle) => (
        <OrganelleMesh
          key={organelle.id}
          organelle={organelle}
          cellType={CELL_TYPE}
          isSelected={selectedOrganelleId === organelle.id}
          onSelect={handleSelect}
        />
      ))}
    </SceneCanvas>
  )
}