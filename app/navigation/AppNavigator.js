import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {colors} from '../utils'
import DrawerNavigator from './DrawerNavigator'
import {navigationRef} from './RootNavigator'

const AppNavigator = () => {
  return (
    <NavigationContainer
      theme={{colors: {background: colors.secondBlue}}}
      ref={navigationRef}>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
