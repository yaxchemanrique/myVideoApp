// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Styles
import './index.css'

// Components
import App from './App'

import ShowsState from './context/shows/ShowsState'
import CastState from './context/cast/CastState'

createRoot(document.getElementById('app')).render(
  <ShowsState>
    <CastState>
      <App />
    </CastState>
  </ShowsState>
)
