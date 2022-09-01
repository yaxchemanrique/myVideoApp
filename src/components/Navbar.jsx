import { Link, useParams, useLocation } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

import SearchBar from './SearchBar'
import { useState } from 'react'

const Navbar = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div className='navbar'>
      <div className='container'>
        <nav className='navbar__nav'>
          <h1 className='logo'>
            <Link to='/' className='logo__link'>
              <FaPlay />
              MyVideo
            </Link>
          </h1>
          <SearchBar />
          <ul className='moreInfo'>
            <li><Link to={`${location.pathname}/cast`} className='moreInfo__link'>Cast </Link></li>
            <li><Link to='/' className='moreInfo__link'>Similar Shows </Link></li>
            <li><Link to='/' className='moreInfo__link'>Official Website </Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
