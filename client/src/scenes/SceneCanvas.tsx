import { Suspense, type ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'

interface SceneCanvasProps {
  children: ReactNode
  backgroundColor?: string
  autoRotate?: boolean
  /** Initial camera distance from center — larger scenes need to start further back */
  initialCameraDistance?: number
}

function SceneLoadingFallback() {
  return null
}

export function SceneCanvas({
  children,
  backgroundColor = '#0a0e17',
  autoRotate = false,
  initialCameraDistance = 14,
}: SceneCanvasProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      style={{ background: backgroundColor, width: '100%', height: '100%' }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 2, initialCameraDistance]}
        fov={50}
        near={0.05}
        far={200}
      />

      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        minDistance={0.5}
        maxDistance={40}
        autoRotate={autoRotate}
        autoRotateSpeed={0.4}
      />

      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-6, -4, -4]} intensity={0.3} color="#4fd1c5" />

      <Environment preset="studio" environmentIntensity={0.5} />

      <Suspense fallback={<SceneLoadingFallback />}>{children}</Suspense>
    </Canvas>
  )
}