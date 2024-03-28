import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='main'>
      <Experience />
    </div>
  </React.StrictMode>
)
