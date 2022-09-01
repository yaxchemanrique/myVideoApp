import { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

// Context
import ShowsContext from '../context/shows/ShowsContext'
import SeasonsContext from '../context/seasons/SeasonsContext'

// Components
import SeasonOptionDropdown from '../components/SeasonOptionDropdown'

const SinglePage = () => {
  const { id } = useParams()
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext)
  useEffect(() => {
    getSingleShow(id)
  }, [])

  const seasonsContext = useContext(SeasonsContext)
  const { searchSeasons, searchEpisodes, seasons, episodes } = seasonsContext
  useEffect(() => {
    // console.log(id)
    searchSeasons(id)
    // console.log(seasons)
  }, [])

  // const removeTags = (text) => {
  //   if (text) {
  //     return false
  //   } else {
  //     text = text.toString()
  //   }
  //   return text.replace(/(<([^>]+)>)/gi, '')
  // }
  const [seasonId, setSeasonId] = useState('')

  useEffect(() => {
    searchEpisodes(seasonId)
    console.log(episodes)
  }, [seasonId])

  const handleSeasonValue = (e) => {
    const dropdown = e.currentTarget
    const dropdownValueText = dropdown.options[dropdown.selectedIndex].value
    setSeasonId(dropdownValueText)
  }
  console.log(seasonsContext)
  return (
    <div className='singlepage__Container'>
      <div>{loading
        ? <h2>Loading...</h2>
        : (<p>{singleShow.name}</p>)}
      </div>
      <div>{loading
        ? <h2>Loading...</h2>
        : (<select
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
        </select>)}
      </div>
      <div>{loading
        ? <h2>Loading...</h2>
        : (<div id='episodesList'>
          <p>Episodes</p>

        </div>)}
      </div>

    </div>

  )
}

export default SinglePage
