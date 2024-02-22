import { useGLTF, useTexture } from '@react-three/drei'
import { useMemo } from 'react'
import { MeshBasicMaterial } from 'three'

function WaitingRoom3to9() {
  const { hash, pathname, search } = location
  const bakedTexture1 = useTexture('./textures/1.jpg')
  bakedTexture1.flipY = false
  const BakedMaterial1 = useMemo(() => new MeshBasicMaterial({ map: bakedTexture1 }), [])
  const bakedTexture2 = useTexture('./textures/2.jpg')
  bakedTexture2.flipY = false
  const BakedMaterial2 = useMemo(() => new MeshBasicMaterial({ map: bakedTexture2 }), [])
  const bakedTexture3 = useTexture('./textures/3.jpg')
  bakedTexture3.flipY = false
  const BakedMaterial3 = useMemo(() => new MeshBasicMaterial({ map: bakedTexture3 }), [])
  const waitingRoom3to9: any = useGLTF('./scene/waitingRoom3to9.glb')

  const applyBakedMaterial = (object: any) => {
    object.traverse((child: any) => {
      if (child.isMesh) {
        if (child.name.includes('Cube524')) {
          child.material = BakedMaterial1
        } else if (child.name.includes('Cube2358')) {
          child.material = BakedMaterial2
        } else if (child.name.includes('Cylinder1029')) {
          child.material = BakedMaterial3
        }
        child.material.toneMapped = false
        child.material.fog = false
      }
    })
  }

  applyBakedMaterial(waitingRoom3to9.scene)
  console.log('waitingRoom3to9', waitingRoom3to9)
  return (
    <>
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
        <meshStandardMaterial map={bakedTexture1} />
        <meshStandardMaterial map={bakedTexture2} />
        <meshStandardMaterial map={bakedTexture3} />
      </mesh>
    </>
  )
}

export { WaitingRoom3to9 }

useGLTF.preload('./scene/waitingRoom3to9.glb')

// import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
// import { Perf } from 'r3f-perf'
// import { PerspectiveCamera } from '@react-three/drei'
// import { useEffect, useRef } from 'react'
// import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
// import { useFrame } from '@react-three/fiber'

// function Scene() {
//   const bakedTexture1 = useTexture('./textures/1.jpg')
//   bakedTexture1.flipY = false
//   const bakedTexture2 = useTexture('./textures/2.jpg')
//   bakedTexture2.flipY = false
//   const bakedTexture3 = useTexture('./textures/3.jpg')
//   bakedTexture3.flipY = false
//   const waitingRoom3to9: any = useGLTF('./scene/waitingRoom3to9.glb')
//   // const { nodes }: any = useGLTF('./scene/waitingRoom3to9_bck.glb')
//   const orbitControlsRef = useRef<OrbitControlsImpl>(null)
//   const cameraRef = useRef<any>(null)

//   useFrame(() => {
//     const controls = orbitControlsRef.current
//     const camera = cameraRef.current
//     const distance = controls?.getDistance()
//     const smoothZoomFactor = 0.4

//     if (distance) {
//       const targetZoom = 5.9 - distance
//       const currentZoom = camera!.zoom

//       const newZoom = currentZoom + smoothZoomFactor * ((targetZoom - currentZoom) / 10)

//       camera!.zoom = Math.max(newZoom / 1.1, 1)
//       camera!.updateProjectionMatrix()
//     }
//   })

//   const applyBakedMaterial = (object: any) => {
//     object.traverse((child: any) => {
//       if (child.isMesh && child.name.includes('Cube')) {
//         child.material = [bakedTexture1, bakedTexture2, bakedTexture3]

//         child.material.toneMapped = false
//         child.material.fog = false
//       }
//     })
//     console.log('waiting room traverse', waitingRoom3to9)
//   }

//   applyBakedMaterial(waitingRoom3to9.scene)
//   console.log('waiting room', waitingRoom3to9)
//   return (
//     <>
//       <Perf position='top-left' />
//       <OrbitControls
//         makeDefault
//         // minPolarAngle={Math.PI / 2.1}
//         // maxPolarAngle={Math.PI / 2.1}
//         maxDistance={5.9}
//         ref={orbitControlsRef}
//       />
//       <PerspectiveCamera
//         makeDefault
//         position={[4, 0, 4.4]}
//         near={1}
//         far={50}
//         ref={cameraRef}
//       />
//       <ambientLight intensity={0.2} />

//       <primitive position={[0, -2.2, 0]} object={waitingRoom3to9.scene} />
//       {/* <mesh
//         // position={[0.2, 1, 7.5]}
//         position={[0, -1, 0]}
//         // rotation-z={300.02}
//         // rotation-y={-300}
//         geometry={nodes.Cube049.geometry}
//       >
//         <meshBasicMaterial map={bakedTexture} />
//       </mesh> */}
//     </>
//   )
// }

// export { Scene }

// useGLTF.preload('./scene/waitingRoom3to9.glb')
