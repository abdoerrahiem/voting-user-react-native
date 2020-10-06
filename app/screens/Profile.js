import React, {useEffect} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native'
import {connect} from 'react-redux'
import Button from '../components/Button'
import {colors, fonts} from '../utils'
import {logout, getCurrentUser} from '../redux/actions/user'

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
    marginVertical: 20,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 20,
    borderRadius: 15,
    paddingVertical: 20,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontFamily: fonts.fontBold,
    fontSize: 20,
    color: colors.blue,
    marginBottom: 10,
  },
  textValue: {
    fontFamily: fonts.fontBold,
    fontSize: 20,
    letterSpacing: 1,
    marginBottom: 10,
    color: colors.grey,
  },
})

const Profile = ({userReducer, logout, getCurrentUser}) => {
  const {userData, loading} = userReducer

  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getCurrentUser} />
      }>
      <View style={styles.profile}>
        <Image source={{uri: userData.photo}} style={styles.image} />
        <View style={styles.profileContent}>
          <View>
            <Text style={styles.text}>Nama</Text>
            <Text style={styles.text}>Username</Text>
          </View>
          <View>
            <Text style={styles.textValue}>{userData.name}</Text>
            <Text style={styles.textValue}>{userData.username}</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Button
            backgroundColor={colors.red}
            title="Logout"
            onPress={() => logout()}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
})

export default connect(mapStateToProps, {logout, getCurrentUser})(Profile)
