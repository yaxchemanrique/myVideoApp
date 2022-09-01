import {
  SET_LOADING_SEASONS,
  SET_SEASONS,
  CLEAR_SEASON,
  SET_LOADING_EPISODES,
  SET_EPISODES,
  CLEAR_EPISODES
} from '../types'

const seasonsReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING_SEASONS:
      return {
        ...state,
        loading: true
      }
    case SET_SEASONS:
      return {
        ...state,
        seasons: action.payload,
        loading: false
      }
    case CLEAR_SEASON:
      return {
        ...state,
        season: []
      }
    case SET_LOADING_EPISODES:
      return {
        ...state,
        loading: true
      }
    case SET_EPISODES:
      return {
        ...state,
        episodes: action.payload,
        loading: false
      }
    case CLEAR_EPISODES:
      return {
        ...state,
        episodes: []
      }
    default:
      return state
  }
}

export default seasonsReducer
