import * as types from '../types'
import {setToken, removeToken} from '../storage'

const initialState = {
  userData: null,
  usersData: [],
  isAuth: false,
  loading: false,
  error: null,
}

const user = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case types.LOGIN:
      setToken(payload.token)
      return {
        ...state,
        isAuth: true,
        loading: false,
      }
    case types.GET_CURRENT_USER:
      return {
        ...state,
        userData: payload.data,
        isAuth: true,
        loading: false,
      }
    case types.GET_USERS:
      return {
        ...state,
        loading: false,
        usersCount: payload.count,
        usersData: payload.data,
      }
    case types.GET_VOTED_USERS:
      return {
        ...state,
        loading: false,
        votedUsersCount: payload.count,
        // votedUsersData: payload.data,
      }
    case types.GET_UNVOTED_USERS:
      return {
        ...state,
        loading: false,
        unVotedUsersCount: payload.count,
        // unVotedUsersData: payload.data,
      }
    case types.LOADING_USER:
      return {
        ...state,
        loading: true,
      }
    case types.GET_CURRENT_USER_ERROR:
      return {
        ...state,
        loading: false,
        // error: 'Ada sedikit masalah. Please, try again.',
      }
    case types.REMOVE_ALERT:
      return {
        ...state,
        error: null,
      }
    case types.LOGIN_ERROR:
      return {
        isAuth: false,
        loading: false,
        error: payload.message,
      }
    case types.LOGOUT:
      removeToken()
      return {
        userData: null,
        isAuth: false,
        loading: false,
        error: null,
      }
    default:
      return state
  }
}

export default user
