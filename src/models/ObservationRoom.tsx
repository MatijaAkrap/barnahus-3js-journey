import { useGLTF, useTexture } from '@react-three/drei'

function ObservationRoom() {
  const bakedTexture = useTexture('./textures/observationRoom.jpg')
  bakedTexture.flipY = false
  const { nodes }: any = useGLTF('./scene/observationRoom.glb')

  console.log('nodes', nodes)
  return (
    <mesh position={[0, -2.7, 0]} geometry={nodes.Cube2870.geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}

export { ObservationRoom }

useGLTF.preload('./scene/observationRoom.glb')
