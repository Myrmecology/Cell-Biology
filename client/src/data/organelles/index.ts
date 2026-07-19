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
import { peroxisome } from './peroxisome'
import { vesicle } from './vesicle'
import { plasmodesma } from './plasmodesma'
import { capsule } from './capsule'

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
  peroxisome,
  vesicle,
  plasmodesma,
  capsule,
]

export const organelleById: Record<string, Organelle> = Object.fromEntries(
  allOrganelles.map((organelle) => [organelle.id, organelle])
)

export function getOrganellesForCellType(cellType: CellType): Organelle[] {
  return allOrganelles.filter((organelle) => organelle.cellTypes.includes(cellType))
}

export function getOrganelleByIdOrThrow(id: string): Organelle {
  const organelle = organelleById[id]
  if (!organelle) {
    throw new Error(`No organelle found with id "${id}". Check data/organelles/index.ts.`)
  }
  return organelle
}

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
  peroxisome,
  vesicle,
  plasmodesma,
  capsule,
}