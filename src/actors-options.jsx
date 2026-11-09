import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ActorsOptions from './components/ActorsOptions'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActorsOptions />
  </StrictMode>,
)
