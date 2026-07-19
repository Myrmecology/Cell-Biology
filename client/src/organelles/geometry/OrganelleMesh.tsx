import { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Edges } from '@react-three/drei'
import type { Mesh } from 'three'
import type { Organelle, CellType } from '@/types/organelle'

interface OrganelleMeshProps {
  organelle: Organelle
  cellType: CellType
  isSelected: boolean
  onSelect: (organelleId: string) => void
  /** Multiplies the organelle's base position outward from center, so scenes can be spaced out independently of the raw data values */
  positionScale?: number
}

type GeometryKind = 'sphere' | 'icosahedron' | 'capsule' | 'torus' | 'cylinder' | 'octahedron'

interface GeometryConfig {
  kind: GeometryKind
  color: string
  emissive: string
  roughness: number
  metalness: number
}

const GEOMETRY_CONFIG: Record<string, GeometryConfig> = {
  mitochondrion: { kind: 'capsule', color: '#f6ad55', emissive: '#7c3f0a', roughness: 0.35, metalness: 0.1 },
  nucleus: { kind: 'sphere', color: '#a78bfa', emissive: '#4c2f8c', roughness: 0.25, metalness: 0.05 },
  ribosome: { kind: 'octahedron', color: '#eef1f7', emissive: '#3a3f4d', roughness: 0.4, metalness: 0.2 },
  'cell-membrane': { kind: 'sphere', color: '#4fd1c5', emissive: '#0f3d38', roughness: 0.15, metalness: 0.0 },
  'cell-wall': { kind: 'sphere', color: '#6ee7b7', emissive: '#0f3d2b', roughness: 0.6, metalness: 0.0 },
  'endoplasmic-reticulum': { kind: 'torus', color: '#60a5fa', emissive: '#0f2d5c', roughness: 0.3, metalness: 0.1 },
  'golgi-apparatus': { kind: 'cylinder', color: '#f0abfc', emissive: '#5c0f52', roughness: 0.3, metalness: 0.15 },
  lysosome: { kind: 'sphere', color: '#fc8181', emissive: '#5c0f0f', roughness: 0.35, metalness: 0.05 },
  vacuole: { kind: 'sphere', color: '#93c5fd', emissive: '#1e3a5c', roughness: 0.1, metalness: 0.0 },
  chloroplast: { kind: 'capsule', color: '#4ade80', emissive: '#0f5c1f', roughness: 0.3, metalness: 0.1 },
  'nucleoid-region': { kind: 'icosahedron', color: '#a78bfa', emissive: '#4c2f8c', roughness: 0.4, metalness: 0.05 },
  flagellum: { kind: 'cylinder', color: '#fbbf24', emissive: '#5c4a0f', roughness: 0.25, metalness: 0.2 },
  pili: { kind: 'cylinder', color: '#fca5a5', emissive: '#5c1f1f', roughness: 0.3, metalness: 0.1 },
}

const DEFAULT_GEOMETRY_CONFIG: GeometryConfig = {
  kind: 'icosahedron',
  color: '#9aa5b8',
  emissive: '#232b3d',
  roughness: 0.4,
  metalness: 0.1,
}

function renderGeometry(kind: GeometryKind) {
  switch (kind) {
    case 'sphere':
      return <sphereGeometry args={[1, 32, 32]} />
    case 'icosahedron':
      return <icosahedronGeometry args={[1, 1]} />
    case 'capsule':
      return <capsuleGeometry args={[0.6, 1.2, 8, 16]} />
    case 'torus':
      return <torusGeometry args={[1, 0.35, 16, 48]} />
    case 'cylinder':
      return <cylinderGeometry args={[0.5, 0.5, 1.6, 24]} />
    case 'octahedron':
      return <octahedronGeometry args={[1, 0]} />
    default:
      return <icosahedronGeometry args={[1, 1]} />
  }
}

export function OrganelleMesh({
  organelle,
  cellType,
  isSelected,
  onSelect,
  positionScale = 1,
}: OrganelleMeshProps) {
  const meshRef = useRef<Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)

  const config = GEOMETRY_CONFIG[organelle.id] ?? DEFAULT_GEOMETRY_CONFIG

  const rawPosition = organelle.scenePosition[cellType]
  const baseScale = organelle.sceneScale?.[cellType] ?? 1

  const position = useMemo(() => {
    if (!rawPosition) return null
    return {
      x: rawPosition.x * positionScale,
      y: rawPosition.y * positionScale,
      z: rawPosition.z * positionScale,
    }
  }, [rawPosition, positionScale])

  const targetScale = useMemo(() => {
    if (isSelected) return baseScale * 1.15
    if (isHovered) return baseScale * 1.08
    return baseScale
  }, [baseScale, isSelected, isHovered])

  useFrame((state, delta) => {
    if (!meshRef.current || !position) return

    const current = meshRef.current.scale.x
    const next = current + (targetScale - current) * Math.min(1, delta * 8)
    meshRef.current.scale.setScalar(next)

    const t = state.clock.elapsedTime
    meshRef.current.position.y = position.y + Math.sin(t + position.x) * 0.03
  })

  if (!position) return null

  return (
    <mesh
      ref={meshRef}
      position={[position.x, position.y, position.z]}
      castShadow
      receiveShadow
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
      {renderGeometry(config.kind)}
      <meshStandardMaterial
        color={config.color}
        emissive={isSelected || isHovered ? config.emissive : '#000000'}
        emissiveIntensity={isSelected ? 0.6 : isHovered ? 0.3 : 0}
        roughness={config.roughness}
        metalness={config.metalness}
      />
      {isSelected && <Edges color="#ffffff" threshold={15} />}
    </mesh>
  )
}