import { create } from 'zustand'
import type { CellType } from '@/types/organelle'
import { tourScriptsByCellType, type TourScript, type TourStep } from './tourSteps'
import { useProgressStore } from '@/systems/progress/progressStore'

interface TourEngineState {
  /** Whether a guided tour is currently active */
  isActive: boolean

  /** The cell type currently being toured, or null if inactive */
  activeCellType: CellType | null

  /** Index of the current step within the active tour's step list */
  currentStepIndex: number

  /** Derived getter: the full tour script for the active cell type */
  getActiveScript: () => TourScript | null

  /** Derived getter: the current step object, or null if inactive/finished */
  getCurrentStep: () => TourStep | null

  /** Starts a guided tour for the given cell type, from the beginning */
  startTour: (cellType: CellType) => void

  /** Advances to the next step; marks the tour complete if this was the last step */
  goToNextStep: () => void

  /** Goes back to the previous step; does nothing if already at the first step */
  goToPreviousStep: () => void

  /** Jumps directly to a specific step index, clamped to valid range */
  goToStep: (stepIndex: number) => void

  /** Ends the tour early without marking it complete */
  exitTour: () => void
}

export const useTourEngine = create<TourEngineState>((set, get) => ({
  isActive: false,
  activeCellType: null,
  currentStepIndex: 0,

  getActiveScript: () => {
    const { activeCellType } = get()
    if (!activeCellType) return null
    return tourScriptsByCellType[activeCellType]
  },

  getCurrentStep: () => {
    const script = get().getActiveScript()
    if (!script) return null
    return script.steps[get().currentStepIndex] ?? null
  },

  startTour: (cellType) => {
    set({
      isActive: true,
      activeCellType: cellType,
      currentStepIndex: 0,
    })
  },

  goToNextStep: () => {
    const { activeCellType, currentStepIndex } = get()
    const script = get().getActiveScript()
    if (!script || !activeCellType) return

    const isLastStep = currentStepIndex >= script.steps.length - 1

    if (isLastStep) {
      useProgressStore.getState().markTourCompleted(activeCellType)
      set({ isActive: false, activeCellType: null, currentStepIndex: 0 })
      return
    }

    set({ currentStepIndex: currentStepIndex + 1 })
  },

  goToPreviousStep: () => {
    const { currentStepIndex } = get()
    if (currentStepIndex === 0) return
    set({ currentStepIndex: currentStepIndex - 1 })
  },

  goToStep: (stepIndex) => {
    const script = get().getActiveScript()
    if (!script) return

    const clampedIndex = Math.max(0, Math.min(stepIndex, script.steps.length - 1))
    set({ currentStepIndex: clampedIndex })
  },

  exitTour: () => {
    set({ isActive: false, activeCellType: null, currentStepIndex: 0 })
  },
}))