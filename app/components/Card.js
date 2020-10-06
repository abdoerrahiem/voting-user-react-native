import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import {colors, fonts} from '../utils'
import Button from './Button'

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 70,
    marginBottom: 5,
  },
  card: {
    width: 300,
    backgroundColor: colors.white,
    elevation: 1,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  cardProfiles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  cardContent: {
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    fontFamily: fonts.fontBold,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 5,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.fontLight,
    color: colors.grey,
    letterSpacing: 2,
  },
  number: {
    position: 'absolute',
    backgroundColor: colors.orange,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    top: 3,
    left: 3,
  },
  numberContent: {
    color: colors.white,
    fontFamily: fonts.fontBold,
    fontSize: 12,
  },
})

const CardComponent = ({nominees, voting, onPress, data, index}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardProfiles}>
        <View style={styles.cardContent}>
          <Image source={{uri: data.photoOfChairman}} style={styles.image} />
          <View>
            <Text style={styles.name}>{data.nameOfChairman}</Text>
            <Text style={styles.title}>(Chairman)</Text>
          </View>
        </View>
        <View style={styles.cardContent}>
          <Image
            source={{uri: data.photoOfViceChairman}}
            style={styles.image}
          />
          <View>
            <Text style={styles.name}>{data.nameOfViceChairman}</Text>
            <Text style={styles.title}>(Vice Chairman)</Text>
          </View>
        </View>
      </View>

      <View style={styles.number}>
        <Text style={styles.numberContent}>{index + 1}</Text>
      </View>
      <Button
        title={nominees ? 'See Details' : voting ? 'Vote' : null}
        backgroundColor={nominees ? colors.blue : voting ? colors.yellow : null}
        icon={nominees ? 'long-arrow-right' : voting ? 'send' : null}
        onPress={onPress}
      />
    </View>
  )
}

export default CardComponent
