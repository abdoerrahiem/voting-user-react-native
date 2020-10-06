import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import {colors, fonts} from '../utils'
import Button from '../components/Button'
import NomineeModal from '../components/NomineeModal'
import moment from 'moment'
import 'moment/locale/id'
moment.locale()

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 70,
    marginBottom: 5,
  },
  nominee: {
    paddingHorizontal: 10,
  },
  nomineeContent: {
    borderWidth: 1,
    borderColor: colors.orange,
    marginVertical: 10,
    paddingVertical: 20,
    borderRadius: 5,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.fontBold,
    fontSize: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.white,
    paddingBottom: 3,
    color: colors.blue,
  },
  titleContent: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: colors.grey,
  },
  nomineeSpace: {
    marginTop: 5,
    alignItems: 'center',
  },
  status: {
    position: 'absolute',
    backgroundColor: colors.orange,
    top: -1,
    left: -1,
    borderTopLeftRadius: 5,
    padding: 5,
  },
  statusText: {
    fontFamily: fonts.fontBold,
    color: colors.white,
    letterSpacing: 1,
  },
  nomineeDetails: {
    marginBottom: 10,
  },
  button: {
    marginVertical: 5,
  },
})

const NomineeProfile = ({route}) => {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState([] || null)
  const item = route.params.data

  return (
    <ScrollView style={styles.nominee} showsVerticalScrollIndicator={false}>
      <NomineeModal
        showModal={showModal}
        setShowModal={setShowModal}
        data={data}
      />
      <View style={styles.nomineeContent}>
        <View style={styles.status}>
          <Text style={styles.statusText}>Chairman</Text>
        </View>
        <View style={styles.nomineeSpace}>
          <Image source={{uri: item.photoOfChairman}} style={styles.image} />
        </View>
        <View style={styles.nomineeSpace}>
          <Text style={styles.title}>Nama</Text>
          <Text style={styles.titleContent}>{item.nameOfChairman}</Text>
        </View>
        <View style={styles.nomineeSpace}>
          <Text style={styles.title}>Tanggal Lahir</Text>
          <Text style={styles.titleContent}>
            {moment(item.birthdayOfChairman).format('LL')}
          </Text>
        </View>
        <View style={styles.nomineeSpace}>
          <Text style={styles.title}>Alamat</Text>
          <Text style={styles.titleContent}>{item.addressOfChairman}</Text>
        </View>
        <View style={styles.nomineeSpace}>
          <Text style={styles.title}>Pengalaman</Text>
          <View>
            {item.experienceOfChairman.map((itm, idx) => (
              <Text style={styles.titleContent} key={idx}>
                {itm}
              </Text>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.nomineeContent}>
        <View style={styles.status}>
          <Text style={styles.statusText}>Vice Chairman</Text>
        </View>
        <View style={styles.nomineeSpace}>
          <Image
            source={{uri: item.photoOfViceChairman}}
            style={styles.image}
          />
        </View>
        <View style={styles.nomineeSpace}>
          <Text style={styles.title}>Nama</Text>
          <Text style={styles.titleContent}>{item.nameOfViceChairman}</Text>
        </View>
        <View style={styles.nomineeSpace}>
          <Text style={styles.title}>Tanggal Lahir</Text>
          <Text style={styles.titleContent}>
            {moment(item.birthdayOfViceChairman).format('LL')}
          </Text>
        </View>
        <View style={styles.nomineeSpace}>
          <Text style={styles.title}>Alamat</Text>
          <Text style={styles.titleContent}>{item.addressOfViceChairman}</Text>
        </View>
        <View style={styles.nomineeSpace}>
          <Text style={styles.title}>Pengalaman</Text>
          <View>
            {item.experienceOfViceChairman.map((itm, idx) => (
              <Text style={styles.titleContent} key={idx}>
                {itm}
              </Text>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.nomineeDetails}>
        <View style={styles.button}>
          <Button
            title="Lihat Visi dan Misi"
            backgroundColor={colors.blue}
            onPress={() => {
              setShowModal(true)
              setData(item.visionAndMission)
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Lihat Motto"
            backgroundColor={colors.yellow}
            onPress={() => {
              setShowModal(true)
              setData(item.motto)
            }}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default NomineeProfile
