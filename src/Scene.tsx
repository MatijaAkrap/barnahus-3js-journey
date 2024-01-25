import { Center, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useMemo } from 'react'
import { MeshBasicMaterial } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
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
  const BakedMaterial = useMemo(() => new MeshBasicMaterial({ map: bakedTexture }), [])
  const waitingRoom3to9: any = useGLTF('./scene/waitingRoom3to9.glb')

  const applyBakedMaterial = (object: any) => {
    object.traverse((child: any) => {
      if (child.isMesh) {
        child.material = BakedMaterial
        child.material.toneMapped = false
        child.material.fog = false
      }
    })
  }

  applyBakedMaterial(waitingRoom3to9.scene)
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
      {/* <primitive position={[0, -2.2, 0]} object={waitingRoom3to9.scene} /> */}
      {/* {waitingRoom3to9.scene.traverse((child: any) => {
        if (child.isMesh) {
          const material = new MeshBasicMaterial({ map: bakedTexture })
          return <mesh key={child.uuid} geometry={child.geometry} material={material} />
        }
        return null // Make sure to return null for non-mesh objects
      })} */}
      <mesh>
        <primitive position={[0, -2.2, 0]} object={waitingRoom3to9.scene} />
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
    </>
  )
}

export { Scene }

useGLTF.preload('./scene/waitingRoom3to9.glb')
