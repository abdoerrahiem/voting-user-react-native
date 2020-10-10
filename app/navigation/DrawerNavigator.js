import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {colors, fonts} from '../utils'
import {connect} from 'react-redux'
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native'
import DotIcon from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/AntDesign'
import Button from '../components/Button'
import {logout, getCurrentUser} from '../redux/actions/user'
import {closeDrawer} from './RootNavigator'
import UserNavigator from './UserNavigator'

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
    marginVertical: 20,
    borderRadius: 15,
    paddingVertical: 20,
    width: '100%',
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
  active: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onlineText: {
    fontFamily: fonts.fontBold,
    color: colors.blue,
    fontSize: 20,
    marginLeft: 5,
  },
  closeIcon: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
})

const Drawer = createDrawerNavigator()

const DrawerNavigator = ({userReducer, logout, getCurrentUser}) => {
  const {userData, loading} = userReducer

  return (
    <Drawer.Navigator
      initialRouteName="UserNavigator"
      drawerStyle={{
        backgroundColor: colors.secondBlue,
        width: '100%',
      }}
      drawerContent={() => (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={getCurrentUser} />
          }>
          {userData && (
            <View style={styles.profile}>
              <TouchableOpacity
                style={styles.closeIcon}
                onPress={() => closeDrawer()}>
                <Icon name="close" size={30} color={colors.red} />
              </TouchableOpacity>
              <View style={{marginTop: 20}}>
                <Image source={{uri: userData.photo}} style={styles.image} />
                <View style={styles.active}>
                  <DotIcon
                    name="primitive-dot"
                    size={30}
                    color={colors.green}
                  />
                  <Text style={styles.onlineText}>Online</Text>
                </View>
              </View>
              <View style={styles.profileContent}>
                <View>
                  <Text style={styles.text}>Nama</Text>
                  <Text style={styles.text}>Username</Text>
                  <Text style={styles.text}>Role</Text>
                </View>
                <View>
                  <Text style={styles.textValue}>{userData.name}</Text>
                  <Text style={styles.textValue}>{userData.username}</Text>
                  <Text style={styles.textValue}>
                    {userData.isAdmin ? 'ADMIN' : 'USER'}
                  </Text>
                </View>
              </View>
              <View style={{marginTop: 20}}>
                <Button
                  backgroundColor={colors.red}
                  title="Keluar"
                  onPress={() => logout()}
                />
              </View>
            </View>
          )}
        </ScrollView>
      )}
      drawerContentOptions={{
        activeBackgroundColor: colors.secondBlue,
      }}>
      <Drawer.Screen name="UserNavigator" component={UserNavigator} />
    </Drawer.Navigator>
  )
}

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
})

export default connect(mapStateToProps, {logout, getCurrentUser})(
  DrawerNavigator,
)
