import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva, useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { PerspectiveCamera } from '@react-three/drei'
import { WaitingRoom3to9 } from './models/WaitingRoom3to9'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Experience = () => {
  const controls = useControls({
    fov: {
      value: 50,
      min: 10,
      max: 100,
      step: 0.5,
    },
  })

  return (
    <BrowserRouter>
      <Leva
        collapsed={false}
        oneLineLabels={false}
        flat={true}
        theme={{
          sizes: {
            titleBarHeight: '28px',
          },
          fontSizes: {
            root: '10px',
          },
        }}
      />
      <Canvas>
        <Perf position='top-left' />
        <OrbitControls
          makeDefault
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
          maxDistance={5.9}
        />
        <PerspectiveCamera
          makeDefault
          position={[4, 0, 4.4]}
          near={1}
          far={50}
          fov={controls.fov}
        />
        <Routes>
          <Route path='/' element={<WaitingRoom3to9 />} />
          <Route path='/waitingRoom3to9' element={<WaitingRoom3to9 />} />
        </Routes>
      </Canvas>
    </BrowserRouter>
  )
}

export default Experience
