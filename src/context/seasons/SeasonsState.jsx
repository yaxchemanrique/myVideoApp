import { useReducer } from 'react'
import axios from 'axios'
import SeasonsContext from './SeasonsContext'
import SeasonsReducer from './SeasonsReducer'
import {
  SET_LOADING_SEASONS,
  SET_SEASONS,
  CLEAR_SEASON,
  SET_LOADING_EPISODES,
  SET_EPISODES,
  CLEAR_EPISODES
} from '../types'

const SeasonsState = (props) => {
  const initialState = {
    seasons: [],
    episodes: [],
    loading: false
  }

  const [state, dispatch] = useReducer(SeasonsReducer, initialState)

  const searchSeasons = async (id) => {
    dispatch({ type: SET_LOADING_SEASONS })

    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}/seasons`)
    dispatch({
      type: SET_SEASONS,
      payload: data
    })
  }

  const searchEpisodes = async (seasonId) => {
    dispatch({ type: SET_LOADING_EPISODES })

    console.log(seasonId)
    const { data } = await axios.get(`https://api.tvmaze.com/seasons/${seasonId}/episodes`)

    dispatch({
      type: SET_EPISODES,
      payload: data
    })
  }

  const clearSeason = () => {
    dispatch({
      type: CLEAR_SEASON
    })
  }

  const clearEpisodes = () => {
    dispatch({
      type: CLEAR_EPISODES
    })
  }

  return (
    <SeasonsContext.Provider value={{
      seasons: state.seasons,
      episodes: state.episodes,
      loading: state.loading,
      searchSeasons,
      searchEpisodes,
      clearSeason,
      clearEpisodes
    }}
    >
      {props.children}
    </SeasonsContext.Provider>
  )
}

export default SeasonsState
