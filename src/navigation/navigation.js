import React from 'react'
import Home from '../screens/Home/Home.screen'
import Disclaimer from '../screens/Disclaimer/Disclaimer'
import Profile from '../screens/Profile/Profile.screen'
import BOB from '../screens/BOB/BOB'
import WhoIsBob from '../screens/WhoIsBob/WhoIsBob'
import Record from '../screens/Record/Record'
import Burn from '../screens/Burn/Burn'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { VoiceRecorder } from '../screens/RecordAudio'
import HowDoYouFeel from '../screens/QAScreens/HowDoYouFeel'
import TellUsMore from '../screens/QAScreens/TellUsMore'
import RationalChallenge from '../screens/QAScreens/RationalChallenge'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-home'} size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="BOB"
          options={{ headerShown: false }}
          component={BOB}
        />
        <Stack.Screen
          name="Disclaimer"
          options={{ headerShown: false }}
          component={Disclaimer}
        />
        <Stack.Screen
          name="VoiceRecorder"
          options={{ headerShown: false }}
          component={Record}
        />
        <Stack.Screen
          name="HowDoYouFeel"
          options={{ headerShown: false }}
          component={HowDoYouFeel}
        />
        <Stack.Screen
          name="TellUsMore"
          options={{ headerShown: false }}
          component={TellUsMore}
        />
        <Stack.Screen
          name="RationalChallenge"
          options={{ headerShown: false }}
          component={RationalChallenge}
          />
        <Stack.Screen
          name="WhoIsBob"
          options={{ headerShown: false }}
          component={WhoIsBob}
        />
        <Stack.Screen
          name="Record"
          options={{ headerShown: false }}
          component={Record}
        />
        <Stack.Screen
          name="Burn"
          options={{ headerShown: false }}
          component={Burn}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
