import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

// Context
import castContext from '../context/cast/CastContext'

const CastPage = () => {
  const { id } = useParams()
  const { searchCast, cast, loading } = useContext(castContext)
  useEffect(() => {
    // console.log(id)
    searchCast(id)
  }, [])
  console.log(cast)
  return (
    <div>{loading
      ? <h2>Loading...</h2>
      : (<p>Alo</p>)}
    </div>
  )
}

export default CastPage
