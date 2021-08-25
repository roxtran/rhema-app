import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const DiscoverScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ marginHorizontal: 25 }}>
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.subTitle}>
            Discover more about Rhema Ministries.
          </Text>
        </View>
        <View style={styles.items}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Back', {
                link: 'https://rhemaonline.ca/events/',
              })
            }
          >
            <View style={styles.item}>
              <View style={{ width: 280 }}>
                <Image
                  source={require('../../assets/icons/calendar-icon.png')}
                />
                <Text style={styles.itemTitle}>Events</Text>
                <Text>Discover all Rhema events</Text>
              </View>
              <View>
                <Image source={require('../../assets/icons/right-arrow.png')} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Back', {
                link: 'https://rhemaonline.ca/connect',
              })
            }
          >
            <View style={styles.item}>
              <View style={{ width: 280 }}>
                <Image
                  source={require('../../assets/icons/support-icon.png')}
                />
                <Text style={styles.itemTitle}>Support</Text>
                <Text>Discover Rhema we care services</Text>
              </View>
              <View>
                <Image source={require('../../assets/icons/right-arrow.png')} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Back', {
                link: 'https://rhemaonline.ca/get-connected/#groups',
              })
            }
          >
            <View style={styles.item}>
              <View style={{ width: 280 }}>
                <Image source={require('../../assets/icons/groups-icon.png')} />
                <Text style={styles.itemTitle}>Groups</Text>
                <Text>Discover all Rhema groups</Text>
              </View>
              <View>
                <Image source={require('../../assets/icons/right-arrow.png')} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Back', {
                link: 'https://www.bible.com/',
              })
            }
          >
            <View style={styles.item}>
              <View style={{ width: 280 }}>
                <Image source={require('../../assets/icons/bible-icon.png')} />
                <Text style={styles.itemTitle}>Bible</Text>
                <Text>Visit bible.com</Text>
              </View>
              <View>
                <Image source={require('../../assets/icons/right-arrow.png')} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  subTitle: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  items: { display: 'flex', alignItems: 'center' },
  item: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    // elevation: 1,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 12,
    marginBottom: 2,
  },
});
