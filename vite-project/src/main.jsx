import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdharState from './Context/AdharState.jsx'

createRoot(document.getElementById('root')).render(
  <AdharState>
    <App />
  </AdharState>,
)
