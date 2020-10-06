import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/EvilIcons'
import {colors, fonts} from '../utils'
import Button from './Button'
import Alert from './Alert'
import {connect} from 'react-redux'
import {addVote} from '../redux/actions/vote'
import Spinner from './Spinner'

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
    fontSize: 20,
    marginVertical: 20,
    letterSpacing: 2,
    textTransform: 'uppercase',
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

const ModalComponent = ({
  showModal,
  setShowModal,
  candidateId,
  addVote,
  voteReducer,
}) => {
  const {success, error, loading} = voteReducer

  return (
    <Modal isVisible={showModal} style={styles.modal}>
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShowModal(false)}>
          <Icon name="close" size={30} color={colors.white} />
        </TouchableOpacity>
        <View>
          {error && <Alert text={error} error />}
          {success && <Alert text={success} success />}
          {loading && <Spinner />}
          <Text style={styles.text}>Yakin dengan pilihanmu?</Text>
          <View style={styles.buttons}>
            <View style={{marginRight: 2}}>
              <Button
                backgroundColor={colors.blue}
                title="Yakin Dong"
                onPress={() => addVote(candidateId)}
                disabled={loading}
              />
            </View>
            <View style={{marginLeft: 2}}>
              <Button
                backgroundColor={colors.red}
                title="Nggak Yakin"
                onPress={() => setShowModal(false)}
                disabled={loading}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  voteReducer: state.voteReducer,
})

export default connect(mapStateToProps, {addVote})(ModalComponent)
