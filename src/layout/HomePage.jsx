import { useContext } from 'react'

// Context
import ShowsContext from '../context/shows/ShowsContext'

// Components
import ListItem from '../components/ListItem'

const HomePage = () => {
  // const { getInitialState } = useContext(ShowsContext)

  // useEffect(() => {
  //   getInitialState()
  // }, [])

  const showsContext = useContext(ShowsContext)
  const { loading, shows } = showsContext
  return (
    <div className='homePage'>
      {loading
        ? (<h1>Loading...</h1>)
        : (
            shows.length !== 0
              ? (<div className='homePage__list container'>
                {
            shows.map((item) => (
              <ListItem
                key={item.show.id}
                id={item.show.id}
                image={item.show.image ? item.show.image.medium : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'}
                name={item.show.name}
                rating={item.show.rating.average ? item.show.rating.average : 'NA'}
              />
            ))
          }
              </div>)
              : (<h1 className='container' id='welcomeMessage'>Welcome!</h1>)
          )}
    </div>
  )
}

export default HomePage
