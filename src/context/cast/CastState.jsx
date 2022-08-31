import { useReducer } from 'react'
import axios from 'axios'
import CastContext from './CastContext'
import CastReducer from './CastReducer'
import {
  SET_LOADING_CAST,
  SET_CAST_SHOW,
  CLEAR_CAST
} from '../types'

const CastState = (props) => {
  const initialState = {
    cast: {},
    loading: false
  }

  const [state, dispatch] = useReducer(CastReducer, initialState)

  const searchCast = async (id) => {
    console.log(id)
    dispatch({
      type: SET_LOADING_CAST
    })
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}/cast`)

    console.log(data)

    dispatch({
      type: SET_CAST_SHOW,
      payload: data
    })
  }

  const clearCast = () => {
    dispatch({
      type: CLEAR_CAST
    })
  }

  return (
    <CastContext.Provider value={{
      cast: state.cast,
      loading: state.loading,
      searchCast,
      clearCast
    }}
    >
      {props.children}
    </CastContext.Provider>
  )
}

export default CastState
