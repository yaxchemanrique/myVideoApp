import { useReducer } from 'react'
import axios from 'axios'
import ShowsContext from './ShowsContext'
import ShowsReducer from './ShowsReducer'
import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW
} from '../types'

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false
  }

  const [state, dispatch] = useReducer(ShowsReducer, initialState)

  const getInitialState = async () => {
    dispatch({ type: SET_LOADING })

    const { data } = await axios.get('https://api.tvmaze.com/shows')

    dispatch({
      type: SEARCH_SHOWS,
      payload: data
    })
  }

  const searchShows = async (searchTerm) => {
    dispatch({ type: SET_LOADING })

    const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)

    dispatch({
      type: SEARCH_SHOWS,
      payload: data
    })
  }

  const getSingleShow = async (id) => {
    dispatch({
      type: SET_LOADING
    })

    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`)
    dispatch({
      type: SET_SINGLE_SHOW,
      payload: data
    })
  }

  const clearSingleShow = () => {
    dispatch({
      type: CLEAR_SINGLE_SHOW
    })
  }

  return (
    <ShowsContext.Provider value={{
      shows: state.shows,
      singleShow: state.singleShow,
      loading: state.loading,
      getInitialState,
      searchShows,
      getSingleShow,
      clearSingleShow
    }}
    >
      {props.children}
    </ShowsContext.Provider>
  )
}

export default ShowsState
