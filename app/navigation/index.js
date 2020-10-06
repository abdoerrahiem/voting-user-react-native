import React from 'react'
import LoginNavigator from './LoginNavigator'
import AppNavigator from './AppNavigator'
import {connect} from 'react-redux'

const Navigator = ({userReducer}) => {
  const {isAuth} = userReducer

  return isAuth ? <AppNavigator /> : <LoginNavigator />
}

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
})

export default connect(mapStateToProps)(Navigator)
