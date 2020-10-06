import React, {useEffect} from 'react'
import {View, StyleSheet, ScrollView, RefreshControl} from 'react-native'
import Card from '../components/Card'
import {connect} from 'react-redux'
import {getCandidates} from '../redux/actions/candidate'

const styles = StyleSheet.create({
  nominees: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Nominees = ({navigation, getCandidates, candidateReducer}) => {
  const {loading, candidatesData} = candidateReducer

  useEffect(() => {
    getCandidates()
  }, [])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getCandidates} />
      }>
      <View style={styles.nominees}>
        <View>
          {candidatesData.length > 0 &&
            candidatesData.map((data, index) => (
              <Card
                key={data._id}
                nominees
                data={data}
                index={index}
                onPress={() => navigation.navigate('NomineeProfile', {data})}
              />
            ))}
        </View>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state) => ({
  candidateReducer: state.candidateReducer,
})

export default connect(mapStateToProps, {getCandidates})(Nominees)
