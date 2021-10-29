import React, { useEffect, useState, useRef } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Dimensions,
    Image,
    Animated,
    Platform
} from 'react-native'
const { width, height } = Dimensions.get('window');

import AudioRecorderPlayer, {
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
    AudioEncoderAndroidType,
    AudioSet,
    AudioSourceAndroidType,
    PlayBackType,
    RecordBackType,
  } from 'react-native-audio-recorder-player';

import { connect, useDispatch } from 'react-redux'
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'
import WhiteButton from '../../components/WhiteButton'
import Sound from 'react-native-sound';

const Burn = ({ navigation }) => {

    const audioRecorderPlayer = new AudioRecorderPlayer();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fileName = Platform.OS == "android" ? 'burning_paper.mp3':'Burning_Paper.m4a'
    const soundBurn = new Sound(fileName, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
    }
    )

    const fadeIn = async () => {
        soundBurn.play((e) => {console.log("onEnd e", e)})
        SetShowBurn(true)
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();

    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true
        }).start();
    };

    const [isBurnIcon, SetShowBurn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            if (isBurnIcon) {
                fadeOut()
                soundBurn.stop()
                SetShowBurn(false)
                navigation.navigate('HowDoYouFeel')
            }
        }, 1800)
    }, [isBurnIcon])


    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <StatusBar barStyle="dark-content" backgroundColor='#E6C5C0' />
            <LinearGradient
                style={styles.LinearGradient1}
                colors={['#E6C5C0', '#EAE8EA']}
            >
                <View style={styles.crossStyle}>
                    <Feather onPress={() => navigation.goBack()} name={'x'} size={50} color={'#A3A2BA'} />
                </View>
                <LinearGradient
                    style={styles.LinearGradient2}
                    colors={['#EAE8EA', '#E6C5C0']}>
                    <View style={{
                        // justifyContent: 'space-between'
                    }}>
                        <View
                            style={styles.imageTextViewStyle}
                        >
                            <Image source={require('../../assets/images/pencil.png')} style={{ width: 42, height: 57 }} />
                            <Text
                                style={styles.textStyle}
                            >
                                Burn your Note
                            </Text>
                        </View>
                        <ImageBackground source={require('../../assets/images/flame.png')} style={{
                            width: 270,
                            height: 404,
                        }}>
                            <View
                                style={[styles.centerImageViewStyle]}
                            >
                                {!isBurnIcon ?
                                    <Image source={require('../../assets/images/book.png')} style={{ width: 90, height: 86, }} />
                                    :
                                    <Animated.View style={[
                                        {
                                            opacity: fadeAnim,
                                        },
                                    ]}>
                                        <Image source={require('../../assets/flame.gif')} style={{ width: 375, height: 812, }} />
                                    </Animated.View>}
                            </View>
                            <View
                                style={styles.buttonViewStyle}

                            >
                                {/* <WhiteButton onPress={fadeIn} title="Burn" textStyle={{ color: "#E39684" }} /> */}
                                <WhiteButton onPress={() => fadeIn()} title="Burn" textStyle={{ color: "#E39684" }} />

                            </View>
                        </ImageBackground>

                    </View>
                </LinearGradient>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    LinearGradient1: {
        flex: 1, alignItems: 'center'
    },
    crossStyle: {
        width: '85%',

        marginTop: height * 0.02,
        alignItems: 'flex-end'
    },
    LinearGradient2: {
        width: '80%', height: height * 0.81, borderRadius: height / 2, backgroundColor: 'transparent',
        overflow: 'hidden',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    imageTextViewStyle: {
        height: height * 0.27,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.04
    },
    textStyle: {
        fontSize: 22,
        color: '#6B6B8D'
    },
    centerImageViewStyle: {
        height: height * 0.2,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonViewStyle: {
        height: 220,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }

})

const mapStateToProps = state => {
    return {
        user: state.userReducer.users
    }
}

export default connect(mapStateToProps, null)(Burn)
