import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

// Context
import showsContext from '../context/shows/ShowsContext'

const SinglePage = () => {
  const { id } = useParams()
  const { getSingleShow, singleShow, loading } = useContext(showsContext)
  useEffect(() => {
    console.log(id)
    getSingleShow(id)
  }, [])

  // const removeTags = (text) => {
  //   if (text) {
  //     return false
  //   } else {
  //     text = text.toString()
  //   }
  //   return text.replace(/(<([^>]+)>)/gi, '')
  // }

  return (
    <div>{loading
      ? <h2>Loading...</h2>
      : (<p>{singleShow.name}</p>)}
    </div>
  )
}

export default SinglePage
