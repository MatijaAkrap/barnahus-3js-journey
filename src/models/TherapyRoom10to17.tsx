import { useGLTF, useTexture } from '@react-three/drei'

function TherapyRoom10to17() {
  const bakedTexture = useTexture('./textures/therapyRoom10to17.jpg')
  bakedTexture.flipY = false
  const { nodes }: any = useGLTF('./scene/therapyRoom10to17.glb')

  console.log('nodes', nodes)
  return (
    <mesh position={[0, -2, 0]} geometry={nodes.Cube2987.geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}

export { TherapyRoom10to17 }

useGLTF.preload('./scene/therapyRoom10to17.glb')
