import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Dimensions,
  BackHandler
} from 'react-native'
const { width, height } = Dimensions.get('window')
import RadioButton from '../../components/RadioButton/index'

import { connect, useDispatch } from 'react-redux'
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'
import BackButtonHandler from '../../components/BackHandler';


const HowDoYouFeel = ({ navigation, user, route }) => {
  const fromBurn = route?.params?.fromBurn

  const dispatch = useDispatch()
  const [enabled, setEnabled] = useState(null)




  BackButtonHandler('hardwareBackPress', async () => {
    if (navigation.isFocused()) {

      if (fromBurn) {
        navigation.replace('Write', {
          fromHowDoYouFeel: true
        })
      }
      else {
        navigation.goBack()
      }
    } else {
      navigation.goBack()
    }



  });
  return (
    <View style={{
      flex: 1
    }}>
      <StatusBar barStyle="dark-content" backgroundColor={'#BFCCE0'} />
      <LinearGradient
        style={styles.LinearGradient1}
        colors={['#BFCCE0', '#F8F7F4']}>
        <View style={styles.crossStyle}>
          <Feather onPress={() => { navigation.navigate('BOB') }} name={'x'} size={50} color={'#A3A2BA'} />
        </View>
        <LinearGradient
          style={styles.LinearGradient2}
          colors={['#F8F7F4', '#BFCCE0']}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: 20
            }}>
            <Text style={styles.titleTextStyle}>How do you feel?</Text>
            <View>
              <RadioButton onPress={(e) => setEnabled(e)} style={{ marginVertical: 5 }} />
            </View>
            <View style={styles.buttonViewStyle}>
              <NewmorphButton
                backgroundColor="#C7D3E3"
                imgStyle={{ marginLeft: 10 }}
                onPress={() => {
                  if (enabled == null) {
                    Alert.alert("Alert", "Please Select one!")
                  } else {
                    if (enabled == 0) {
                      navigation.navigate('TellUsMore')
                    } else {
                      navigation.navigate('BOB')
                    }
                  }
                }}
              />
            </View>
          </View>
        </LinearGradient>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  LinearGradient1: {
    flex: 1,
    alignItems: 'center'
  },
  crossStyle: {
    width: '85%',

    marginTop: height * 0.04,
    alignItems: 'flex-end'
  },
  LinearGradient2: {
    width: '80%',
    height: height * 0.81,
    borderRadius: height / 2,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    // alignItems: 'center',
    justifyContent: 'center'
  },
  titleTextStyle: {
    color: '#6B6B8D',
    fontSize: 20,
    fontFamily: 'OPTIMA'
  },
  centerTextViewStyle: {
    marginVertical: height * 0.065,
    width: '85%'
  },
  centerTextStyle: {
    color: '#6B6B8D',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 25
  },
  buttonViewStyle: {
    marginTop: height * 0.03
  }
})

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(HowDoYouFeel)
