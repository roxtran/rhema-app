import React from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native'

const LocationScreen = () => {
  const company = Platform.OS === 'ios' ? 'apple' : 'google'
  const torontoAddr = '43.748380,-79.479110'
  const ottawaAddr = '45.367220,-75.689400'

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{ marginVertical: 15, marginHorizontal: 25, color: '#39456B' }}
      >
        Following are the two locations of Rhema Church
      </Text>
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              `http://maps.${company}.com/maps?daddr=${torontoAddr}`
            )
          }
        >
          <Image source={require('../../assets/toronto-map.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              `http://maps.${company}.com/maps?daddr=${ottawaAddr}`
            )
          }
        >
          <Image source={require('../../assets/ottawa-map.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LocationScreen
