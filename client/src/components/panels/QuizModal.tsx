import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { buildQuizSessionForOrganelle, scoreQuizSession, type QuizSessionQuestion } from '@/systems/quiz/quizEngine'
import { useProgressStore } from '@/systems/progress/progressStore'
import { organelleById } from '@/data/organelles'

interface QuizModalProps {
  organelleId: string | null
  onClose: () => void
}

export function QuizModal({ organelleId, onClose }: QuizModalProps) {
  const recordQuizAttempt = useProgressStore((state) => state.recordQuizAttempt)

  const [questions, setQuestions] = useState<QuizSessionQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [selectedOptionsByQuestionId, setSelectedOptionsByQuestionId] = useState<Record<string, string>>({})
  const [isComplete, setIsComplete] = useState(false)

  const organelle = organelleId ? organelleById[organelleId] : null

  // Build a fresh session whenever a new organelle's quiz is opened.
  const sessionKey = organelleId
  useMemo(() => {
    if (!organelle) return
    setQuestions(buildQuizSessionForOrganelle(organelle))
    setCurrentIndex(0)
    setSelectedOptionId(null)
    setHasAnswered(false)
    setSelectedOptionsByQuestionId({})
    setIsComplete(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionKey])

  const currentQuestion = questions[currentIndex]
  const isLastQuestion = currentIndex === questions.length - 1

  function handleSelectOption(optionId: string) {
    if (hasAnswered) return
    setSelectedOptionId(optionId)
  }

  function handleSubmitAnswer() {
    if (!selectedOptionId || !currentQuestion || !organelleId) return

    const correctOption = currentQuestion.options.find((option) => option.isCorrect)
    const wasCorrect = correctOption?.id === selectedOptionId

    recordQuizAttempt(organelleId, currentQuestion.id, wasCorrect)
    setSelectedOptionsByQuestionId((prev) => ({ ...prev, [currentQuestion.id]: selectedOptionId }))
    setHasAnswered(true)
  }

  function handleNext() {
    if (isLastQuestion) {
      setIsComplete(true)
      return
    }
    setCurrentIndex((prev) => prev + 1)
    setSelectedOptionId(null)
    setHasAnswered(false)
  }

  function handleClose() {
    onClose()
  }

  const result = isComplete
    ? scoreQuizSession(questions, selectedOptionsByQuestionId)
    : null

  return (
    <AnimatePresence>
      {organelle && currentQuestion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 14, 23, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 30,
            padding: 'var(--space-xl)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            onClick={(event) => event.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '520px',
              background: 'var(--color-bg-elevated)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-panel)',
              padding: 'var(--space-xl)',
            }}
          >
            {!isComplete && (
              <>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    {organelle.name} — Question {currentIndex + 1} of {questions.length}
                  </p>
                  <button
                    onClick={handleClose}
                    aria-label="Close quiz"
                    style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}
                  >
                    ✕
                  </button>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 'var(--space-lg)' }}>
                  {currentQuestion.prompt}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  {currentQuestion.options.map((option) => {
                    const isSelected = selectedOptionId === option.id
                    const showCorrect = hasAnswered && option.isCorrect
                    const showIncorrect = hasAnswered && isSelected && !option.isCorrect

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelectOption(option.id)}
                        disabled={hasAnswered}
                        style={{
                          textAlign: 'left',
                          padding: 'var(--space-md)',
                          borderRadius: 'var(--radius-md)',
                          border: `1px solid ${
                            showCorrect
                              ? 'var(--color-accent-primary)'
                              : showIncorrect
                                ? 'var(--color-accent-danger)'
                                : isSelected
                                  ? 'var(--color-accent-secondary)'
                                  : 'var(--color-border)'
                          }`,
                          background: showCorrect
                            ? 'rgba(79, 209, 197, 0.1)'
                            : showIncorrect
                              ? 'rgba(252, 129, 129, 0.1)'
                              : isSelected
                                ? 'rgba(167, 139, 250, 0.08)'
                                : 'var(--color-bg-secondary)',
                          color: 'var(--color-text-primary)',
                          fontSize: '0.9rem',
                          cursor: hasAnswered ? 'default' : 'pointer',
                        }}
                      >
                        {option.text}
                      </button>
                    )
                  })}
                </div>

                <AnimatePresence>
                  {hasAnswered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          marginTop: 'var(--space-md)',
                          fontSize: '0.85rem',
                          color: 'var(--color-text-secondary)',
                          lineHeight: 1.6,
                        }}
                      >
                        {currentQuestion.explanation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div style={{ marginTop: 'var(--space-lg)', display: 'flex', justifyContent: 'flex-end' }}>
                  {!hasAnswered ? (
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={!selectedOptionId}
                      style={{
                        padding: 'var(--space-sm) var(--space-lg)',
                        borderRadius: 'var(--radius-sm)',
                        background: selectedOptionId ? 'var(--color-accent-primary)' : 'var(--color-border)',
                        color: 'var(--color-bg-primary)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                      }}
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      style={{
                        padding: 'var(--space-sm) var(--space-lg)',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--color-accent-primary)',
                        color: 'var(--color-bg-primary)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                      }}
                    >
                      {isLastQuestion ? 'See Results' : 'Next Question'}
                    </button>
                  )}
                </div>
              </>
            )}

            {isComplete && result && (
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-sm)' }}>
                  {organelle.name} Quiz Complete
                </p>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 'var(--space-xs)' }}>
                  {result.accuracyPercent}%
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)' }}>
                  {result.correctCount} of {result.totalQuestions} correct
                </p>
                <button
                  onClick={handleClose}
                  style={{
                    padding: 'var(--space-sm) var(--space-xl)',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--color-accent-primary)',
                    color: 'var(--color-bg-primary)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                  }}
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}