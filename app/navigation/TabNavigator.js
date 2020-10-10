import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {Text, StyleSheet} from 'react-native'
import Home from '../screens/Home'
import QuickCount from '../screens/QuickCount'
import Nominees from '../screens/Nominees'
import Voting from '../screens/Voting'
import {colors, fonts} from '../utils'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createMaterialBottomTabNavigator()

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.fontBold,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontSize: 10,
  },
})

const TabNavigator = () => {
  return (
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
    </Tab.Navigator>
  )
}

export default TabNavigator
