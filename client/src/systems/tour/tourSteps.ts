import type { CellType } from '@/types/organelle'
import { getOrganelleByIdOrThrow } from '@/data/organelles'

export interface TourStep {
  /** Unique id for this step, used for progress tracking and navigation */
  id: string
  /** The organelle this step focuses the camera on */
  organelleId: string
  /** Short narrative line shown as the tour transitions to this step */
  narration: string
  /** Whether the camera should trigger the organelle's animation automatically on arrival */
  autoPlayAnimation?: boolean
}

export interface TourScript {
  cellType: CellType
  title: string
  introNarration: string
  steps: TourStep[]
  outroNarration: string
}

/**
 * Validates that every organelle referenced in a tour actually exists
 * in the registry. Throws early and loudly during development rather
 * than failing silently deep inside a 3D scene component.
 */
function validateTourSteps(steps: TourStep[]): TourStep[] {
  for (const step of steps) {
    getOrganelleByIdOrThrow(step.organelleId) // throws if missing
  }
  return steps
}

export const animalCellTour: TourScript = {
  cellType: 'animal',
  title: 'Inside an Animal Cell',
  introNarration:
    'Welcome inside a living animal cell. Every structure you\'re about to see works together, ' +
    'every second, to keep this cell alive. Let\'s start at the control center.',
  steps: validateTourSteps([
    {
      id: 'animal-tour-1',
      organelleId: 'nucleus',
      narration:
        'This is the nucleus — the cell\'s command center, holding the complete genetic instructions ' +
        'for everything the cell does.',
      autoPlayAnimation: false,
    },
    {
      id: 'animal-tour-2',
      organelleId: 'endoplasmic-reticulum',
      narration:
        'Right next door, the endoplasmic reticulum is already at work, building and folding proteins ' +
        'based on instructions sent out from the nucleus.',
      autoPlayAnimation: true,
    },
    {
      id: 'animal-tour-3',
      organelleId: 'golgi-apparatus',
      narration:
        'Those proteins move on to the Golgi apparatus, where they\'re finished, labeled, and shipped ' +
        'to exactly where they need to go.',
      autoPlayAnimation: true,
    },
    {
      id: 'animal-tour-4',
      organelleId: 'mitochondrion',
      narration:
        'None of this happens for free. The mitochondria are the cell\'s power plants, converting fuel ' +
        'into the energy currency every other process depends on.',
      autoPlayAnimation: true,
    },
    {
      id: 'animal-tour-5',
      organelleId: 'lysosome',
      narration:
        'When something breaks down or needs recycling, the lysosomes step in — the cell\'s cleanup ' +
        'and demolition crew.',
      autoPlayAnimation: true,
    },
    {
      id: 'animal-tour-6',
      organelleId: 'ribosome',
      narration:
        'Scattered throughout, ribosomes are constantly reading genetic instructions and building the ' +
        'proteins this entire operation depends on.',
      autoPlayAnimation: true,
    },
    {
      id: 'animal-tour-7',
      organelleId: 'cell-membrane',
      narration:
        'And holding it all together, the cell membrane decides exactly what gets in and what gets ' +
        'out — the final checkpoint between this cell and the world outside it.',
      autoPlayAnimation: true,
    },
  ]),
  outroNarration:
    'That\'s a complete animal cell — a self-contained, self-sustaining system, smaller than you can ' +
    'see, doing all of this at once, right now, in nearly every cell in your body.',
}

export const plantCellTour: TourScript = {
  cellType: 'plant',
  title: 'Inside a Plant Cell',
  introNarration:
    'Plant cells share a lot with animal cells, but they carry a few extraordinary tools animal cells ' +
    'don\'t have. Let\'s see what makes them different.',
  steps: validateTourSteps([
    {
      id: 'plant-tour-1',
      organelleId: 'cell-wall',
      narration:
        'The first thing you\'d notice from outside: a rigid cell wall, built from cellulose, giving ' +
        'this cell real structural strength.',
      autoPlayAnimation: false,
    },
    {
      id: 'plant-tour-2',
      organelleId: 'chloroplast',
      narration:
        'Inside, the chloroplasts are doing something animal cells simply cannot do — capturing ' +
        'sunlight and turning it directly into food.',
      autoPlayAnimation: true,
    },
    {
      id: 'plant-tour-3',
      organelleId: 'vacuole',
      narration:
        'This enormous central vacuole isn\'t just storage — it\'s under pressure, literally, pushing ' +
        'outward to keep the whole cell rigid and upright.',
      autoPlayAnimation: true,
    },
    {
      id: 'plant-tour-4',
      organelleId: 'nucleus',
      narration:
        'Just like an animal cell, the nucleus still holds the master genetic instructions for ' +
        'everything happening here.',
      autoPlayAnimation: false,
    },
    {
      id: 'plant-tour-5',
      organelleId: 'mitochondrion',
      narration:
        'And even though this cell can make its own food, it still needs mitochondria to convert that ' +
        'food into usable energy.',
      autoPlayAnimation: true,
    },
    {
      id: 'plant-tour-6',
      organelleId: 'cell-membrane',
      narration:
        'Just inside the rigid wall, the cell membrane still performs the same gatekeeping job it does ' +
        'in every cell on Earth.',
      autoPlayAnimation: true,
    },
  ]),
  outroNarration:
    'That\'s a plant cell — armored, self-feeding, and pressurized from within. It\'s a completely ' +
    'different survival strategy from the animal cell, built from many of the same core parts.',
}

export const prokaryoticCellTour: TourScript = {
  cellType: 'prokaryotic',
  title: 'Inside a Prokaryotic Cell',
  introNarration:
    'This cell looks nothing like the last two — and that\'s the point. No nucleus, no internal ' +
    'organelles, and yet it\'s one of the most successful forms of life on the planet.',
  steps: validateTourSteps([
    {
      id: 'prok-tour-1',
      organelleId: 'nucleoid-region',
      narration:
        'There\'s no nucleus here. Instead, the cell\'s DNA is simply concentrated in this region — ' +
        'out in the open, with nothing enclosing it.',
      autoPlayAnimation: true,
    },
    {
      id: 'prok-tour-2',
      organelleId: 'ribosome',
      narration:
        'Even without a nucleus, this cell still needs ribosomes to build proteins — the same job they ' +
        'do in every living cell, everywhere.',
      autoPlayAnimation: true,
    },
    {
      id: 'prok-tour-3',
      organelleId: 'cell-wall',
      narration:
        'A rigid cell wall protects this cell too, but it\'s built from an entirely different material ' +
        'than a plant\'s — peptidoglycan, not cellulose.',
      autoPlayAnimation: false,
    },
    {
      id: 'prok-tour-4',
      organelleId: 'flagellum',
      narration:
        'This cell can move — powered by a flagellum that doesn\'t whip like a tail, but actually ' +
        'spins, like a tiny motor.',
      autoPlayAnimation: true,
    },
    {
      id: 'prok-tour-5',
      organelleId: 'pili',
      narration:
        'And these short pili aren\'t for movement at all — they\'re for gripping onto surfaces, or ' +
        'even connecting to another bacterial cell to share genetic material directly.',
      autoPlayAnimation: true,
    },
    {
      id: 'prok-tour-6',
      organelleId: 'cell-membrane',
      narration:
        'Underneath the wall, the same fundamental membrane structure found in every cell on Earth is ' +
        'still hard at work, controlling exactly what crosses in and out.',
      autoPlayAnimation: true,
    },
  ]),
  outroNarration:
    'No nucleus. No internal organelles. And yet prokaryotic cells like this one are the oldest, most ' +
    'abundant, and most adaptable life forms on the planet — proof that simplicity, done well, works.',
}

export const tourScriptsByCellType: Record<CellType, TourScript> = {
  animal: animalCellTour,
  plant: plantCellTour,
  prokaryotic: prokaryoticCellTour,
}