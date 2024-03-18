import { useGLTF, useTexture } from '@react-three/drei'

function TherapyRoom3to9() {
  const bakedTexture = useTexture('./textures/therapyRoom3to9.jpg')
  bakedTexture.flipY = false
  const { nodes }: any = useGLTF('./scene/therapyRoom3to9.glb')

  console.log('nodes', nodes)
  return (
    <mesh position={[0, -2, 0]} geometry={nodes.Cube2940.geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}

export { TherapyRoom3to9 }

useGLTF.preload('./scene/therapyRoom3to9.glb')
