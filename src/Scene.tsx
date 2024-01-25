import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { PerspectiveCamera } from '@react-three/drei'
import { useControls } from 'leva'

function Scene() {
  const controls = useControls({
    fov: {
      value: 50,
      min: 10,
      max: 100,
      step: 0.5,
    },
  })
  const bakedTexture = useTexture('./textures/waitingRoom3to9_Baked.png')
  bakedTexture.flipY = false
  const waitingRoom3to9: any = useGLTF('./scene/waitingRoom3to9.glb')

  return (
    <>
      <Perf position='top-left' />
      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
        maxDistance={5.9}
      />
      <PerspectiveCamera
        makeDefault
        position={[4, 0, 4.4]}
        near={1}
        far={50}
        fov={controls.fov}
      />
      <mesh>
        <primitive position={[0, -2.2, 0]} object={waitingRoom3to9.scene} />
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
    </>
  )
}

export { Scene }

useGLTF.preload('./scene/waitingRoom3to9.glb')
