import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {colors, fonts} from '../utils'
import {openDrawer} from '../navigation/RootNavigator'

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  text: {
    color: colors.white,
    fontSize: 22,
    fontFamily: fonts.fontBold,
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 2,
    width: '80%',
  },
})

const Header = ({text}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => openDrawer()}>
        <Icon
          name="bars"
          size={22}
          color={colors.white}
          style={{marginLeft: 10}}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default Header
