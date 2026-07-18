import { Suspense, type ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'

interface SceneCanvasProps {
  children: ReactNode
  /** Background color for this scene, typically the cell type's accent-adjacent dark tone */
  backgroundColor?: string
  /** Whether orbit controls should auto-rotate when idle (nice for a "showcase" idle state) */
  autoRotate?: boolean
}

/**
 * Simple loading fallback rendered inside the Canvas while 3D assets
 * (geometry, materials, textures) are still being constructed/loaded.
 * Must be valid inside a Canvas — no DOM elements here, only R3F-compatible output.
 */
function SceneLoadingFallback() {
  return null
}

export function SceneCanvas({
  children,
  backgroundColor = '#0a0e17',
  autoRotate = false,
}: SceneCanvasProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      style={{ background: backgroundColor, width: '100%', height: '100%' }}
    >
      <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={50} near={0.1} far={100} />

      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        minDistance={2}
        maxDistance={25}
        autoRotate={autoRotate}
        autoRotateSpeed={0.4}
      />

      {/* Core lighting rig — soft ambient fill plus a key light for depth and shadow definition */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-6, -4, -4]} intensity={0.3} color="#4fd1c5" />

      {/* Soft environment reflections for a polished, "in a lab" material feel */}
      <Environment preset="studio" environmentIntensity={0.5} />

      <Suspense fallback={<SceneLoadingFallback />}>{children}</Suspense>
    </Canvas>
  )
}