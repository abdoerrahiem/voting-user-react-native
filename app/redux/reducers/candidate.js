import * as types from '../types'

const initialState = {
  candidatesData: [],
  candidateData: null,
  loading: false,
  error: null,
}

const candidate = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case types.GET_CANDIDATES:
      return {
        ...state,
        loading: false,
        candidatesData: payload.data,
      }
    case types.GET_CANDIDATES:
      return {
        ...state,
        loading: false,
        candidateData: payload.data,
      }
    case types.LOADING_CANDIDATE:
      return {
        ...state,
        loading: true,
      }
    case types.GET_CANDIDATES_ERROR:
    case types.GET_CANDIDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Ada sedikit masalah. Please, try again.',
      }
    case types.REMOVE_ALERT:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export default candidate
