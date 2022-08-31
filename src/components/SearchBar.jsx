import { useState, useContext } from 'react'
import { FaSearch } from 'react-icons/fa'

// Contexts
import ShowsContext from '../context/shows/ShowsContext'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const showsContext = useContext(ShowsContext)
  const { searchShows } = showsContext
  const onSearchHandler = (e) => {
    e.preventDefault()
    searchShows(searchTerm)
  }
  return (
    <form id='searchField__form'>
      <FaSearch id='FaSearch' />
      <input
        type='text'
        name='searchField'
        id='searchField'
        placeholder='Type here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='searchField__button' onClick={onSearchHandler}>Search</button>
    </form>
  )
}

export default SearchBar
