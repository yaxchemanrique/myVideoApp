import {
  SET_LOADING_CAST,
  SET_CAST_SHOW,
  CLEAR_CAST
} from '../types'

const castReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING_CAST:
      return {
        ...state,
        loading: true
      }
    case SET_CAST_SHOW:
      return {
        ...state,
        cast: action.payload,
        loading: false
      }
    case CLEAR_CAST:
      return {
        ...state,
        cast: []
      }
    default:
      return state
  }
}

export default castReducer
