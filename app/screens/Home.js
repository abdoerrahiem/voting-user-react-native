import React, {useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native'
import Button from '../components/Button'
import {colors, fonts} from '../utils'
import {connect} from 'react-redux'
import Alert from '../components/Alert'
import {getCurrentUser} from '../redux/actions/user'

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 10,
  },
  h2: {
    fontSize: 20,
    fontFamily: fonts.fontBold,
    lineHeight: 30,
    textAlign: 'center',
    color: colors.orange,
    letterSpacing: 1,
  },
  h4: {
    fontSize: 14,
    fontFamily: fonts.defaultFont,
    lineHeight: 20,
    textAlign: 'center',
    color: colors.blue,
    letterSpacing: 0.5,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
})

const Home = ({navigation, userReducer, getCurrentUser}) => {
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
      <View style={styles.home}>
        <View>
          <View style={{marginVertical: 5}}>
            {userData ? (
              <Alert success text={`Welcome back, ${userData.name}`} />
            ) : (
              <Alert success text={`Welcome, Stranger`} />
            )}
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={styles.h2}>Selamat Datang</Text>
            <Text style={styles.h2}>di Aplikasi Voting Berbasis Online</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Image
              source={require('../images/evoting.png')}
              style={styles.image}
            />
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={styles.h4}>
              Pilih Nominasi Terbaik Pilihanmu Dimana Saja, Tanpa Ribet
            </Text>
          </View>
          <View style={styles.buttons}>
            <Button
              title="Vote Now"
              backgroundColor={colors.orange}
              onPress={() => navigation.navigate('Voting')}
            />
            <Button
              title="Review Nominees"
              backgroundColor={colors.yellow}
              onPress={() => navigation.navigate('Nominees')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
})

export default connect(mapStateToProps, {getCurrentUser})(Home)
