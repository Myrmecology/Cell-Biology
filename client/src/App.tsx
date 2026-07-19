import { useState } from 'react'
import type { CellType } from '@/types/organelle'
import { AnimalCellScene } from '@/scenes/AnimalCell/AnimalCellScene'
import { PlantCellScene } from '@/scenes/PlantCell/PlantCellScene'
import { ProkaryoticCellScene } from '@/scenes/ProkaryoticCell/ProkaryoticCellScene'
import { OrganelleDetailPanel } from '@/components/panels/OrganelleDetailPanel'
import { CellTypeSwitcher } from '@/components/layout/CellTypeSwitcher'

function App() {
  const [activeCellType, setActiveCellType] = useState<CellType>('animal')
  const [selectedOrganelleId, setSelectedOrganelleId] = useState<string | null>(null)

  function handleSelectCellType(cellType: CellType) {
    setActiveCellType(cellType)
    // Clear any selected organelle when switching cells — an organelle
    // selected in one cell type may not exist (or make sense) in another.
    setSelectedOrganelleId(null)
  }

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
      {activeCellType === 'animal' && (
        <AnimalCellScene onOrganelleSelect={setSelectedOrganelleId} />
      )}
      {activeCellType === 'plant' && (
        <PlantCellScene onOrganelleSelect={setSelectedOrganelleId} />
      )}
      {activeCellType === 'prokaryotic' && (
        <ProkaryoticCellScene onOrganelleSelect={setSelectedOrganelleId} />
      )}

      <CellTypeSwitcher activeCellType={activeCellType} onSelectCellType={handleSelectCellType} />

      <OrganelleDetailPanel
        organelleId={selectedOrganelleId}
        cellType={activeCellType}
        onClose={() => setSelectedOrganelleId(null)}
        onStartQuiz={handleStartQuiz}
        onPlayAnimation={handlePlayAnimation}
      />
    </div>
  )
}

export default App