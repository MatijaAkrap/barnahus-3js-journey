import { useGLTF, useTexture } from '@react-three/drei'

const InterviewRoom3to9 = () => {
  const bakedTexture = useTexture('./textures/interviewRoom3to9.jpg')
  bakedTexture.flipY = false
  const { nodes }: any = useGLTF('./scene/interviewRoom3to9.glb')

  console.log('nodes', nodes)
  return (
    <mesh position={[0, -2, 0]} geometry={nodes.Cube3185.geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}

export { InterviewRoom3to9 }

useGLTF.preload('./scene/interviewRoom3to9.glb')
