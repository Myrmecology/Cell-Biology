import { Vector3 } from 'three'
import type { Organelle, CellType } from '@/types/organelle'
import { BOUNDARY_ORGANELLE_IDS, APPENDAGE_ORGANELLE_IDS } from '@/organelles/boundaryOrganelles'

/**
 * Computes how far the cell boundary actually is in a given direction,
 * matching each cell type's real shell shape. Duplicated (intentionally,
 * to avoid a tight coupling) from AppendageMesh's own boundary math, so
 * appendage focus points land at roughly the same spot the appendage
 * itself is actually rendered.
 */
function getBoundaryDistance(direction: Vector3, cellType: CellType): number {
  switch (cellType) {
    case 'animal':
      return 9
    case 'plant': {
      const halfExtents = new Vector3(8.5, 7.5, 7)
      const tX = halfExtents.x / Math.max(Math.abs(direction.x), 1e-6)
      const tY = halfExtents.y / Math.max(Math.abs(direction.y), 1e-6)
      const tZ = halfExtents.z / Math.max(Math.abs(direction.z), 1e-6)
      return Math.min(tX, tY, tZ)
    }
    case 'prokaryotic': {
      const semiAxes = new Vector3(8.5, 4, 4)
      const normalized = new Vector3(
        direction.x / semiAxes.x,
        direction.y / semiAxes.y,
        direction.z / semiAxes.z
      )
      return 1 / Math.max(normalized.length(), 1e-6)
    }
  }
}

/**
 * Computes the world-space point the camera should fly to and orbit
 * around when a given organelle is selected.
 *
 * Returns null for boundary organelles (cell membrane / cell wall) — for
 * those, we want the camera to frame the *whole cell*, not fly toward any
 * single point, so the scene component should reset to its default framing
 * instead.
 */
export function computeOrganelleFocusPoint(
  organelle: Organelle,
  cellType: CellType,
  positionScale: number
): Vector3 | null {
  if (BOUNDARY_ORGANELLE_IDS.has(organelle.id)) {
    return null
  }

  const rawPosition = organelle.scenePosition[cellType]
  if (!rawPosition) return null

  if (APPENDAGE_ORGANELLE_IDS.has(organelle.id)) {
    const direction = new Vector3(rawPosition.x, rawPosition.y, rawPosition.z)
    if (direction.lengthSq() === 0) direction.set(1, 0, 0)
    direction.normalize()

    const reach = getBoundaryDistance(direction, cellType)
    // Focus slightly inside the true boundary point, so the camera isn't
    // aimed exactly at the wall itself but at the appendage's visible base.
    return direction.clone().multiplyScalar(reach * 0.85)
  }

  return new Vector3(
    rawPosition.x * positionScale,
    rawPosition.y * positionScale,
    rawPosition.z * positionScale
  )
}