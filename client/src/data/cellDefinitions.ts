import type { CellDefinition, CellType } from '@/types/organelle'
import { getOrganellesForCellType } from './organelles'

/**
 * Builds a CellDefinition by automatically pulling every organelle
 * registered for that cell type, so this list can never drift out
 * of sync with data/organelles/index.ts.
 */
function buildCellDefinition(
  cellType: CellType,
  displayName: string,
  description: string,
  accentColorVar: string
): CellDefinition {
  return {
    cellType,
    displayName,
    description,
    accentColorVar,
    organelleIds: getOrganellesForCellType(cellType).map((organelle) => organelle.id),
  }
}

export const animalCellDefinition: CellDefinition = buildCellDefinition(
  'animal',
  'Animal Cell',
  'A eukaryotic cell with no cell wall or chloroplasts, capable of flexible, irregular shapes — ' +
    'the building block of every animal on Earth, including humans.',
  '--color-animal-cell'
)

export const plantCellDefinition: CellDefinition = buildCellDefinition(
  'plant',
  'Plant Cell',
  'A eukaryotic cell reinforced by a rigid cellulose cell wall and equipped with chloroplasts for ' +
    'photosynthesis, along with a large central vacuole that maintains structural rigidity.',
  '--color-plant-cell'
)

export const prokaryoticCellDefinition: CellDefinition = buildCellDefinition(
  'prokaryotic',
  'Prokaryotic Cell',
  'A structurally simpler cell with no membrane-bound nucleus or organelles, representing the ' +
    'oldest and most abundant form of life on Earth — bacteria and archaea.',
  '--color-prokaryotic-cell'
)

export const allCellDefinitions: CellDefinition[] = [
  animalCellDefinition,
  plantCellDefinition,
  prokaryoticCellDefinition,
]

export const cellDefinitionByType: Record<CellType, CellDefinition> = {
  animal: animalCellDefinition,
  plant: plantCellDefinition,
  prokaryotic: prokaryoticCellDefinition,
}