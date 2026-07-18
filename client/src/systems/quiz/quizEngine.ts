import type { Organelle, QuizQuestion, CellType } from '@/types/organelle'
import { getOrganellesForCellType } from '@/data/organelles'

export interface QuizSessionQuestion extends QuizQuestion {
  /** The organelle this question belongs to, carried along for display/context */
  organelleId: string
  organelleName: string
}

export interface QuizSessionResult {
  totalQuestions: number
  correctCount: number
  incorrectCount: number
  accuracyPercent: number
  missedQuestionIds: string[]
}

/**
 * Fisher-Yates shuffle — used to randomize question order and answer option order
 * without the subtle bias that naive `Array.sort(() => Math.random() - 0.5)` introduces.
 */
function shuffle<T>(items: T[]): T[] {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/**
 * Collects every quiz question belonging to organelles in a given cell type,
 * flattened into a single list with organelle context attached.
 */
function collectQuestionsForCellType(cellType: CellType): QuizSessionQuestion[] {
  const organelles = getOrganellesForCellType(cellType)

  return organelles.flatMap((organelle: Organelle) =>
    organelle.quizQuestions.map((question) => ({
      ...question,
      organelleId: organelle.id,
      organelleName: organelle.name,
    }))
  )
}

/**
 * Builds a shuffled quiz session for a given cell type.
 * Also shuffles each question's answer options, so the correct
 * answer isn't always in the same position.
 *
 * @param cellType - Which cell type's questions to draw from
 * @param questionCount - Max number of questions to include (defaults to all available)
 */
export function buildQuizSession(
  cellType: CellType,
  questionCount?: number
): QuizSessionQuestion[] {
  const allQuestions = collectQuestionsForCellType(cellType)
  const shuffledQuestions = shuffle(allQuestions)

  const selected = questionCount
    ? shuffledQuestions.slice(0, questionCount)
    : shuffledQuestions

  return selected.map((question) => ({
    ...question,
    options: shuffle(question.options),
  }))
}

/**
 * Builds a quiz session scoped to a single organelle — used when a user
 * takes a quiz directly from an organelle's detail panel, rather than
 * a full cell-wide quiz.
 */
export function buildQuizSessionForOrganelle(organelle: Organelle): QuizSessionQuestion[] {
  return organelle.quizQuestions.map((question) => ({
    ...question,
    organelleId: organelle.id,
    organelleName: organelle.name,
    options: shuffle(question.options),
  }))
}

/**
 * Scores a completed quiz session given the user's selected option id
 * for each question, keyed by question id.
 */
export function scoreQuizSession(
  questions: QuizSessionQuestion[],
  selectedOptionIdsByQuestionId: Record<string, string>
): QuizSessionResult {
  let correctCount = 0
  const missedQuestionIds: string[] = []

  for (const question of questions) {
    const selectedOptionId = selectedOptionIdsByQuestionId[question.id]
    const correctOption = question.options.find((option) => option.isCorrect)
    const wasCorrect = Boolean(correctOption && selectedOptionId === correctOption.id)

    if (wasCorrect) {
      correctCount += 1
    } else {
      missedQuestionIds.push(question.id)
    }
  }

  const totalQuestions = questions.length
  const incorrectCount = totalQuestions - correctCount
  const accuracyPercent =
    totalQuestions === 0 ? 0 : Math.round((correctCount / totalQuestions) * 100)

  return {
    totalQuestions,
    correctCount,
    incorrectCount,
    accuracyPercent,
    missedQuestionIds,
  }
}