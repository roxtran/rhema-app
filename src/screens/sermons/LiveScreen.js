import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler'
import Video from '../../components/common/Video';
import SubscribeShareButtons from '../../components/common/SubscribeShareButtons';

const LiveScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Watch On Demand</Text>
        <Text style={styles.description}>Join us for worship.</Text>
      </View>
      <View style={styles.videoContainer}>
        <Video videoId='FE4p8e6JvZo' borderRadius='20' />
      </View>
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
        {/* <SubscribeShareButtons /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  schedule: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 25,
    marginHorizontal: 15,
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
  videoContainer: {
    height: 220,
    marginHorizontal: 15,
    borderRadius: 20,
    overflow: 'hidden',
    // marginBottom: 15
  },
  textContainer: {
    marginTop: 20,
    marginHorizontal: 25,
  },
  title: {
    fontSize: 20,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  description: {
    color: 'grey',
    marginBottom: 15,
  },
});

export default LiveScreen;
