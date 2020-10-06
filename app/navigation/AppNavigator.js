import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Home from '../screens/Home'
import QuickCount from '../screens/QuickCount'
import Nominees from '../screens/Nominees'
import Voting from '../screens/Voting'
import NomineeProfile from '../screens/NomineeProfile'
import {colors, fonts} from '../utils'
import Profile from '../screens/Profile'

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.fontBold,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontSize: 9,
  },
})

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    barStyle={{
      backgroundColor: colors.blue,
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: <Text style={styles.text}>Home</Text>,
        tabBarIcon: ({color}) => <Icon name="home" color={color} size={20} />,
      }}
    />
    <Tab.Screen
      name="QuickCount"
      component={QuickCount}
      options={{
        tabBarLabel: <Text style={styles.text}>Quick Count</Text>,
        tabBarIcon: ({color}) => (
          <Icon name="chart-pie" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="Nominees"
      component={Nominees}
      options={{
        tabBarLabel: <Text style={styles.text}>Nominees</Text>,
        tabBarIcon: ({color}) => (
          <Icon name="user-friends" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="Voting"
      component={Voting}
      options={{
        tabBarLabel: <Text style={styles.text}>Voting</Text>,
        tabBarIcon: ({color}) => (
          <Icon name="vote-yea" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: <Text style={styles.text}>Profile</Text>,
        tabBarIcon: ({color}) => (
          <Icon name="user-cog" color={color} size={20} />
        ),
      }}
    />
  </Tab.Navigator>
)

export default () => (
  <NavigationContainer theme={{colors: {background: colors.secondBlue}}}>
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={TabNavigator}
        options={{headerShown: false}}
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
  </NavigationContainer>
)
