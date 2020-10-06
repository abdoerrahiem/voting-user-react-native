import * as types from '../types'
import axios from 'axios'
import {removeAlert, api} from '../../utils'

// Add vote
export const addVote = (candidateId) => async (dispatch) => {
  try {
    dispatch({type: types.LOADING_VOTE})
    const {data} = await axios.post(`${api}/votes/${candidateId}`)
    dispatch({type: types.ADD_VOTE, payload: data})
    removeAlert(dispatch)
  } catch (error) {
    dispatch({type: types.ADD_VOTE_ERROR, payload: error.response.data})
    removeAlert(dispatch)
  }
}
