import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CellType } from '@/types/organelle'

interface QuizAttemptRecord {
  /** Organelle id this quiz question belongs to */
  organelleId: string
  /** Quiz question id */
  questionId: string
  /** Whether the most recent attempt was correct */
  wasCorrect: boolean
  /** Number of attempts made on this question */
  attempts: number
}

interface ProgressState {
  /** Organelle ids the user has clicked/viewed at least once, per cell type */
  viewedOrganelleIds: Record<CellType, string[]>

  /** Quiz attempt history, keyed by `${organelleId}:${questionId}` */
  quizAttempts: Record<string, QuizAttemptRecord>

  /** Cell types where the guided tour has been completed */
  completedTours: CellType[]

  /** Marks an organelle as viewed for a given cell type */
  markOrganelleViewed: (cellType: CellType, organelleId: string) => void

  /** Records the result of a quiz question attempt */
  recordQuizAttempt: (
    organelleId: string,
    questionId: string,
    wasCorrect: boolean
  ) => void

  /** Marks a cell type's guided tour as complete */
  markTourCompleted: (cellType: CellType) => void

  /** Returns how many organelles have been viewed for a given cell type */
  getViewedCount: (cellType: CellType) => number

  /** Returns overall quiz accuracy as a percentage (0-100), or null if no attempts yet */
  getQuizAccuracy: () => number | null

  /** Resets all progress — used by the reset button in settings */
  resetProgress: () => void
}

const emptyViewedState: Record<CellType, string[]> = {
  animal: [],
  plant: [],
  prokaryotic: [],
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      viewedOrganelleIds: emptyViewedState,
      quizAttempts: {},
      completedTours: [],

      markOrganelleViewed: (cellType, organelleId) => {
        set((state) => {
          const alreadyViewed = state.viewedOrganelleIds[cellType].includes(organelleId)
          if (alreadyViewed) return state

          return {
            viewedOrganelleIds: {
              ...state.viewedOrganelleIds,
              [cellType]: [...state.viewedOrganelleIds[cellType], organelleId],
            },
          }
        })
      },

      recordQuizAttempt: (organelleId, questionId, wasCorrect) => {
        set((state) => {
          const key = `${organelleId}:${questionId}`
          const existing = state.quizAttempts[key]

          return {
            quizAttempts: {
              ...state.quizAttempts,
              [key]: {
                organelleId,
                questionId,
                wasCorrect,
                attempts: (existing?.attempts ?? 0) + 1,
              },
            },
          }
        })
      },

      markTourCompleted: (cellType) => {
        set((state) => {
          if (state.completedTours.includes(cellType)) return state
          return { completedTours: [...state.completedTours, cellType] }
        })
      },

      getViewedCount: (cellType) => {
        return get().viewedOrganelleIds[cellType].length
      },

      getQuizAccuracy: () => {
        const attempts = Object.values(get().quizAttempts)
        if (attempts.length === 0) return null

        const correctCount = attempts.filter((attempt) => attempt.wasCorrect).length
        return Math.round((correctCount / attempts.length) * 100)
      },

      resetProgress: () => {
        set({
          viewedOrganelleIds: emptyViewedState,
          quizAttempts: {},
          completedTours: [],
        })
      },
    }),
    {
      name: 'cell-biology-progress', // localStorage key
      version: 1,
    }
  )
)