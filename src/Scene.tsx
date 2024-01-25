import { OrbitControls, OrthographicCamera, useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useMemo } from 'react'
import { MeshBasicMaterial, TextureLoader } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { PerspectiveCamera } from '@react-three/drei'
import { useControls } from 'leva'

function Scene() {
  const controls = useControls({
    bakedShadows: false,
    fov: {
      value: 50,
      min: 10,
      max: 100,
      step: 0.5,
    },
  })

  const BakedTexture = useLoader(TextureLoader, './textures/waitingRoom3to9_Baked.png')
  BakedTexture.flipY = false
  const BakedMaterial = useMemo(() => new MeshBasicMaterial({ map: BakedTexture }), [])

  const bezierCurveBakedTexture = useLoader(
    TextureLoader,
    './textures/waitingRoom3to9_Baked1.png'
  )
  bezierCurveBakedTexture.flipY = false
  const bezierCurveBakedMaterial = useMemo(
    () => new MeshBasicMaterial({ map: bezierCurveBakedTexture }),
    []
  )

  const cubeCurveBakedTexture = useLoader(
    TextureLoader,
    './textures/waitingRoom3to9_Baked2.png'
  )
  cubeCurveBakedTexture.flipY = false
  const cubeCurveBakedMaterial = useMemo(
    () => new MeshBasicMaterial({ map: cubeCurveBakedTexture }),
    []
  )

  const cylinderCurveBakedTexture = useLoader(
    TextureLoader,
    './textures/waitingRoom3to9_Baked3.png'
  )
  cylinderCurveBakedTexture.flipY = false
  const cylinderCurveBakedMaterial = useMemo(
    () => new MeshBasicMaterial({ map: cylinderCurveBakedTexture }),
    []
  )

  const waitingRoom3to9 = useLoader(GLTFLoader, './scene/waitingRoom3to92.glb')

  const waitingRoom3to9WithoutBakedTexture: any = useGLTF('./scene/waitingRoom3to92.glb')
  console.log(waitingRoom3to9WithoutBakedTexture)

  const applyBakedMaterial = (object: any) => {
    object.traverse((child: any) => {
      // if (child.isMesh && child.name.includes('BezierCurve')) {
      //   child.material = bezierCurveBakedMaterial
      // }
      // if (child.isMesh && child.name.includes('Cube')) {
      //   child.material = cubeCurveBakedMaterial
      // }
      if (child.isMesh && child.name.includes('Cylinder')) {
        child.material = BakedMaterial
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
      {/* <OrthographicCamera
        makeDefault
        position={[4, 0, 4.4]}
        near={1}
        far={50}
      /> */}
      {!controls.bakedShadows ? (
        <>
          <ambientLight intensity={0.8} />
          <directionalLight castShadow position={[7, 5, 6]} intensity={1.15} />
          <primitive
            position={[0, -2.2, 0]}
            object={waitingRoom3to9WithoutBakedTexture.scene}
          />
        </>
      ) : (
        <primitive position={[0, -2.2, 0]} object={waitingRoom3to9.scene} />
      )}
    </>
  )
}

export { Scene }

useGLTF.preload('./scene/waitingRoom3to92.glb')
