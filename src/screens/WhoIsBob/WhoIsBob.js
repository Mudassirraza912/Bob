import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Dimensions,
    BackHandler,
    Alert

} from 'react-native'
const { width, height } = Dimensions.get('window');

import { connect, useDispatch } from 'react-redux'
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'
import ImageZoom from 'react-native-image-pan-zoom';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Sound from 'react-native-sound';

var soundPlayer: Sound;

const WhoIsBob = ({ navigation }) => {
    const [play, setPlay] = useState(false)
    const TrashAudio = Platform.OS == "android" ? "audio_trash.mp3" : "Audio_Trash.m4a"




    useEffect(() => {

        soundPlayer = new Sound(TrashAudio, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
        }
        )

    }, []);

    // useEffect(() => {
    //     soundPlayer.getDuration((e) => { console.log('duartion', e) })
    // }, [])



    const playSound = () => {

        setPlay(!play)

        if (!play) {
            soundPlayer.play((e) => { console.log('play', e, setPlay(false)) })
        }
        else {
            soundPlayer.pause((e) => { console.log('pause', e) })
        }



    }
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <StatusBar barStyle="dark-content" backgroundColor={'#BFCCE0'} />
            <LinearGradient
                style={styles.LinearGradient1}
                colors={['#BFCCE0', '#F8F7F4']}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => navigation.goBack()} name={'x'} size={50} color={'#A3A2BA'} />
                </View>
                <ImageZoom cropWidth={Dimensions.get('window').width}
                    cropHeight={Dimensions.get('window').height}
                    imageWidth={360}
                    imageHeight={700}
                >
                    <LinearGradient
                        style={styles.LinearGradient2}
                        colors={['#F8F7F4', '#BFCCE0']}>
                        <View style={styles.textMainViewStyle}>

                            <Text style={styles.text1Style}>
                                BoB, a virtual companion, is ready to listen to you without judgment, anywhere, any time.  It is programmed to, in the moment, give you access to quick tools to help you calibrate your emotions when you are triggered.

                            </Text>
                            <Text style={styles.text1Style}>
                                In this way you will get accustomed to turning your reactions to responses.

                            </Text>
                            <Text style={styles.text1Style}>
                                It will also allow you to reflect on your triggers, thoughts, emotions, and responses.


                            </Text>
                            <Text style={styles.text1Style}>

                                Therefore, ensuring that you will proactively manage them in the
                                future. Bob also provides you with a safe environment to vent; by recording or typing your destructive thoughts and emotions, and eventually discarding them, therefore allowing you to let them go with gratitude.


                            </Text>
                            <Text style={styles.text1Style}>
                                BoB, should NOT be used in case
                                of emergency or self-harm, in this event, please contact your local emergency hotline.



                            </Text>
                        </View>

                        <View style={{
                            alignItems: 'center',
                            marginTop: 25
                        }}>
                            <AntDesign onPress={() => {
                                playSound()

                            }} name={play ? 'pause' : 'caretright'} size={30} color={'#A3A2BA'} />
                        </View>


                    </LinearGradient>
                </ImageZoom>
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
        justifyContent: 'center',
        marginLeft: 35
    },
    textMainViewStyle: {
        width: '85%',
    },
    text1Style: {
        textAlign: 'center',
        fontSize: width / 30,
        // lineHeight: 10,
        marginBottom: 15,
        color: '#706F93'
    },



})

const mapStateToProps = state => {
    return {
        user: state.userReducer.users
    }
}

export default connect(mapStateToProps, null)(WhoIsBob)

