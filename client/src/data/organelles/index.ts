import type { CellType, Organelle } from '@/types/organelle'

import { mitochondrion } from './mitochondrion'
import { nucleus } from './nucleus'
import { ribosome } from './ribosome'
import { cellMembrane } from './cellMembrane'
import { cellWall } from './cellWall'
import { endoplasmicReticulum } from './endoplasmicReticulum'
import { golgiApparatus } from './golgiApparatus'
import { lysosome } from './lysosome'
import { vacuole } from './vacuole'
import { chloroplast } from './chloroplast'
import { nucleoidRegion } from './nucleoidRegion'
import { flagellum } from './flagellum'
import { pili } from './pili'

/**
 * The full registry of every organelle in the project.
 * Add new organelles here as they're built so they become
 * available everywhere else in the app automatically.
 */
export const allOrganelles: Organelle[] = [
  mitochondrion,
  nucleus,
  ribosome,
  cellMembrane,
  cellWall,
  endoplasmicReticulum,
  golgiApparatus,
  lysosome,
  vacuole,
  chloroplast,
  nucleoidRegion,
  flagellum,
  pili,
]

/**
 * Fast lookup map from organelle id -> Organelle.
 * Prefer this over allOrganelles.find(...) in hot paths (e.g. per-frame 3D logic).
 */
export const organelleById: Record<string, Organelle> = Object.fromEntries(
  allOrganelles.map((organelle) => [organelle.id, organelle])
)

/**
 * Returns every organelle that appears in a given cell type.
 * Used by scene components to determine what to render.
 */
export function getOrganellesForCellType(cellType: CellType): Organelle[] {
  return allOrganelles.filter((organelle) => organelle.cellTypes.includes(cellType))
}

/**
 * Looks up a single organelle by id, throwing clearly if it's missing.
 * Prefer this over direct map access in places where a missing organelle
 * indicates a real bug (e.g. tour steps, quiz references) rather than
 * an expected absence.
 */
export function getOrganelleByIdOrThrow(id: string): Organelle {
  const organelle = organelleById[id]
  if (!organelle) {
    throw new Error(`No organelle found with id "${id}". Check data/organelles/index.ts.`)
  }
  return organelle
}

// Re-export individual organelles too, in case a component needs one directly.
export {
  mitochondrion,
  nucleus,
  ribosome,
  cellMembrane,
  cellWall,
  endoplasmicReticulum,
  golgiApparatus,
  lysosome,
  vacuole,
  chloroplast,
  nucleoidRegion,
  flagellum,
  pili,
}