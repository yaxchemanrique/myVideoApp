import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

// Context
import castContext from '../context/cast/CastContext'

// Components
import PersonCast from '../components/PersonCast'

const CastPage = () => {
  const { id } = useParams()
  const { searchCast, cast, loading } = useContext(castContext)
  useEffect(() => {
    searchCast(id)
  }, [])
  console.log(cast)
  return (
    <div>{loading
      ? <h2>Loading...</h2>
      : (cast.length !== 0
          ? (<ul>
            {cast.map((item, index) => {
              return (
                <PersonCast
                  key={item.character.id}
                  id={item.character.id}
                  image={item.character.image ? item.character.image.medium : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'}
                  character={item.character.name}
                  actor={item.person.name}
                />
              )
            })}
             </ul>)
          : (<h1>Sorry, we don't have that info</h1>))}
    </div>
  )
}

export default CastPage
