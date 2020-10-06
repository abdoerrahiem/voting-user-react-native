import * as types from '../types'

const initialState = {
  loading: false,
  success: null,
  error: null,
}

const vote = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case types.ADD_VOTE:
      return {
        ...state,
        loading: false,
        success: payload.message,
      }
    case types.LOADING_VOTE:
      return {
        ...state,
        loading: true,
      }
    case types.ADD_VOTE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.message,
      }
    case types.REMOVE_ALERT:
      return {
        ...state,
        error: null,
        success: null,
      }
    default:
      return state
  }
}

export default vote
