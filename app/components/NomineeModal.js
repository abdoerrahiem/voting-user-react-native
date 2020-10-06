import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/EvilIcons'
import {colors, fonts} from '../utils'

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 50,
  },
  text: {
    fontFamily: fonts.fontBold,
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 2,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  icon: {
    backgroundColor: colors.red,
    position: 'absolute',
    top: -20,
    right: '45%',
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const NomineeModal = ({showModal, setShowModal, data}) => {
  return (
    <Modal isVisible={showModal} style={styles.modal}>
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShowModal(false)}>
          <Icon name="close" size={30} color={colors.white} />
        </TouchableOpacity>
        <View>
          {typeof data === 'object' ? (
            data.map((text, idx) => (
              <Text key={idx} style={styles.text}>
                {text}
              </Text>
            ))
          ) : (
            <Text style={styles.text}>"{data}"</Text>
          )}
        </View>
      </View>
    </Modal>
  )
}

export default NomineeModal
