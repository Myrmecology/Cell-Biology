import { useState } from 'react'
import { Edges } from '@react-three/drei'
import type { CellType, Organelle } from '@/types/organelle'

interface CellShellMeshProps {
  organelle: Organelle
  cellType: CellType
  isSelected: boolean
  onSelect: (organelleId: string) => void
}

interface ShellShapeConfig {
  color: string
  baseOpacity: number
  render: () => JSX.Element
  rotation?: [number, number, number]
}

/**
 * Shape configs for outer shell organelles, sized slightly larger than
 * the corresponding boundary shell in CellBoundaryMesh so this layer
 * visibly wraps around it rather than overlapping/z-fighting with it.
 */
const SHELL_SHAPE_CONFIG: Record<string, Partial<Record<CellType, ShellShapeConfig>>> = {
  capsule: {
    prokaryotic: {
      color: '#fbcfe8',
      baseOpacity: 0.045,
      rotation: [0, 0, Math.PI / 2],
      render: () => <capsuleGeometry args={[4.9, 9, 8, 24]} />,
    },
  },
}

export function CellShellMesh({ organelle, cellType, isSelected, onSelect }: CellShellMeshProps) {
  const [isHovered, setIsHovered] = useState(false)

  const config = SHELL_SHAPE_CONFIG[organelle.id]?.[cellType]
  if (!config) return null

  const opacity = isSelected ? config.baseOpacity * 3 : isHovered ? config.baseOpacity * 2 : config.baseOpacity

  return (
    <mesh
      rotation={config.rotation ?? [0, 0, 0]}
      onClick={(event) => {
        event.stopPropagation()
        onSelect(organelle.id)
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
        roughness={0.4}
        metalness={0}
        depthWrite={false}
      />
      <Edges color={config.color} threshold={1} />
    </mesh>
  )
}