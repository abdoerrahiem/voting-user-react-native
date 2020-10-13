import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native'
import Chart from '../components/Chart'
import {chartColors, colors, fonts} from '../utils'
import {connect} from 'react-redux'
import {getCandidates} from '../redux/actions/candidate'
import Header from '../components/Header'

const styles = StyleSheet.create({
  count: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countTitle: {
    marginRight: 5,
    fontFamily: fonts.fontBold,
    fontSize: 16,
  },
  countValue: {
    fontFamily: fonts.fontLight,
    fontSize: 16,
  },
  voteDetails: {
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: '100%',
    marginVertical: 10,
  },
  voteDetailsText: {
    textAlign: 'center',
    fontFamily: fonts.fontBold,
    fontSize: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.secondBlue,
    paddingBottom: 5,
    color: colors.blue,
  },
  quickCount: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const QuickCount = ({getCandidates, candidateReducer}) => {
  const {candidatesData, loading} = candidateReducer
  const [newData, setNewData] = useState([])

  useEffect(() => {
    getCandidates()
  }, [])

  useEffect(() => {
    let arr = []
    if (candidatesData.length > 0) {
      candidatesData.map((cd, index) => {
        const newCd = {
          name: `${cd.nameOfChairman.split(' ')[0]} & ${
            cd.nameOfViceChairman.split(' ')[0]
          }`,
          population: cd.totalSuara,
          color: chartColors[index],
          legendFontColor: colors.grey,
          legendFontSize: 10,
        }
        arr.push(newCd)
      })
    }
    setNewData(arr)
  }, [candidatesData])

  return (
    <>
      <Header text="Quick Count" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getCandidates} />
        }>
        {candidatesData.length > 0 && (
          <View>
            <Chart data={newData} />
            <View style={styles.voteDetails}>
              <Text style={styles.voteDetailsText}>Vote Details</Text>
              <View style={styles.count}>
                <View>
                  {candidatesData.map((candidate, index) => (
                    <Text style={styles.countTitle} key={index}>
                      {candidate.nameOfChairman} &{' '}
                      {candidate.nameOfViceChairman}
                    </Text>
                  ))}
                </View>
                <View>
                  {candidatesData.map((candidate, index) => (
                    <Text style={styles.countValue} key={index}>
                      : {candidate.totalSuara} Suara
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </>
  )
}

const mapStateToProps = (state) => ({
  candidateReducer: state.candidateReducer,
})

export default connect(mapStateToProps, {getCandidates})(QuickCount)
