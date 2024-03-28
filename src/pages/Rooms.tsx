import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { PerspectiveCamera } from '@react-three/drei'
import { useRef, useState } from 'react'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { useLocation } from 'react-router-dom'
import { InterviewRoom10to17 } from '../models/InterviewRoom10to17'
import { InterviewRoom3to9 } from '../models/InterviewRoom3to9'
import MascotBreathingExciresize from '../models/MascotBreathingExciresize'
import { MedicalRoom10to17 } from '../models/MedicalRoom10to17'
import { MedicalRoom3to9 } from '../models/MedicalRoom3to9'
import { ObservationRoom } from '../models/ObservationRoom'
import { TherapyRoom10to17 } from '../models/TherapyRoom10to17'
import { TherapyRoom3to9 } from '../models/TherapyRoom3to9'
import { WaitingRoom10to17 } from '../models/WaitingRoom10to17'
import { WaitingRoom3to9 } from '../models/WaitingRoom3to9'

const Rooms = () => {
  const orbitControlsRef = useRef<OrbitControlsImpl>(null)
  const cameraRef = useRef<any>(null)
  const [room, setRoom] = useState('/waitingRoom3to9')
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  // const navigate = useNavigate()

  useControls({
    Room: {
      value: '/waitingRoom3to9',
      options: [
        '/waitingRoom3to9',
        '/waitingRoom10to17',
        '/therapyRoom3to9',
        '/therapyRoom10to17',
        '/medicalRoom3to9',
        '/medicalRoom10to17',
        '/interviewRoom3to9',
        '/interviewRoom10to17',
        '/observationRoom',
        '/mascotBreathingExciresize',
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
        // minPolarAngle={Math.PI / 2.1}
        // maxPolarAngle={Math.PI / 2.1}
        enableRotate={true}
        // enableRotate={room !== '/mascotBreathingExciresize'}
        // maxDistance={room === '/observationRoom' ? 7.9 : 5.9}
        maxDistance={22}
        rotateSpeed={-0.3}
        ref={orbitControlsRef}
      />
      <PerspectiveCamera
        makeDefault
        position={
          room === '/mascotBreathingExciresize'
            ? [0, 0, 4]
            : [4, 0, room === '/observationRoom' ? 6.9 : 4.4]
        }
        // position={
        //   cameraPostionControls.EnebleCameraPositionControl
        //     ? [0, 0, cameraPostionControls.CameraOnCenter]
        //     : [4, 0, room === '/observationRoom' ? 6.9 : 4.4]
        // }
        near={1}
        far={50}
        ref={cameraRef}
      />
      {room === '/waitingRoom3to9' && <WaitingRoom3to9 />}
      {room === '/waitingRoom10to17' && <WaitingRoom10to17 />}
      {room === '/therapyRoom3to9' && <TherapyRoom3to9 />}
      {room === '/therapyRoom10to17' && <TherapyRoom10to17 />}
      {room === '/medicalRoom3to9' && <MedicalRoom3to9 />}
      {room === '/medicalRoom10to17' && <MedicalRoom10to17 />}
      {room === '/interviewRoom3to9' && <InterviewRoom3to9 />}
      {room === '/interviewRoom10to17' && <InterviewRoom10to17 />}
      {room === '/observationRoom' && <ObservationRoom />}
      {room === '/mascotBreathingExciresize' && <MascotBreathingExciresize />}
      {/* <Routes>
          <Route path='/' element={<WaitingRoom3to9 />} />
          <Route path='/waitingRoom3to9' element={<WaitingRoom3to9 />} />
          <Route path='/waitingRoom10to17' element={<WaitingRoom10to17 />} />
        </Routes> */}
    </>
  )
}

export default Rooms
