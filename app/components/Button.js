import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {colors, fonts} from '../utils'

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.fontBold,
    fontSize: 15,
    letterSpacing: 1,
  },
})

const Button = ({title, backgroundColor, onPress, icon, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, {backgroundColor}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      {icon && (
        <Icon
          name={icon}
          size={20}
          style={{marginLeft: 7}}
          color={colors.white}
        />
      )}
    </TouchableOpacity>
  )
}

export default Button
