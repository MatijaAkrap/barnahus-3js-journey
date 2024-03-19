import { useGLTF, useTexture } from '@react-three/drei'

function WaitingRoom10to17() {
  const bakedTexture = useTexture('./textures/waitingRoom10to17.jpg')
  bakedTexture.flipY = false
  const { nodes }: any = useGLTF('./scene/waitingRoom10to17.glb')

  console.log('nodes', nodes)
  return (
    <mesh position={[0, -2, 0]} geometry={nodes.Cube3179.geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}

export { WaitingRoom10to17 }

useGLTF.preload('./scene/waitingRoom10to17.glb')
