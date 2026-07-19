import { useState, useMemo } from 'react'
import { SceneCanvas } from '@/scenes/SceneCanvas'
import { OrganelleMesh } from '@/organelles/geometry/OrganelleMesh'
import { CellBoundaryMesh } from '@/organelles/geometry/CellBoundaryMesh'
import { AppendageMesh } from '@/organelles/geometry/AppendageMesh'
import { getOrganellesForCellType, organelleById } from '@/data/organelles'
import { getInteriorOrganelles, getAppendageOrganelles, BOUNDARY_ORGANELLE_ID_BY_CELL_TYPE } from '@/organelles/boundaryOrganelles'
import { computeOrganelleFocusPoint } from '@/scenes/cameraFocus'
import { useProgressStore } from '@/systems/progress/progressStore'

interface AnimalCellSceneProps {
  onOrganelleSelect?: (organelleId: string) => void
}

const CELL_TYPE = 'animal' as const
const POSITION_SPREAD = 1.8

export function AnimalCellScene({ onOrganelleSelect }: AnimalCellSceneProps) {
  const [selectedOrganelleId, setSelectedOrganelleId] = useState<string | null>(null)
  const markOrganelleViewed = useProgressStore((state) => state.markOrganelleViewed)

  const allOrganellesForCell = getOrganellesForCellType(CELL_TYPE)
  const interiorOrganelles = getInteriorOrganelles(allOrganellesForCell)
  const appendageOrganelles = getAppendageOrganelles(allOrganellesForCell)
  const boundaryOrganelleId = BOUNDARY_ORGANELLE_ID_BY_CELL_TYPE[CELL_TYPE]

  const focusPoint = useMemo(() => {
    if (!selectedOrganelleId) return null
    const organelle = organelleById[selectedOrganelleId]
    if (!organelle) return null
    return computeOrganelleFocusPoint(organelle, CELL_TYPE, POSITION_SPREAD)
  }, [selectedOrganelleId])

  function handleSelect(organelleId: string) {
    setSelectedOrganelleId(organelleId)
    markOrganelleViewed(CELL_TYPE, organelleId)
    onOrganelleSelect?.(organelleId)
  }

  return (
    <SceneCanvas
      backgroundColor="#0a0e17"
      autoRotate={selectedOrganelleId === null}
      initialCameraDistance={16}
      focusPoint={focusPoint}
      focusDistance={3.5}
    >
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
        />
      ))}
    </SceneCanvas>
  )
}