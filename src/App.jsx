import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'

// Pages
import HomePage from './layout/HomePage'
import SinglePage from './layout/SinglePage'
import CastPage from './layout/CastPage'

function App () {
  return (
    <Router>
      <Navbar />
      <div className='page-container'>
        <Routes>
          {/* {Home Page Route} */}
          <Route path='/' element={<HomePage />} exact />
          {/* {Details Show page Page Route} */}
          <Route path='/singleshow/:id' element={<SinglePage />} />
          {/* {Cast Page Route} */}
          <Route path='/singleshow/:id/cast' element={<CastPage />} />
          {/* {Similar Shows Page Route} */}
          {/* {Episodes by Season Page Route} */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
