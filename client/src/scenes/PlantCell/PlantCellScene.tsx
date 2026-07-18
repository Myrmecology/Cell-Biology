import { useState } from 'react'
import { SceneCanvas } from '@/scenes/SceneCanvas'
import { OrganelleMesh } from '@/organelles/geometry/OrganelleMesh'
import { getOrganellesForCellType } from '@/data/organelles'
import { useProgressStore } from '@/systems/progress/progressStore'

interface PlantCellSceneProps {
  onOrganelleSelect?: (organelleId: string) => void
}

const CELL_TYPE = 'plant' as const

export function PlantCellScene({ onOrganelleSelect }: PlantCellSceneProps) {
  const [selectedOrganelleId, setSelectedOrganelleId] = useState<string | null>(null)
  const markOrganelleViewed = useProgressStore((state) => state.markOrganelleViewed)

  const organelles = getOrganellesForCellType(CELL_TYPE)

  function handleSelect(organelleId: string) {
    setSelectedOrganelleId(organelleId)
    markOrganelleViewed(CELL_TYPE, organelleId)
    onOrganelleSelect?.(organelleId)
  }

  return (
    <SceneCanvas backgroundColor="#0a170f" autoRotate={selectedOrganelleId === null}>
      {/* Plant cells are boxier and more rigid than animal cells, so we use a
          rounded-box outer shell instead of a sphere to hint at that structural
          difference at a glance, before the user even clicks the cell wall. */}
      <mesh>
        <boxGeometry args={[10.4, 9.4, 8.4]} />
        <meshStandardMaterial
          color="#6ee7b7"
          transparent
          opacity={0.05}
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