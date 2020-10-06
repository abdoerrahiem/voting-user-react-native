import AsyncStorage from '@react-native-community/async-storage'

export const setToken = async (data) => {
  try {
    await AsyncStorage.setItem('token', data)
  } catch (error) {
    console.log(error)
  }
}

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token')
    return token
  } catch (error) {
    console.log(error)
  }
}

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token')
  } catch (error) {
    console.log(error)
  }
}
