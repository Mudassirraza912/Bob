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
import VoiceRecorder from '../screens/RecordAudio'
import HowDoYouFeel from '../screens/QAScreens/HowDoYouFeel'
import TellUsMore from '../screens/QAScreens/TellUsMore'
import RationalChallenge from '../screens/QAScreens/RationalChallenge'
import RationalChallenge2 from '../screens/QAScreens/RationalChallenge2'
import RationalChallenge3 from '../screens/QAScreens/RationalChallenge3'
import RationalChallenge4 from '../screens/QAScreens/RationalChallenge4'
import RationalChallenge5 from '../screens/QAScreens/RationalChallenge5'
import RationalChallenge6 from '../screens/QAScreens/RationalChallenge6'
import VentItScreens from '../screens/BOB/VentItScreen'
import Write from '../screens/Write/Write'
import RecommendProfessional from '../screens/QAScreens/RecommendProfessional'
import whatsOnYourMind from '../screens/QAScreens/whatsOnYourMind'
import IsItHelpFull from '../screens/QAScreens/IsItHelpFull'

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
          name="VentItScreens"
          options={{ headerShown: false }}
          component={VentItScreens}
        />
        <Stack.Screen
          name="Disclaimer"
          options={{ headerShown: false }}
          component={Disclaimer}
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
          name="RationalChallenge2"
          options={{ headerShown: false }}
          component={RationalChallenge2}
        />
            <Stack.Screen
          name="RationalChallenge3"
          options={{ headerShown: false }}
          component={RationalChallenge3}
        />
            <Stack.Screen
          name="RationalChallenge4"
          options={{ headerShown: false }}
          component={RationalChallenge4}
        />
            <Stack.Screen
          name="RationalChallenge5"
          options={{ headerShown: false }}
          component={RationalChallenge5}
        />
        <Stack.Screen
          name="RationalChallenge6"
          options={{ headerShown: false }}
          component={RationalChallenge6}
        />
        <Stack.Screen
          name="IsItHelpFull"
          options={{ headerShown: false }}
          component={IsItHelpFull}
        />
        <Stack.Screen
          name="RecommendProfessional"
          options={{ headerShown: false }}
          component={RecommendProfessional}
        />
        <Stack.Screen
          name="WhatsOnYourMind"
          options={{ headerShown: false }}
          component={whatsOnYourMind}
        />
        <Stack.Screen
          name="WhoIsBob"
          options={{ headerShown: false }}
          component={WhoIsBob}
        />
        <Stack.Screen
          name="Record"
          options={{ headerShown: false }}
          component={VoiceRecorder}
        />
        <Stack.Screen
          name="Write"
          options={{ headerShown: false }}
          component={Write}
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
