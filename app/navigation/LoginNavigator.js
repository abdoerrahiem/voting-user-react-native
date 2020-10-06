import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screens/Login'
import {colors} from '../utils'

const Stack = createStackNavigator()

export default () => (
  <NavigationContainer theme={{colors: {background: colors.secondBlue}}}>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
