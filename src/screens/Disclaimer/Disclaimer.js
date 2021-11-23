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
import AntDesign from 'react-native-vector-icons/AntDesign'
import BackButtonHandler from '../../components/BackHandler';
import ImageZoom from 'react-native-image-pan-zoom';
import Sound from 'react-native-sound';

var soundPlayer: Sound;

const Disclaimer = ({ navigation, user }) => {
    const dispatch = useDispatch()
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

        navigation.addListener('focus', () => {
            console.log('navigation', navigation.isFocused())
        });
    }, []);

    BackButtonHandler('hardwareBackPress', async () => {
        if (navigation.isFocused()) {

            Alert.alert(
                'Exit App',
                'Are you sure you want to exit App?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => { },
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                            BackHandler.exitApp();

                        },
                    },
                ],
            );
        } else {
            navigation.goBack()
        }



    });

    const playSound = () => {

        setPlay(!play)

        if (!play) {
            soundPlayer.play((e) => { console.log('play', e, setPlay(false)) })
        }
        else {
            soundPlayer.pause((e) => { console.log(e) })
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
                    <Feather onPress={() => { navigation.navigate('BOB') }} name={'x'} size={50} color={'#A3A2BA'} />
                </View>
                <ImageZoom cropWidth={Dimensions.get('window').width}
                    cropHeight={Dimensions.get('window').height}
                    imageWidth={360}
                    imageHeight={670}
                >
                    <LinearGradient
                        style={styles.LinearGradient2}
                        colors={['#F8F7F4', '#BFCCE0']}>

                        <Text style={styles.discliamerTextStyle}>Disclaimer</Text>

                        <View style={styles.centerTextViewStyle}>
                            <Text style={styles.centerTextStyle}>BoB is your virtual companion in most situations, but in case
                                you are experiencing extreme trauma, you are in danger, or you are at risk of self-harm, please tap on
                                the phone below to contact your local emergency hotline.
                            </Text>
                        </View>




                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.buttonViewStyle}>
                            <NewmorphButton backgroundColor="#C7D3E3"

                                // onPress={() => alert('hhuuh')}

                                imgPath={require('../../assets/images/phone.png')}
                                imgStyle={{
                                    height: 40,
                                    width: 40,
                                    marginLeft: 5

                                }}
                            />
                        </TouchableOpacity>



                        <View style={{
                            alignItems: 'center',
                            marginTop: 30
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
    discliamerTextStyle: {
        color: '#6B6B8D',
        fontSize: 22,
        fontFamily: 'OPTIMA'
    },
    centerTextViewStyle: {
        marginVertical: height * 0.065,
        width: '85%',
        // fontFamily: 'Optima'
    },
    centerTextStyle: {
        color: '#6B6B8D',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 27,
    },
    buttonViewStyle: {
        // marginTop: height * 0.03
    },
    buttonViewStyle1: {
        // marginTop: 5
    }

})

const mapStateToProps = state => {
    return {
        user: state.userReducer.users
    }
}

export default connect(mapStateToProps, null)(Disclaimer)
