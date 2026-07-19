import { useState } from 'react'
import { Edges } from '@react-three/drei'
import type { CellType } from '@/types/organelle'
import { BOUNDARY_ORGANELLE_ID_BY_CELL_TYPE } from '@/organelles/boundaryOrganelles'

interface CellBoundaryMeshProps {
  cellType: CellType
  isSelected: boolean
  onSelect: (organelleId: string) => void
}

interface BoundaryShapeConfig {
  color: string
  baseOpacity: number
  render: () => JSX.Element
}

const BOUNDARY_SHAPE_CONFIG: Record<CellType, BoundaryShapeConfig> = {
  animal: {
    color: '#4fd1c5',
    baseOpacity: 0.06,
    render: () => <sphereGeometry args={[9, 48, 48]} />,
  },
  plant: {
    color: '#6ee7b7',
    baseOpacity: 0.05,
    render: () => <boxGeometry args={[17, 15, 14]} />,
  },
  prokaryotic: {
    color: '#f0abfc',
    baseOpacity: 0.07,
    render: () => <capsuleGeometry args={[4, 9, 8, 24]} />,
  },
}

export function CellBoundaryMesh({ cellType, isSelected, onSelect }: CellBoundaryMeshProps) {
  const [isHovered, setIsHovered] = useState(false)
  const config = BOUNDARY_SHAPE_CONFIG[cellType]
  const boundaryOrganelleId = BOUNDARY_ORGANELLE_ID_BY_CELL_TYPE[cellType]

  // Prokaryotic cells are rod-shaped — the capsule needs a 90° rotation
  // to lie horizontally, matching the classic bacillus silhouette.
  const rotation: [number, number, number] = cellType === 'prokaryotic' ? [0, 0, Math.PI / 2] : [0, 0, 0]

  const opacity = isSelected ? config.baseOpacity * 3 : isHovered ? config.baseOpacity * 2 : config.baseOpacity

  return (
    <mesh
      rotation={rotation}
      onClick={(event) => {
        event.stopPropagation()
        onSelect(boundaryOrganelleId)
      }}
      onPointerOver={(event) => {
        event.stopPropagation()
        setIsHovered(true)
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        setIsHovered(false)
        document.body.style.cursor = 'auto'
      }}
    >
      {config.render()}
      <meshStandardMaterial
        color={config.color}
        transparent
        opacity={opacity}
        roughness={0.15}
        metalness={0}
        depthWrite={false}
      />
      <Edges color={config.color} threshold={1} />
    </mesh>
  )
}