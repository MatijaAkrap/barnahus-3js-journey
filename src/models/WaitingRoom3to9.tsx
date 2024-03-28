// import { useGLTF, useTexture } from '@react-three/drei'
// import { useMemo } from 'react'
// import { MeshBasicMaterial } from 'three'

// function WaitingRoom3to9() {
//   const { hash, pathname, search } = location
//   const bakedTexture1 = useTexture('./textures/1.png')
//   bakedTexture1.flipY = false
//   const BakedMaterial1 = useMemo(() => new MeshBasicMaterial({ map: bakedTexture1 }), [])
//   const bakedTexture2 = useTexture('./textures/2.png')
//   bakedTexture2.flipY = false
//   const BakedMaterial2 = useMemo(() => new MeshBasicMaterial({ map: bakedTexture2 }), [])
//   const bakedTexture3 = useTexture('./textures/3.png')
//   bakedTexture3.flipY = false
//   const BakedMaterial3 = useMemo(() => new MeshBasicMaterial({ map: bakedTexture3 }), [])
//   const waitingRoom3to9: any = useGLTF('./scene/waitingRoom3to9.glb')

//   const applyBakedMaterial = (object: any) => {
//     object.traverse((child: any) => {
//       if (child.isMesh) {
//         if (child.name.includes('Cube2420')) {
//           child.material = BakedMaterial1
//         } else if (child.name.includes('Cube2448')) {
//           child.material = BakedMaterial2
//         } else if (child.name.includes('Cylinder1456')) {
//           child.material = BakedMaterial3
//         }
//         child.material.toneMapped = false
//         child.material.fog = false
//       }
//     })
//   }

//   applyBakedMaterial(waitingRoom3to9.scene)
//   console.log('waitingRoom3to9', waitingRoom3to9)
//   return (
//     <>
//       {/* <primitive position={[0, -2.2, 0]} object={waitingRoom3to9.scene} /> */}
//       {/* {waitingRoom3to9.scene.traverse((child: any) => {
//         if (child.isMesh) {
//           const material = new MeshBasicMaterial({ map: bakedTexture })
//           return <mesh key={child.uuid} geometry={child.geometry} material={material} />
//         }
//         return null // Make sure to return null for non-mesh objects
//       })} */}
//       <mesh>
//         <primitive position={[0, -2.2, 0]} object={waitingRoom3to9.scene} />
//         <meshStandardMaterial map={bakedTexture1} />
//         <meshStandardMaterial map={bakedTexture2} />
//         <meshStandardMaterial map={bakedTexture3} />
//       </mesh>
//     </>
//   )
// }

// export { WaitingRoom3to9 }

// useGLTF.preload('./scene/waitingRoom3to9.glb')

import { useAnimations, useGLTF, useHelper, useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import { useRef } from 'react'
import { DirectionalLightHelper } from 'three'
import { showCursorPointer, hideCursorPointer } from '../util/handleCursorPointer'

function WaitingRoom3to9() {
  const bakedTexture = useTexture('./textures/waitingRoom3to9.jpg')
  bakedTexture.flipY = false
  const { nodes }: any = useGLTF('./scene/waitingRoom3to9.glb')
  const mascotRoom: any = useGLTF('./scene/mascotRoom.glb')
  const animationsMascotRoom = useAnimations(mascotRoom.animations, mascotRoom.scene)
  const actionsMascotRoom = animationsMascotRoom.actions['Hop']
  const directionalLight: any = useRef()
  useHelper(directionalLight, DirectionalLightHelper, 2, 'red')

  const handleMascotAnimations = () => {
    if (!actionsMascotRoom?.isRunning()) {
      actionsMascotRoom?.play()
      setTimeout(() => {
        actionsMascotRoom?.stop()
      }, 850)
    }
  }

  return (
    <>
      {/* <ambientLight intensity={1.8} /> */}
      <directionalLight
        castShadow
        ref={directionalLight}
        position={[0, 2, 10]}
        rotation-y={2.3}
        rotation-x={2.3}
        intensity={2}
        // shadow-mapSize-width={1024}
        // shadow-mapSize-height={1024}
        // shadow-camera-near={6}
        // shadow-camera-far={10}
        // shadow-camera-top={2}
        // shadow-camera-bottom={-2}
        // shadow-camera-left={-2}
        // shadow-camera-right={2}
      />
      <mesh
        receiveShadow
        castShadow
        position={[0, -2, 0]}
        geometry={nodes.Cube994.geometry}
      >
        <meshBasicMaterial map={bakedTexture} />
        {/* <meshStandardMaterial map={bakedTexture} /> */}
      </mesh>
      <primitive
        castShadow
        receiveShadow
        scale={0.2}
        position={[-0.1, -0.95, -6.5]}
        // position={[0, -10, -120]}
        object={mascotRoom.scene}
        onClick={handleMascotAnimations}
        onPointerOver={showCursorPointer}
        onPointerOut={hideCursorPointer}
      />
    </>
  )
}

export { WaitingRoom3to9 }

useGLTF.preload('./scene/waitingRoom3to9.glb')
