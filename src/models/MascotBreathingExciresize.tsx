import { useAnimations, useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useState } from 'react'

const MascotBreathingExciresize = () => {
  const [expirenceStarted, setExpirenceStarted] = useState(false)
  const mascotBreathingExciresize: any = useGLTF('./scene/mascotBreathingExciresize.glb')
  const bakedTexture = useTexture('./textures/mascotBreathingExciresizeBackground.jpg')
  bakedTexture.flipY = false
  const { nodes }: any = useGLTF('./scene/mascotBreathingExciresizeBackground.glb')
  // const animations = useAnimations(
  //   mascotBreathingExciresize.animations,
  //   mascotBreathingExciresize.scene
  // )

  // useEffect(() => {
  //   if (expirenceStarted) {
  //     const actions = animations.actions
  //     Object.keys(actions).map((key) => {
  //       actions[key]!.repetitions = 1
  //       actions[key]?.reset().play()
  //     })

  //     const vibrationInterval = setInterval(() => {
  //       if ('vibrate' in navigator) {
  //         navigator.vibrate(500)
  //       } else {
  //         // Fallback for iOS using AudioToolbox
  //         var audio = new AudioContext()
  //         var oscillator = audio.createOscillator()
  //         oscillator.type = 'square'
  //         oscillator.connect(audio.destination)
  //         oscillator.start()
  //         setTimeout(function () {
  //           oscillator.stop()
  //         }, 500)
  //       }
  //     }, 4666.66650772)

  //     const animationInterval = setInterval(() => {
  //       Object.keys(actions).map((key) => actions[key]?.reset().play())
  //     }, 9333.333015441895)

  //     // Clean up the interval when the component unmounts
  //     return () => {
  //       clearInterval(vibrationInterval)
  //       clearInterval(animationInterval)
  //     }
  //   }
  // }, [expirenceStarted])

  console.log('mascotBreathingExciresize', nodes)
  return (
    // <primitive
    //   // scale={10}
    //   // position={[0, -10, -120]}
    //   object={mascotBreathingExciresize.scene}
    // />
    <mesh scale={0.8} position={[0, -3, 0]} geometry={nodes.Plane694.geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}

export default MascotBreathingExciresize

useGLTF.preload('./scene/mascotBreathingExciresize.glb')
useGLTF.preload('./scene/mascotBreathingExciresizeBackground.glb')
