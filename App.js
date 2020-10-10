import 'react-native-gesture-handler'
import React, {useEffect} from 'react'
import {Provider} from 'react-redux'
import Navigation from './app/navigation'
import store from './app/redux/store'
import {getCurrentUser} from './app/redux/actions/user'
import {getToken} from './app/redux/storage'
import {setAuthToken} from './app/utils'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    getToken()
      .then((token) => setAuthToken(token))
      .then(() => {
        store.dispatch(getCurrentUser())
      })
      .then(() => SplashScreen.hide())
  }, [])

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
