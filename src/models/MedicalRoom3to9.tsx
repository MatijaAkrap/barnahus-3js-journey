import { useGLTF, useTexture } from '@react-three/drei'

function MedicalRoom3to9() {
  const bakedTexture = useTexture('./textures/medicalRoom3to9.jpg')
  bakedTexture.flipY = false
  const { nodes }: any = useGLTF('./scene/medicalRoom3to9.glb')

  console.log('nodes', nodes)
  return (
    <mesh position={[0, -2, 0]} geometry={nodes.Cube3022.geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}

export { MedicalRoom3to9 }

useGLTF.preload('./scene/medicalRoom3to9.glb')
