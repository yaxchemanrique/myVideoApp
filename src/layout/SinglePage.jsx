import { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

// Context
import ShowsContext from '../context/shows/ShowsContext'
import SeasonsContext from '../context/seasons/SeasonsContext'

// Components
import SeasonOptionDropdown from '../components/SeasonOptionDropdown'
import SingleShowDesc from '../components/SingleShowDesc'

const SinglePage = () => {
  const { id } = useParams()
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext)
  useEffect(() => {
    getSingleShow(id)
  }, [])

  const seasonsContext = useContext(SeasonsContext)
  const { searchSeasons, searchEpisodes, seasons, episodes } = seasonsContext
  useEffect(() => {
    searchSeasons(id)
  }, [])

  const removeTags = (text) => {
    if (text === null || text === '') {
      return false
    } else {
      text = text.toString()
    }
    return text.replace(/(<([^>]+)>)/gi, '')
  }
  const [seasonId, setSeasonId] = useState('')

  useEffect(() => {
    searchEpisodes(seasonId)
  }, [seasonId])

  const handleSeasonValue = (e) => {
    const dropdown = e.currentTarget
    const dropdownValueText = dropdown.options[dropdown.selectedIndex].value
    setSeasonId(dropdownValueText)
  }
  return (
    <div
      style={{
        backgroundImage: `url(${singleShow.image ? singleShow.image.original : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'darken',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
      className='singlepage__Container'
    >
      <div>{loading
        ? <h2>Loading...</h2>
        : (
          <SingleShowDesc
            key={singleShow.name}
            name={singleShow.name}
            summary={singleShow.summary && removeTags(singleShow.summary.substring(0, 300))}
            mainImage={singleShow.image ? singleShow.image.medium : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'}
          />
          )}
      </div>
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.8)'
        }}
      >
        <div className='container'>
          {singleShow.genres && singleShow.genres.map(genre => (
            <span key={genre} className='singleShow__genre'>{genre}</span>
          ))}
        </div>

        {loading
          ? <h2>Loading...</h2>
          : (<div className='container'>
            <select
              name='seasonSelect'
              id='seasonSelect'
              onChange={(e) => handleSeasonValue(e)}
            >
              {seasons.map((item) => (
                <SeasonOptionDropdown
                  key={item.id}
                  id={item.id}
                  index={item.number}
                  value={item.id}
                />
              ))}
            </select>
             </div>)}
      </div>
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.8)'
        }}
      >{loading
        ? <h2>Loading...</h2>
        : (<div id='episodesList'>
          <p className='container'>Episodes</p>
        </div>)}
      </div>

    </div>

  )
}

export default SinglePage
