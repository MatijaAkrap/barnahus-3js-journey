import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import { BrowserRouter } from 'react-router-dom'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='main'>
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
          <Experience />
        </Canvas>
      </BrowserRouter>
    </div>
  </React.StrictMode>
)
