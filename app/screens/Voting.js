import React, {useState, useEffect} from 'react'
import {View, StyleSheet, ScrollView, RefreshControl} from 'react-native'
import Card from '../components/Card'
import Modal from '../components/Modal'
import {connect} from 'react-redux'
import {getCandidates} from '../redux/actions/candidate'

const styles = StyleSheet.create({
  voting: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Voting = ({getCandidates, candidateReducer}) => {
  const [showModal, setShowModal] = useState(false)
  const [candidateId, setCandidateId] = useState('')
  const {loading, candidatesData} = candidateReducer

  useEffect(() => {
    getCandidates()
  }, [])

  return (
    <View style={styles.voting}>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        candidateId={candidateId}
      />
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={getCandidates} />
          }>
          {candidatesData.length > 0 &&
            candidatesData.map((data, index) => (
              <Card
                key={data._id}
                voting
                data={data}
                index={index}
                onPress={() => {
                  setShowModal(true)
                  setCandidateId(data._id)
                }}
              />
            ))}
        </ScrollView>
      </View>
    </View>
  )
}

const mapStateToProps = (state) => ({
  candidateReducer: state.candidateReducer,
})

export default connect(mapStateToProps, {getCandidates})(Voting)
