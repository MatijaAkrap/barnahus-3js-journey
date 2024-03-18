import { useGLTF, useTexture } from '@react-three/drei'

function MedicalRoom10to17() {
  const bakedTexture = useTexture('./textures/medicalRoom10to17.jpg')
  bakedTexture.flipY = false
  const { nodes }: any = useGLTF('./scene/medicalRoom10to17.glb')

  console.log('nodes', nodes)
  return (
    <mesh position={[0, -2, 0]} geometry={nodes.Cube3118.geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}

export { MedicalRoom10to17 }

useGLTF.preload('./scene/medicalRoom10to17.glb')
