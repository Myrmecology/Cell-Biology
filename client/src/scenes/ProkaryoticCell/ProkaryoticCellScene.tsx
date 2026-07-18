import { useState } from 'react'
import { SceneCanvas } from '@/scenes/SceneCanvas'
import { OrganelleMesh } from '@/organelles/geometry/OrganelleMesh'
import { getOrganellesForCellType } from '@/data/organelles'
import { useProgressStore } from '@/systems/progress/progressStore'

interface ProkaryoticCellSceneProps {
  onOrganelleSelect?: (organelleId: string) => void
}

const CELL_TYPE = 'prokaryotic' as const

export function ProkaryoticCellScene({ onOrganelleSelect }: ProkaryoticCellSceneProps) {
  const [selectedOrganelleId, setSelectedOrganelleId] = useState<string | null>(null)
  const markOrganelleViewed = useProgressStore((state) => state.markOrganelleViewed)

  const organelles = getOrganellesForCellType(CELL_TYPE)

  function handleSelect(organelleId: string) {
    setSelectedOrganelleId(organelleId)
    markOrganelleViewed(CELL_TYPE, organelleId)
    onOrganelleSelect?.(organelleId)
  }

  return (
    <SceneCanvas backgroundColor="#170a17" autoRotate={selectedOrganelleId === null}>
      {/* Most bacteria are rod-shaped (bacillus), so we use an elongated capsule
          for the outer shell rather than a sphere or box — another small visual
          cue reinforcing "this is structurally different" before any click happens. */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[2.6, 5.5, 8, 24]} />
        <meshStandardMaterial
          color="#f0abfc"
          transparent
          opacity={0.06}
          roughness={0.2}
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