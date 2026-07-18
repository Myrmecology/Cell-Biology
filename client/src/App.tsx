import { useState } from 'react'
import { AnimalCellScene } from '@/scenes/AnimalCell/AnimalCellScene'
import { OrganelleDetailPanel } from '@/components/panels/OrganelleDetailPanel'

function App() {
  const [selectedOrganelleId, setSelectedOrganelleId] = useState<string | null>(null)

  function handleStartQuiz(organelleId: string) {
    // TODO: wire up to the quiz modal once it's built
    console.log('Start quiz for:', organelleId)
  }

  function handlePlayAnimation(animationId: string) {
    // TODO: wire up to the animation player once it's built
    console.log('Play animation:', animationId)
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <AnimalCellScene onOrganelleSelect={setSelectedOrganelleId} />

      <OrganelleDetailPanel
        organelleId={selectedOrganelleId}
        cellType="animal"
        onClose={() => setSelectedOrganelleId(null)}
        onStartQuiz={handleStartQuiz}
        onPlayAnimation={handlePlayAnimation}
      />
    </div>
  )
}

export default App