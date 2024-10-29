import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting, {Food} from './Greetings.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Food/>
  </StrictMode>,
)
