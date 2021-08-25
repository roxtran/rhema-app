import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import AudioBroadcast from '../../components/common/AudioBroadcast'

const AudioScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {/* <View style={styles.schedule}>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/calendar-icon-sm.png')}
          />
          <View>
            <Text style={styles.title1}>Schedule</Text>
            <Text style={{ fontWeight: 'bold', marginBottom: 15 }}>
              Weekly on Sunday
            </Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Image
                style={{ marginTop: 3, marginRight: 6 }}
                source={require('../../../assets/icons/reminder-icon.png')}
              />
              <Text>Turn on reminder</Text>
            </View>
          </View>
        </View> */}
        <View style={styles.broadcastContainer}>
          <Text style={styles.title2}>Audio on demand</Text>
          <AudioBroadcast borderRadius="20" />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  schedule: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 35,
    // marginBottom: 25,
    marginHorizontal: 25,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
  },
  icon: {
    marginTop: 10,
    marginHorizontal: 10,
    marginRight: 20,
  },
  title1: {
    fontSize: 20,
    marginBottom: 3,
    color: 'grey',
  },
  title2: {
    fontSize: 20,
    marginTop: 25,
    marginBottom: 15,
    color: 'grey',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  broadcastContainer: {
    height: 302,
    marginHorizontal: 15,
    borderRadius: 20,
    overflow: 'hidden',
  },
})

export default AudioScreen
