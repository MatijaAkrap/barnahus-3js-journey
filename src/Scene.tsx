import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { PerspectiveCamera } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

function Scene() {
  const bakedTexture = useTexture('./textures/waitingRoom3to9_baked.png')
  bakedTexture.flipY = false
  const { nodes }: any = useGLTF('./scene/waitingRoom3to9.glb')
  const orbitControlsRef = useRef<OrbitControlsImpl>(null)
  const cameraRef = useRef<any>(null)

  useFrame(() => {
    const controls = orbitControlsRef.current
    const camera = cameraRef.current
    const distance = controls?.getDistance()
    const smoothZoomFactor = 0.4

    if (distance) {
      const targetZoom = 5.9 - distance
      const currentZoom = camera!.zoom

      const newZoom = currentZoom + smoothZoomFactor * ((targetZoom - currentZoom) / 10)

      camera!.zoom = Math.max(newZoom / 1.1, 1)
      camera!.updateProjectionMatrix()
    }
  })

  return (
    <>
      <Perf position='top-left' />
      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
        maxDistance={5.9}
        ref={orbitControlsRef}
      />
      <PerspectiveCamera
        makeDefault
        position={[4, 0, 4.4]}
        near={1}
        far={50}
        ref={cameraRef}
      />
      <mesh
        position={[0.2, 1, 7.5]}
        rotation-z={300.02}
        rotation-y={-300}
        geometry={nodes.Wall_2025.geometry}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </>
  )
}

export { Scene }

useGLTF.preload('./scene/waitingRoom3to9.glb')
