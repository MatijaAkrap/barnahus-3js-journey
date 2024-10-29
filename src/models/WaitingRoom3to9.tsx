import { useAnimations, useGLTF, useTexture } from '@react-three/drei'

import { useRef } from 'react'
import { showCursorPointer, hideCursorPointer } from '../util/handleCursorPointer'

function WaitingRoom3to9() {
  const bakedTexture = useTexture('./textures/waitingRoom3to9.jpg')
  bakedTexture.flipY = false
  const { nodes }: any = useGLTF('./scene/waitingRoom3to9.glb')
  const mascotRoom: any = useGLTF('./scene/mascotRoom.glb')
  const animationsMascotRoom = useAnimations(mascotRoom.animations, mascotRoom.scene)
  const actionsMascotRoom = animationsMascotRoom.actions['Hop']
  const directionalLight: any = useRef()

  const handleMascotAnimations = () => {
    if (!actionsMascotRoom?.isRunning()) {
      actionsMascotRoom?.play()
      setTimeout(() => {
        actionsMascotRoom?.stop()
      }, 850)
    }
  }

  return (
    <>
      <directionalLight
        castShadow
        ref={directionalLight}
        position={[0, 2, 10]}
        rotation-y={2.3}
        rotation-x={2.3}
        intensity={2}
      />
      <mesh
        receiveShadow
        castShadow
        position={[0, -2, 0]}
        geometry={nodes.Cube994.geometry}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <primitive
        castShadow
        receiveShadow
        scale={0.2}
        position={[-0.1, -0.95, -6.5]}
        object={mascotRoom.scene}
        onClick={handleMascotAnimations}
        onPointerOver={showCursorPointer}
        onPointerOut={hideCursorPointer}
      />
    </>
  )
}

export { WaitingRoom3to9 }

useGLTF.preload('./scene/waitingRoom3to9.glb')
