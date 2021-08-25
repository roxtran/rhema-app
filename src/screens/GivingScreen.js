import React from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native'

const GivingScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={{ marginBottom: 60 }}
            source={require('../../assets/giving-box.png')}
          />
          <Text style={{ fontSize: 28, marginBottom: 10 }}>
            Give Safely & Securely
          </Text>
          <Text style={{ textAlign: 'center', color: '#39456B' }}>
            Giving helps you to stay connected with our community anytime
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZDLQA7QHSMMEC&source=url'
                )
              }}
            >
              <Image source={require('../../assets/paypal-button.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Back', {
                  link: 'https://tithe.ly/give_new/www/#/tithely/give-one-time/645887',
                })
              }
            >
              <Image source={require('../../assets/tithely-button.png')} />
            </TouchableOpacity>
          </View>
          <Text style={{ textAlign: 'center', color: '#39456B' }}>
            Your information will be confidential
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 30,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 60,
  },
})

export default GivingScreen
