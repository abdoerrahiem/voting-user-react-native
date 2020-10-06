import * as types from '../types'
import axios from 'axios'
import {removeAlert, api} from '../../utils'

// Get candidates
export const getCandidates = () => async (dispatch) => {
  try {
    dispatch({type: types.LOADING_CANDIDATE})
    const {data} = await axios.get(`${api}/candidates`)
    dispatch({type: types.GET_CANDIDATES, payload: data})
  } catch (error) {
    dispatch({type: types.GET_CANDIDATES_ERROR, payload: error.response.data})
    removeAlert(dispatch)
  }
}

// Get candidate
export const getCandidate = (candidateId) => async (dispatch) => {
  try {
    dispatch({type: types.LOADING_CANDIDATE})
    const {data} = await axios.get(`${api}/candidates/${candidateId}`)
    dispatch({type: types.GET_CANDIDATE, payload: data})
  } catch (error) {
    dispatch({type: types.GET_CANDIDATE_ERROR, payload: error.response.data})
    removeAlert(dispatch)
  }
}
