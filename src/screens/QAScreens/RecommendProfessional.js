import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions
} from 'react-native'
const { width, height } = Dimensions.get('window')
import RadioButton from '../../components/RadioButton/index'

import { connect, useDispatch } from 'react-redux'
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'

const RecommendProfessional = ({ navigation, user }) => {
  const dispatch = useDispatch()

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#BFCCE0'} />
      <LinearGradient
        style={styles.LinearGradient1}
        colors={['#BFCCE0', '#F8F7F4']}>
        <View style={styles.crossStyle}>
          <Feather  onPress={() => { navigation.navigate('BOB') }} name={'x'} size={50} color={'#A3A2BA'} />
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
            <Text style={styles.titleTextStyle}>We recommend {"\n"} you discuss this with {"\n"} a professional
            </Text>
            <View>
              <RadioButton title="This was not helpful" title2="Thank you… now it makes sense" style={{width:250}} style2={{width:250}}/>
            </View>
            <View style={styles.buttonViewStyle}>
              <NewmorphButton
                backgroundColor="#C7D3E3"
                onPress={() => {
                  navigation.navigate('BOB')
                }}
              />
            </View>
          </View>
        </LinearGradient>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  LinearGradient1: {
    flex: 1,
    alignItems: 'center'
  },
  crossStyle: {
    width: '85%',

    marginTop: height * 0.02,
    alignItems: 'flex-end'
  },
  LinearGradient2: {
    width: '80%',
    height: height * 0.81,
    borderRadius: height/2,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    // alignItems: 'center',
    justifyContent: 'center'
  },
  titleTextStyle: {
    color: '#6B6B8D',
    fontSize: 20,
    fontFamily: 'OPTIMA',
    textAlign: 'center'
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

export default connect(mapStateToProps, null)(RecommendProfessional)
