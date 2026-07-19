import { useState } from 'react'
import { SceneCanvas } from '@/scenes/SceneCanvas'
import { OrganelleMesh } from '@/organelles/geometry/OrganelleMesh'
import { CellBoundaryMesh } from '@/organelles/geometry/CellBoundaryMesh'
import { AppendageMesh } from '@/organelles/geometry/AppendageMesh'
import { getOrganellesForCellType } from '@/data/organelles'
import { getInteriorOrganelles, getAppendageOrganelles, BOUNDARY_ORGANELLE_ID_BY_CELL_TYPE } from '@/organelles/boundaryOrganelles'
import { useProgressStore } from '@/systems/progress/progressStore'

interface ProkaryoticCellSceneProps {
  onOrganelleSelect?: (organelleId: string) => void
}

const CELL_TYPE = 'prokaryotic' as const
const POSITION_SPREAD = 1.5

export function ProkaryoticCellScene({ onOrganelleSelect }: ProkaryoticCellSceneProps) {
  const [selectedOrganelleId, setSelectedOrganelleId] = useState<string | null>(null)
  const markOrganelleViewed = useProgressStore((state) => state.markOrganelleViewed)

  const allOrganellesForCell = getOrganellesForCellType(CELL_TYPE)
  const interiorOrganelles = getInteriorOrganelles(allOrganellesForCell)
  const appendageOrganelles = getAppendageOrganelles(allOrganellesForCell)
  const boundaryOrganelleId = BOUNDARY_ORGANELLE_ID_BY_CELL_TYPE[CELL_TYPE]

  function handleSelect(organelleId: string) {
    setSelectedOrganelleId(organelleId)
    markOrganelleViewed(CELL_TYPE, organelleId)
    onOrganelleSelect?.(organelleId)
  }

  return (
    <SceneCanvas backgroundColor="#170a17" autoRotate={selectedOrganelleId === null} initialCameraDistance={14}>
      <CellBoundaryMesh
        cellType={CELL_TYPE}
        isSelected={selectedOrganelleId === boundaryOrganelleId}
        onSelect={handleSelect}
      />

      {interiorOrganelles.map((organelle) => (
        <OrganelleMesh
          key={organelle.id}
          organelle={organelle}
          cellType={CELL_TYPE}
          isSelected={selectedOrganelleId === organelle.id}
          onSelect={handleSelect}
          positionScale={POSITION_SPREAD}
        />
      ))}

      {appendageOrganelles.map((organelle) => (
        <AppendageMesh
          key={organelle.id}
          organelle={organelle}
          cellType={CELL_TYPE}
          isSelected={selectedOrganelleId === organelle.id}
          onSelect={handleSelect}
          positionScale={POSITION_SPREAD}
        />
      ))}
    </SceneCanvas>
  )
}