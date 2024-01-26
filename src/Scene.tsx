import { OrbitControls, OrthographicCamera, useGLTF, useTexture } from '@react-three/drei'
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

  const bakedTexture = useTexture('./textures/waitingRoom3to9_baked2.png')
  bakedTexture.flipY = false
  const { nodes }: any = useGLTF('./scene/waitingRoom3to9.glb')

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
      {/* <OrthographicCamera
        makeDefault
        // position={[4, 0, 4.4]}
        position={[0, 0, 0]}
        // near={1}
        far={50}
        // fov={controls.fov}
      /> */}
      <mesh
        // position={[0.2, 1, 7.5]}
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
