import 'react-native-gesture-handler'
import React from 'react'
import MainNavigation from './navigation/navigation'
import { BackHandler, Alert } from 'react-native'

import { Provider } from 'react-redux'
import { store } from './stores'
import Newmorph from './components/NewmorphButton'
import BackButtonHandler from '../src/components/BackHandler';


const App = () => {


  // BackButtonHandler('hardwareBackPress', async () => {


  //   Alert.alert(
  //     'Exit App',
  //     'Are you sure you want to exit App?',
  //     [
  //       {
  //         text: 'Cancel',
  //         onPress: () => { },
  //       },
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           BackHandler.exitApp();

  //         },
  //       },
  //     ],
  //   );

  // });

  return (
    <>
      <Provider store={store}>
        <MainNavigation />


      </Provider>
    </>
  )
}

export default App
