import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import iFrame from '../components/common/iFrame'
import DiscoverScreen from '../screens/DiscoverScreen'
import GivingScreen from '../screens/GivingScreen'
import LocationScreen from '../screens/LocationScreen'
import ProfileScreen from '../screens/ProfileScreen'
import VideoPlayerScreen from '../screens/sermons/VideoPlayerScreen'
import TopSermonsNavigator from './TopSermonsNavigator'

const Stack = createStackNavigator()

// const screenOptionStyle = {
//   headerStyle: {
//     backgroundColor: '#9AC4F8'
//   },
//   headerTintColor: 'white',
//   headerBackTitle: 'Back'
// }

const SermonsStack = () => {
  return (
    <Stack.Navigator
    // screenOptions={screenOptionStyle}
    >
      <Stack.Screen
        name='Sermons'
        component={TopSermonsNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Video Player'
        component={VideoPlayerScreen}
        screenOptions={{ animationEnabled: false }}
      />
    </Stack.Navigator>
  )
}

const DiscoverStack = () => {
  return (
    <Stack.Navigator
    // screenOptions={screenOptionStyle}
    >
      <Stack.Screen
        name='Discover'
        component={DiscoverScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Back'
        component={iFrame}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const GivingStack = () => {
  return (
    <Stack.Navigator
    // screenOptions={screenOptionStyle}
    >
      <Stack.Screen name='Giving' component={GivingScreen} />
      <Stack.Screen
        name='Back'
        component={iFrame}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const LocationStack = () => {
  return (
    <Stack.Navigator
    // screenOptions={screenOptionStyle}
    >
      <Stack.Screen name='Location' component={LocationScreen} />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <Stack.Navigator
    // screenOptions={screenOptionStyle}
    >
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export { SermonsStack, DiscoverStack, GivingStack, LocationStack, ProfileStack }
