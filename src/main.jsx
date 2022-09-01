// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Styles
import './index.css'

// Components
import App from './App'

import ShowsState from './context/shows/ShowsState'
import CastState from './context/cast/CastState'
import SeasonsState from './context/seasons/SeasonsState'

createRoot(document.getElementById('app')).render(
  <ShowsState>
    <CastState>
      <SeasonsState>
        <App />
      </SeasonsState>
    </CastState>
  </ShowsState>
)
