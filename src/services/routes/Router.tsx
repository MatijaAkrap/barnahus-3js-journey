import { Canvas } from '@react-three/fiber'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Excercises from '../../pages/Excercises'
import Hello from '../../pages/Hello'
import Playground from '../../pages/Playground'
import Rooms from '../../pages/Rooms'
import { ROUTES } from './routes'

const AppRouter = () => {
  return (
    <Router>
      <Canvas>
        <Routes>
          <Route path={ROUTES.welcome} element={<Playground />} />
          <Route path={ROUTES.hello} element={<Hello />} />
          <Route path={ROUTES.rooms} element={<Rooms />} />
          <Route path={ROUTES.excercises} element={<Excercises />} />
        </Routes>
      </Canvas>
    </Router>
  )
}

export default AppRouter
