import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3, Quaternion, type Group } from 'three'
import type { Organelle, CellType } from '@/types/organelle'

interface AppendageMeshProps {
  organelle: Organelle
  cellType: CellType
  isSelected: boolean
  onSelect: (organelleId: string) => void
  positionScale?: number
}

/**
 * Computes how far the cell boundary actually is in a given direction,
 * matching each cell type's real shell shape rather than a single uniform
 * "radius" — critical for the prokaryotic capsule, which is much longer
 * along its axis than it is wide.
 */
function getBoundaryDistance(direction: Vector3, cellType: CellType): number {
  switch (cellType) {
    case 'animal': {
      // Sphere, radius 9 — uniform in every direction.
      return 9
    }
    case 'plant': {
      // Box, half-extents (8.5, 7.5, 7) — distance to the nearest face
      // along this ray, via standard ray-vs-box math.
      const halfExtents = new Vector3(8.5, 7.5, 7)
      const tX = halfExtents.x / Math.max(Math.abs(direction.x), 1e-6)
      const tY = halfExtents.y / Math.max(Math.abs(direction.y), 1e-6)
      const tZ = halfExtents.z / Math.max(Math.abs(direction.z), 1e-6)
      return Math.min(tX, tY, tZ)
    }
    case 'prokaryotic': {
      // Capsule, rotated so its long axis runs along world X.
      // Approximated as an ellipsoid with semi-axes (8.5, 4, 4) — long
      // reach along X (the rod's length), short reach along Y/Z (its width).
      const semiAxes = new Vector3(8.5, 4, 4)
      const normalized = new Vector3(
        direction.x / semiAxes.x,
        direction.y / semiAxes.y,
        direction.z / semiAxes.z
      )
      return 1 / Math.max(normalized.length(), 1e-6)
    }
  }
}

interface AppendageConfig {
  color: string
  emissive: string
  radiusTop: number
  radiusBottom: number
  length: number
  spins: boolean
}

const APPENDAGE_CONFIG: Record<string, AppendageConfig> = {
  flagellum: {
    color: '#fbbf24',
    emissive: '#5c4a0f',
    radiusTop: 0.12,
    radiusBottom: 0.28,
    length: 4.5,
    spins: true,
  },
  pili: {
    color: '#fca5a5',
    emissive: '#5c1f1f',
    radiusTop: 0.05,
    radiusBottom: 0.08,
    length: 1.4,
    spins: false,
  },
}

export function AppendageMesh({
  organelle,
  cellType,
  isSelected,
  onSelect,
}: AppendageMeshProps) {
  const groupRef = useRef<Group>(null)
  const [isHovered, setIsHovered] = useState(false)

  const config = APPENDAGE_CONFIG[organelle.id]
  const rawPosition = organelle.scenePosition[cellType]

  const { anchorPoint, quaternion } = useMemo(() => {
    if (!rawPosition) return { anchorPoint: null, quaternion: null }

    const direction = new Vector3(rawPosition.x, rawPosition.y, rawPosition.z)
    if (direction.lengthSq() === 0) direction.set(1, 0, 0)
    direction.normalize()

    const reach = getBoundaryDistance(direction, cellType)
    const anchor = direction.clone().multiplyScalar(reach)

    const quat = new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), direction)

    return { anchorPoint: anchor, quaternion: quat }
  }, [rawPosition, cellType])

  useFrame((_, delta) => {
    if (!groupRef.current || !config?.spins) return
    groupRef.current.rotation.y += delta * 3
  })

  if (!anchorPoint || !quaternion || !config) return null

  const displayScale = isSelected ? 1.2 : isHovered ? 1.1 : 1

  return (
    <group
      ref={groupRef}
      position={anchorPoint}
      quaternion={quaternion}
      scale={displayScale}
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
      <mesh position={[0, config.length / 2, 0]} castShadow>
        <cylinderGeometry args={[config.radiusTop, config.radiusBottom, config.length, 16]} />
        <meshStandardMaterial
          color={config.color}
          emissive={isSelected || isHovered ? config.emissive : '#000000'}
          emissiveIntensity={isSelected ? 0.6 : isHovered ? 0.3 : 0}
          roughness={0.3}
          metalness={0.15}
        />
      </mesh>
    </group>
  )
}