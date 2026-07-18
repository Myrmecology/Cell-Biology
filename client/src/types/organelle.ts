/**
 * Core data model for organelles across all cell types.
 * This is the single source of truth that scenes, detail panels,
 * quizzes, and the tour system all read from.
 */

export type CellType = 'animal' | 'plant' | 'prokaryotic'

export interface Vector3Tuple {
  x: number
  y: number
  z: number
}

export interface QuizOption {
  id: string
  text: string
  isCorrect: boolean
}

export interface QuizQuestion {
  id: string
  prompt: string
  options: QuizOption[]
  explanation: string
}

export interface OrganelleImageQuery {
  /** Search terms used against the science image API for this organelle */
  query: string
  /** Fallback attribution text if the API doesn't return usable credit info */
  fallbackAttribution?: string
}

export interface OrganelleAnimation {
  /** Identifier used by the animation system to trigger the correct sequence */
  animationId: string
  /** Short label shown on the "play animation" button */
  label: string
  /** Approximate duration in seconds, used for UI timing/progress indicators */
  durationSeconds: number
}

export interface Organelle {
  /** Unique, stable identifier — used as a React key and for progress tracking */
  id: string

  /** Which cell type(s) this organelle appears in */
  cellTypes: CellType[]

  /** Display name, e.g. "Mitochondrion" */
  name: string

  /** Plural form for UI copy, e.g. "Mitochondria" */
  pluralName: string

  /** One or two sentence summary shown by default when clicked */
  shortDescription: string

  /** Full, in-depth educational content shown on "expand" */
  deepDescription: string

  /** Primary biological function, stated plainly */
  function: string

  /** Optional real-world analogy to aid understanding */
  analogy?: string

  /**
   * Notes on how this structure compares across cell types —
   * e.g. how a prokaryote handles the same job without this organelle.
   */
  comparisonNotes?: Partial<Record<CellType, string>>

  /** Position within the 3D scene, per cell type (layouts can differ) */
  scenePosition: Partial<Record<CellType, Vector3Tuple>>

  /** Relative scale multiplier for the 3D model, per cell type */
  sceneScale?: Partial<Record<CellType, number>>

  /** Behavioral animation metadata, if one exists for this organelle */
  animation?: OrganelleAnimation

  /** Science image API query metadata */
  imageQuery?: OrganelleImageQuery

  /** Quiz questions specific to this organelle */
  quizQuestions: QuizQuestion[]
}

export interface CellDefinition {
  cellType: CellType
  displayName: string
  description: string
  /** Accent color CSS variable name, matches global.css tokens */
  accentColorVar: string
  organelleIds: string[]
}