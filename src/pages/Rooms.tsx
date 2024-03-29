import { OrbitControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import { useLocation } from 'react-router-dom'
import { InterviewRoom10to17 } from '../models/InterviewRoom10to17'
import { InterviewRoom3to9 } from '../models/InterviewRoom3to9'
import { MedicalRoom10to17 } from '../models/MedicalRoom10to17'
import { MedicalRoom3to9 } from '../models/MedicalRoom3to9'
import { ObservationRoom } from '../models/ObservationRoom'
import { TherapyRoom10to17 } from '../models/TherapyRoom10to17'
import { TherapyRoom3to9 } from '../models/TherapyRoom3to9'
import { WaitingRoom10to17 } from '../models/WaitingRoom10to17'
import { WaitingRoom3to9 } from '../models/WaitingRoom3to9'
import { RoomEnum } from '../common/enums/RoomEnum'
import { AgeGroupEnum } from '../common/enums/AgeGroupEnum'

interface CustomWindow extends Window {
  handleRoomChangeFromFlutter?: Function
}

const Rooms = () => {
  const orbitControlsRef = useRef<OrbitControlsImpl>(null)
  const cameraRef = useRef<any>(null)
  const [room, setRoom] = useState<string>()
  const [ageGroup, setAgeGroup] = useState<string>()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const roomParam = searchParams.get('roomId')
  const ageGroupParam = searchParams.get('ageGroup')

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

  const handleAgeGroup = (threeToNine: JSX.Element, tenToSeventeen: JSX.Element) => {
    return ageGroup === AgeGroupEnum.THREE_TO_NINE ? threeToNine : tenToSeventeen
  }

  const handleRooms = () => {
    switch (room) {
      case RoomEnum.WAITING:
        return handleAgeGroup(<WaitingRoom3to9 />, <WaitingRoom10to17 />)
      case RoomEnum.INTERVIEW:
        return handleAgeGroup(<InterviewRoom3to9 />, <InterviewRoom10to17 />)
      case RoomEnum.OBSERVATION:
        return <ObservationRoom />
      case RoomEnum.THERAPY:
        return handleAgeGroup(<TherapyRoom3to9 />, <TherapyRoom10to17 />)
      case RoomEnum.MEDICAL:
        return handleAgeGroup(<MedicalRoom3to9 />, <MedicalRoom10to17 />)
    }
  }

  const handleRoomChangeFromFlutter = (roomId: string, ageGroup: string) => {
    setRoom(roomId)
    setAgeGroup(ageGroup)
  }

  useEffect(() => {
    ;(window as CustomWindow).handleRoomChangeFromFlutter = handleRoomChangeFromFlutter

    if (roomParam) {
      setRoom(roomParam)
    }

    if (ageGroupParam) {
      setAgeGroup(ageGroupParam)
    }
  }, [])

  return (
    <>
      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
        enableRotate={true}
        maxDistance={room === '/observationRoom' ? 7.9 : 5.9}
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
        near={1}
        far={50}
        ref={cameraRef}
      />
      {handleRooms()}
    </>
  )
}

export default Rooms
