import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { PerspectiveCamera } from '@react-three/drei'
import { WaitingRoom3to9 } from './models/WaitingRoom3to9'
import { useRef, useState } from 'react'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { WaitingRoom10to17 } from './models/WaitingRoom10to17'
import { TherapyRoom3to9 } from './models/TherapyRoom3to9'
import { TherapyRoom10to17 } from './models/TherapyRoom10to17'

const Experience = () => {
  const orbitControlsRef = useRef<OrbitControlsImpl>(null)
  const cameraRef = useRef<any>(null)
  const [room, setRoom] = useState('/waitingRoom3to9')
  // const navigate = useNavigate()

  const cameraPostionControls = useControls('Camera position controls', {
    EnebleCameraPositionControl: {
      label: 'Eneble',
      value: false,
    },
    CameraOnCenter: {
      label: 'Position',
      value: 0.5,
      min: 0,
      max: 6,
      step: 0.01,
    },
  })

  useControls({
    Room: {
      value: '/waitingRoom3to9',
      options: [
        '/waitingRoom3to9',
        '/waitingRoom10to17',
        '/therapyRoom3to9',
        '/therapyRoom10to17',
      ],
      onChange: (value) => {
        setRoom(value)
        // navigate(value)
      },
    },
  })

  useFrame(() => {
    const controls = orbitControlsRef.current
    const camera = cameraRef.current
    const distance = controls?.getDistance()
    const smoothZoomFactor = 0.4

    if (distance) {
      const targetZoom = 5.9 - distance
      const currentZoom = camera!.zoom

      const newZoom = currentZoom + smoothZoomFactor * ((targetZoom - currentZoom) / 10)

      camera!.zoom = Math.max(newZoom / 1.1, 1)
      camera!.updateProjectionMatrix()
    }
  })

  return (
    <>
      <Perf position='top-left' />
      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
        maxDistance={5.9}
        rotateSpeed={-0.3}
        ref={orbitControlsRef}
      />
      <PerspectiveCamera
        makeDefault
        // position={[4, 0, 4.4]}
        position={
          cameraPostionControls.EnebleCameraPositionControl
            ? [0, 0, cameraPostionControls.CameraOnCenter]
            : [4, 0, 4.4]
        }
        near={1}
        far={50}
        ref={cameraRef}
      />
      {room === '/waitingRoom3to9' && <WaitingRoom3to9 />}
      {room === '/waitingRoom10to17' && <WaitingRoom10to17 />}
      {room === '/therapyRoom3to9' && <TherapyRoom3to9 />}
      {room === '/therapyRoom10to17' && <TherapyRoom10to17 />}
      {/* <Routes>
        <Route path='/' element={<WaitingRoom3to9 />} />
        <Route path='/waitingRoom3to9' element={<WaitingRoom3to9 />} />
        <Route path='/waitingRoom10to17' element={<WaitingRoom10to17 />} />
      </Routes> */}
    </>
  )
}

export default Experience
