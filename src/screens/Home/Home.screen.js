import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from 'react-native'
import { connect, useDispatch } from 'react-redux'
import NewmorphButton from '../../components/NewmorphButton/index'
const Home = ({ navigation, user }) => {
  const dispatch = useDispatch()

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#B5C5DC'} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <ImageBackground source={require('../../assets/images/earBack.png')} style={styles.imgBackground}>
          <View style={{ paddingVertical: 40, alignItems: 'center' }}>
            <View>
              <Text style={styles.nameTxt}>
                Hey Daniel
              </Text>
            </View>
            <View>
              <Text style={styles.title}>
                I am BoB
              </Text>
            </View>
            <View>
              <Text style={styles.tagline}>
                And I am all ears
              </Text>
            </View>
          </View>

          <View style={styles.bottomBtn}>
            <NewmorphButton backgroundColor="#B5C5DC" onPress={() => {
              navigation.navigate('Disclaimer')
            }} />
          </View>

        </ImageBackground>
      </SafeAreaView>
      {/* <View>
            <NewmorphButton />
          </View> */}

    </>
  )
}

const styles = StyleSheet.create({
  imgBackground: { height: '100%', width: '100%', alignItems: 'center' },
  nameTxt: {
    color: '#9493AD',
    textTransform: 'uppercase',
    fontSize: 18,
  },
  title: {
    color: '#49485F',
    fontSize: 48,
    fontFamily:"OPTIMA"
    
  },
  tagline: {
    color: '#fff',
    fontSize: 22
  },
  bottomBtn: {
    position: 'absolute',
    bottom: 30
  }
})

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(Home)
