import React, {useState} from 'react'
import {View, Text, ImageBackground, StyleSheet, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from '../components/Button'
import Alert from '../components/Alert'
import {colors, fonts} from '../utils'
import {connect} from 'react-redux'
import {login} from '../redux/actions/user'
import Spinner from '../components/Spinner'
import Modal from 'react-native-modal'

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContent: {
    backgroundColor: colors.white,
    elevation: 1,
    width: 300,
    padding: 20,
    borderRadius: 5,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondBlue,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  textInput: {
    width: '100%',
    fontFamily: fonts.defaultFont,
    fontSize: 20,
    paddingVertical: 0,
    marginLeft: 5,
  },
  welcomeText: {
    fontSize: 25,
    fontFamily: fonts.fontBold,
    textAlign: 'center',
    marginBottom: 5,
    color: colors.blue,
  },
  accountText: {
    fontSize: 20,
    fontFamily: fonts.fontBold,
    textAlign: 'center',
    marginBottom: 10,
    color: colors.blue,
  },
})

const Login = ({login, userReducer}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {error, loading} = userReducer

  const handlePress = () => login(username, password)

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../images/login.png')}
        resizeMode="repeat"
        style={styles.backgroundImage}>
        <Modal isVisible={loading} backdropOpacity={0.4}>
          <Spinner />
        </Modal>
        <View style={styles.loginContent}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.accountText}>Masukkan Account Anda!</Text>
          <View>
            {error && <Alert error text={error} />}
            <View style={styles.input}>
              <Icon name="user" size={30} color={colors.grey} />
              <TextInput
                autoCapitalize="none"
                placeholder="Username"
                style={styles.textInput}
                value={username}
                onChangeText={(e) => setUsername(e)}
              />
            </View>
            <View style={styles.input}>
              <Icon name="lock" size={30} color={colors.grey} />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.textInput}
                value={password}
                onChangeText={(e) => setPassword(e)}
              />
            </View>
            <View>
              <Button
                backgroundColor={colors.blue}
                title="Login"
                onPress={handlePress}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
})

export default connect(mapStateToProps, {login})(Login)
