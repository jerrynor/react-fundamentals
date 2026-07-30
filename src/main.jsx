import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Message from './RBasics_Assignments/Assingment-3/greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Message name="Jerry"/>
  </StrictMode>,
)
