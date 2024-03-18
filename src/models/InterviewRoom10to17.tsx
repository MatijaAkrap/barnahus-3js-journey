import { useGLTF, useTexture } from '@react-three/drei'

function InterviewRoom10to17() {
  const bakedTexture = useTexture('./textures/interviewRoom10to17.jpg')
  bakedTexture.flipY = false
  const { nodes }: any = useGLTF('./scene/interviewRoom10to17.glb')

  console.log('nodes', nodes)
  return (
    <mesh position={[0, -2, 0]} geometry={nodes.Cube3125.geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}

export { InterviewRoom10to17 }

useGLTF.preload('./scene/interviewRoom10to17.glb')
