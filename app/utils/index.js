import axios from 'axios'
import * as types from '../redux/types'

export const config = {headers: {'Content-Type': 'application/json'}}

export const removeAlert = (dispatch) =>
  setTimeout(() => {
    dispatch({type: types.REMOVE_ALERT})
  }, 3000)

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token
  } else {
    delete axios.defaults.headers.common['x-auth-token']
  }
}

export const imageTypes = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/JPG',
  'image/JPEG',
]

export const api = 'https://votingapp-api.herokuapp.com/api'

export const colors = {
  blue: '#4c6ef5',
  secondBlue: '#ebf3ff',
  orange: '#FF8E6E',
  yellow: '#FFD571',
  white: '#fff',
  grey: '#a6a6a6',
  red: '#fc264d',
}

export const fonts = {
  defaultFont: 'Quicksand-Regular',
  fontLight: 'Quicksand-Light',
  fontBold: 'Quicksand-Bold',
}

export const chartColors = ['#4c6ef5', '#FF8E6E', '#FFD571', '#fc264d']
