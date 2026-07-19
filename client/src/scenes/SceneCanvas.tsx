import { Suspense, type ReactNode, useRef, useEffect, useMemo } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Vector3 } from 'three'

interface SceneCanvasProps {
  children: ReactNode
  backgroundColor?: string
  autoRotate?: boolean
  initialCameraDistance?: number
  focusPoint?: Vector3 | null
  focusDistance?: number
}

function SceneLoadingFallback() {
  return null
}

const ARRIVAL_THRESHOLD = 0.05

/**
 * Manages OrbitControls and smoothly flies the camera toward a focus point
 * when one is provided. Critically, the flight animation only runs during
 * the transition — it stops the instant the camera arrives, AND the instant
 * the user manually interacts with the controls (drag/scroll/pinch), so it
 * never fights the user for control.
 */
function FocusRig({
  focusPoint,
  focusDistance,
  defaultCameraPosition,
  autoRotate,
}: {
  focusPoint: Vector3 | null
  focusDistance: number
  defaultCameraPosition: Vector3
  autoRotate: boolean
}) {
  const controlsRef = useRef<React.ElementRef<typeof OrbitControls>>(null)
  const { camera } = useThree()

  const desiredTarget = useRef(new Vector3(0, 0, 0))
  const desiredCameraPos = useRef(defaultCameraPosition.clone())
  const isTransitioning = useRef(false)

  // Whenever the focus target changes, kick off a new transition.
  useEffect(() => {
    const controls = controlsRef.current

    if (focusPoint) {
      desiredTarget.current.copy(focusPoint)

      const currentTarget = controls?.target ?? new Vector3(0, 0, 0)
      const approachDirection = camera.position.clone().sub(currentTarget)

      if (approachDirection.lengthSq() < 0.001) {
        approachDirection.set(0, 0.3, 1)
      }
      approachDirection.normalize()

      desiredCameraPos.current.copy(
        focusPoint.clone().add(approachDirection.multiplyScalar(focusDistance))
      )
    } else {
      desiredTarget.current.set(0, 0, 0)
      desiredCameraPos.current.copy(defaultCameraPosition)
    }

    isTransitioning.current = true
  }, [focusPoint, focusDistance, camera, defaultCameraPosition])

  // The instant the user manually grabs the controls, cancel any
  // in-progress automated flight so we stop fighting their input.
  useEffect(() => {
    const controls = controlsRef.current
    if (!controls) return

    const handleUserInteractionStart = () => {
      isTransitioning.current = false
    }

    controls.addEventListener('start', handleUserInteractionStart)
    return () => controls.removeEventListener('start', handleUserInteractionStart)
  }, [])

  useFrame((_, delta) => {
    const controls = controlsRef.current
    if (!controls || !isTransitioning.current) return

    const lerpFactor = Math.min(1, delta * 3)

    controls.target.lerp(desiredTarget.current, lerpFactor)
    camera.position.lerp(desiredCameraPos.current, lerpFactor)
    controls.update()

    const distanceRemaining = camera.position.distanceTo(desiredCameraPos.current)
    if (distanceRemaining < ARRIVAL_THRESHOLD) {
      isTransitioning.current = false
    }
  })

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enableDamping
      dampingFactor={0.08}
      minDistance={0.5}
      maxDistance={40}
      autoRotate={autoRotate}
      autoRotateSpeed={0.4}
    />
  )
}

export function SceneCanvas({
  children,
  backgroundColor = '#0a0e17',
  autoRotate = false,
  initialCameraDistance = 14,
  focusPoint = null,
  focusDistance = 4,
}: SceneCanvasProps) {
  const defaultCameraPosition = useMemo(
    () => new Vector3(0, 2, initialCameraDistance),
    [initialCameraDistance]
  )

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      style={{ background: backgroundColor, width: '100%', height: '100%' }}
    >
      <PerspectiveCamera
        makeDefault
        position={defaultCameraPosition}
        fov={50}
        near={0.05}
        far={200}
      />

      <FocusRig
        focusPoint={focusPoint}
        focusDistance={focusDistance}
        defaultCameraPosition={defaultCameraPosition}
        autoRotate={autoRotate && !focusPoint}
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