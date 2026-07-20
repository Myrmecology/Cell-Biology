import { useState } from 'react'
import { askTutor, ApiClientError } from '@/services/apiClient'

interface TutorPanelProps {
  organelleName: string
  cellType: string
}

interface ConversationTurn {
  question: string
  answer: string
}

/**
 * Very small, safe markdown renderer — handles only **bold** and paragraph
 * breaks, which is all our system prompt's output style actually uses.
 * Deliberately not a full markdown library, to avoid pulling in extra
 * dependencies or any HTML-injection risk from rendering raw markup.
 */
function renderSimpleMarkdown(text: string) {
  const paragraphs = text.split(/\n\s*\n/)

  return paragraphs.map((paragraph, pIndex) => {
    const parts = paragraph.split(/(\*\*[^*]+\*\*)/g)

    return (
      <p key={pIndex} style={{ marginBottom: 'var(--space-sm)' }}>
        {parts.map((part, partIndex) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={partIndex}>{part.slice(2, -2)}</strong>
          }
          return <span key={partIndex}>{part}</span>
        })}
      </p>
    )
  })
}

export function TutorPanel({ organelleName, cellType }: TutorPanelProps) {
  const [question, setQuestion] = useState('')
  const [conversation, setConversation] = useState<ConversationTurn[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleAsk() {
    const trimmedQuestion = question.trim()
    if (!trimmedQuestion || isLoading) return

    setIsLoading(true)
    setError(null)

    try {
      const result = await askTutor({
        question: trimmedQuestion,
        organelleContext: { name: organelleName, cellType },
      })
      setConversation((prev) => [...prev, { question: trimmedQuestion, answer: result.answer }])
      setQuestion('')
    } catch (err) {
      setError(err instanceof ApiClientError ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleAsk()
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
      {conversation.length > 0 && (
        <div
          className="scrollable"
          style={{
            maxHeight: '220px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-md)',
            paddingRight: 'var(--space-xs)',
          }}
        >
          {conversation.map((turn, index) => (
            <div key={index}>
              <p
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--color-accent-secondary)',
                  marginBottom: 'var(--space-xs)',
                }}
              >
                You asked: {turn.question}
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                {renderSimpleMarkdown(turn.answer)}
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <p style={{ fontSize: '0.8rem', color: 'var(--color-accent-danger)' }}>{error}</p>
      )}

      <div style={{ display: 'flex', gap: 'var(--space-xs)' }}>
        <input
          type="text"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Ask about the ${organelleName}...`}
          disabled={isLoading}
          style={{
            flex: 1,
            padding: 'var(--space-sm)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-border)',
            background: 'var(--color-bg-secondary)',
            color: 'var(--color-text-primary)',
            fontSize: '0.85rem',
          }}
        />
        <button
          onClick={handleAsk}
          disabled={isLoading || !question.trim()}
          style={{
            padding: 'var(--space-sm) var(--space-md)',
            borderRadius: 'var(--radius-sm)',
            background: isLoading || !question.trim() ? 'var(--color-border)' : 'var(--color-accent-primary)',
            color: 'var(--color-bg-primary)',
            fontSize: '0.8rem',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}
        >
          {isLoading ? 'Thinking…' : 'Ask'}
        </button>
      </div>
    </div>
  )
}