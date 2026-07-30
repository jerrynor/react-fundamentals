import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Message from './RBasics_Assignments/Assingment-3/greeting.jsx'
import ToggleButton from './RBasics_Assignments/Assignment-4/toggle.jsx'
import NameForm from './RBasics_Assignments/Assignment-5/showInput.jsx'
import TitleUpdater from './RBasics_Assignments/Assignment-6/titleUpdater.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Message name="Jerry"/>
    <ToggleButton />
    <NameForm />
    <TitleUpdater />
  </StrictMode>,
)
