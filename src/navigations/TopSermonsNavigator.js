import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { StatusBar } from 'react-native'
import AudioScreen from '../screens/sermons/AudioScreen'
import LiveScreen from '../screens/sermons/LiveScreen'
import VideoScreen from '../screens/sermons/VideoScreen'

const Tab = createMaterialTopTabNavigator()

const SermonsScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: { backgroundColor: 'black' },
        style: {
          paddingTop: StatusBar.currentHeight,
        },
      }}
    >
      <Tab.Screen name='Video' component={VideoScreen} />
      <Tab.Screen name='Audio' component={AudioScreen} />
      <Tab.Screen name='Live' component={LiveScreen} />
    </Tab.Navigator>
  )
}

export default SermonsScreen
