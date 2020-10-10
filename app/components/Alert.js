import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import {colors, fonts} from '../utils'

const styles = StyleSheet.create({
  alert: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontFamily: fonts.fontLight,
    color: colors.white,
    lineHeight: 20,
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
})

const Alert = ({text, error, success}) => {
  const [showAlert, setShowAlert] = useState(true)

  return (
    showAlert && (
      <View
        style={[
          styles.alert,
          {backgroundColor: error ? colors.red : success ? colors.green : ''},
        ]}>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShowAlert(false)}>
          <Icon name="close" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>
    )
  )
}

export default Alert
