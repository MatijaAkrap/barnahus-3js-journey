import { useAnimations, useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useState } from 'react'

const MascotBreathingExciresize = () => {
  const [expirenceStarted, setExpirenceStarted] = useState(true)
  const mascotBreathingExciresize: any = useGLTF('./scene/mascotBreathingExciresize.glb')
  const mascotRoom: any = useGLTF('./scene/mascotRoom.glb')
  const bakedTexture = useTexture('./textures/mascotBreathingExciresizeBackground.jpg')
  bakedTexture.flipY = false
  const { nodes }: any = useGLTF('./scene/mascotBreathingExciresizeBackground.glb')
  const animationsMascotBreathingExciresize = useAnimations(
    mascotBreathingExciresize.animations,
    mascotBreathingExciresize.scene
  )
  const animationsMascotRoom = useAnimations(mascotRoom.animations, mascotRoom.scene)
  const fox = useGLTF('./scene/glTF/Fox.gltf')
  const animationsFox = useAnimations(fox.animations, fox.scene)

  useEffect(() => {
    // if (expirenceStarted) {
    const actionsMascotBreathingExciresize = Object.values(
      animationsMascotBreathingExciresize.actions
    )[0]
    actionsMascotBreathingExciresize?.play()

    console.log(
      'actionsMascotBreathingExciresize',
      Object.values(animationsMascotBreathingExciresize.actions)
    )
    // const actionsMascotRoom = animationsMascotRoom.actions['Armature.003Action.002']
    // console.log('actionsMascotRoom4', actionsMascotRoom)
    // actionsMascotRoom?.play()
    const actionsMascotRoom2 = animationsMascotRoom.actions['Hop']
    actionsMascotRoom2?.play()
    // const actionsMascotRoom6 = animationsMascotRoom.actions['Tail']
    // actionsMascotRoom6?.play()

    const actionsFox = animationsFox.actions['Run']
    actionsFox?.play()

    // Object.keys(actions).map((key) => {
    //   actions[key]?.play()
    //   // actions[0]?.play()
    // })

    // const vibrationInterval = setInterval(() => {
    //   if ('vibrate' in navigator) {
    //     navigator.vibrate(500)
    //   } else {
    //     // Fallback for iOS using AudioToolbox
    //     var audio = new AudioContext()
    //     var oscillator = audio.createOscillator()
    //     oscillator.type = 'square'
    //     oscillator.connect(audio.destination)
    //     oscillator.start()
    //     setTimeout(function () {
    //       oscillator.stop()
    //     }, 500)
    //   }
    // }, 4666.66650772)

    // const animationInterval = setInterval(() => {
    //   Object.keys(actions).map((key) => actions[key]?.reset().play())
    // }, 10000)

    // // Clean up the interval when the component unmounts
    // return () => {
    //   // clearInterval(vibrationInterval)
    //   clearInterval(animationInterval)
    // }
    // }
  }, [])

  // mascotBreathingExciresize.materials['Mascot Face - Breathing'].colorWrite = true
  // mascotRoom.materials['Mascot White.001'].visible = true
  // console.log(
  //   'Mascot Face - Breathing',
  //   mascotBreathingExciresize.materials['Mascot Face - Breathing']
  // )
  // console.log('Mascot White.001', mascotBreathingExciresize.materials['Mascot White.001'])
  // console.log('Mascot White.001', mascotBreathingExciresize)
  return (
    <>
      <ambientLight intensity={2} />
      {/* <pointLight castShadow intensity={0.05} /> */}
      {/* <primitive
        scale={0.2}
        // position={[0, -10, -120]}
        object={mascotRoom.scene}
      /> */}
      <primitive
        scale={0.6}
        position={[0, 0, 0]}
        rotation-y={2.3}
        rotation-x={2.3}
        object={mascotBreathingExciresize.scene}
      />
      {/* <primitive
        scale={0.02}
        position={[-1, -1, 0]}
        rotation-y={-0.31}
        object={fox.scene}
      /> */}
      {/* <primitive object={fox.scene} scale={0.02} position={[0, 0, 0]} rotation-y={0.3} /> */}
      <mesh scale={0.8} position={[0, -3, 0]} geometry={nodes.Plane694.geometry}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </>
  )
}

export default MascotBreathingExciresize

useGLTF.preload('./scene/mascotBreathingExciresize.glb')
useGLTF.preload('./scene/mascotBreathingExciresizeBackground.glb')
