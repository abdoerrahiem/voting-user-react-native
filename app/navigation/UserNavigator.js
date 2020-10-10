import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import TabNavigator from './TabNavigator'
import NomineeProfile from '../screens/NomineeProfile'
import {colors, fonts} from '../utils'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.fontBold,
    textTransform: 'uppercase',
    letterSpacing: 2.5,
    fontSize: 20,
    color: colors.white,
  },
})

const Stack = createStackNavigator()

const UserNavigator = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="App"
      component={TabNavigator}
      options={{
        headerStyle: {
          backgroundColor: colors.blue,
          height: 45,
        },
        headerTitle: () => <Text style={styles.text}>E-Voting</Text>,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon
              name="bars"
              size={25}
              color={colors.white}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        ),
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="NomineeProfile"
      component={NomineeProfile}
      options={{
        title: <Text style={styles.text}>Nominee Profile</Text>,
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
