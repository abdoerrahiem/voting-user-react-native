import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import TabNavigator from './TabNavigator'
import NomineeProfile from '../screens/NomineeProfile'
import {colors, fonts} from '../utils'

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.fontBold,
    textTransform: 'uppercase',
    letterSpacing: 2.5,
    fontSize: 15,
    color: colors.white,
  },
})

const Stack = createStackNavigator()

const UserNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="App"
      component={TabNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="NomineeProfile"
      component={NomineeProfile}
      options={{
        title: <Text style={styles.text}>Profil Nominasi</Text>,
        headerTitleAlign: 'center',
        headerShown: true,
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        },
      }}
    />
  </Stack.Navigator>
)

export default UserNavigator
