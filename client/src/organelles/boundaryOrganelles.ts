import type { CellType } from '@/types/organelle'

/**
 * Organelle ids that represent the cell's outer boundary itself, rendered
 * by the scene's boundary shell mesh rather than as a floating interior ball.
 */
export const BOUNDARY_ORGANELLE_IDS = new Set(['cell-membrane', 'cell-wall'])

/**
 * Organelle ids that are external appendages — structures that anchor to
 * and protrude outward from the cell surface (flagella, pili), rather than
 * floating freely inside the cell like a true internal organelle.
 */
export const APPENDAGE_ORGANELLE_IDS = new Set(['flagellum', 'pili'])

/**
 * Organelle ids that form an additional outer shell layer beyond the
 * primary boundary (e.g. a bacterial capsule wrapping around the cell
 * wall) — rendered as a larger, enclosing shell rather than a floating
 * interior ball or a surface-anchored appendage.
 */
export const SHELL_ORGANELLE_IDS = new Set(['capsule'])

/**
 * For a given cell type, which organelle id the boundary shell should open
 * when clicked. Walled cell types (plant, prokaryotic) surface the wall —
 * the true outermost structure — while unwalled cells (animal) surface the
 * membrane directly, since it's the only boundary they have.
 */
export const BOUNDARY_ORGANELLE_ID_BY_CELL_TYPE: Record<CellType, string> = {
  animal: 'cell-membrane',
  plant: 'cell-wall',
  prokaryotic: 'cell-wall',
}

/**
 * Filters a list of organelles down to only true "floating interior"
 * organelles — excluding boundary structures, appendages, and outer
 * shell layers, which scenes render through their own specialized
 * components.
 */
export function getInteriorOrganelles<T extends { id: string }>(organelles: T[]): T[] {
  return organelles.filter(
    (organelle) =>
      !BOUNDARY_ORGANELLE_IDS.has(organelle.id) &&
      !APPENDAGE_ORGANELLE_IDS.has(organelle.id) &&
      !SHELL_ORGANELLE_IDS.has(organelle.id)
  )
}

/**
 * Filters a list of organelles down to only appendage organelles
 * (flagella, pili) — structures that should be anchored to and protrude
 * from the cell's outer surface, rather than float inside it.
 */
export function getAppendageOrganelles<T extends { id: string }>(organelles: T[]): T[] {
  return organelles.filter((organelle) => APPENDAGE_ORGANELLE_IDS.has(organelle.id))
}

/**
 * Filters a list of organelles down to only outer shell organelles
 * (e.g. capsule) — structures that wrap around the entire cell as an
 * additional layer beyond the primary boundary.
 */
export function getShellOrganelles<T extends { id: string }>(organelles: T[]): T[] {
  return organelles.filter((organelle) => SHELL_ORGANELLE_IDS.has(organelle.id))
}