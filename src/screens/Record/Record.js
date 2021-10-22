import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native'
const { width, height } = Dimensions.get('window');

import { connect, useDispatch } from 'react-redux'
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'

const Record = ({
    onRecord = () => { },
    onPlay = () => { },
    onStop = () => { },
    isRecording = false,
    isRecordingComplete = false
}) => {
    const [recordingStart, setRecordingStart] = useState(false)

    // useEffect(() => {
    //     setRecordingStart(isRecordingComplete)
    // }, [isRecordingComplete])

    const startRecording = () => {
        // setRecordingStart(true)
    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={recordingStart ? '#E6C5C0' : '#BFCCE0'} />
            <LinearGradient
                style={styles.LinearGradient1}
                colors={recordingStart ? ['#E6C5C0', '#EAE8EA'] : ['#BFCCE0', '#F8F7F4']}


            >
                <View style={styles.crossStyle}>
                    <Feather name={'x'} size={50} color={'#A3A2BA'} />
                </View>
                <LinearGradient
                    style={styles.LinearGradient2}
                    colors={recordingStart ? ['#EAE8EA', '#E6C5C0'] : ['#F8F7F4', '#BFCCE0']}>


                    <View style={{
                        justifyContent: 'space-between'

                    }}>
                        <View style={{
                            height: 200,
                            // backgroundColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 50
                        }}>
                            <Image source={recordingStart ? require('../../assets/images/mike2.png') : require('../../assets/images/mike.png')} style={{ width: 35, height: 56 }} />
                            <Text style={{
                                fontSize: 22,
                                color: '#6B6B8D'
                            }}>
                                {recordingStart ? 'Drag to Trash' : 'Record'}
                            </Text>
                            <Text style={{
                                fontSize: 22,
                                color: '#6B6B8D'
                            }}>
                                {recordingStart ? 'Your note' : 'I am all ears'}
                            </Text>


                        </View>
                        <View style={{
                            height: recordingStart ? 150 : 150,
                            // backgroundColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Image source={recordingStart ? require('../../assets/images/trash.png') : require('../../assets/images/Line.png')} style={{ width: recordingStart ? 89 : 200, height: recordingStart ? 108 : 3 }} />


                        </View>
                        <View style={{
                            height: recordingStart ? 180 : 220,
                            // backgroundColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            <NewmorphButton backgroundColor={recordingStart ? '#E6C5C0' : '#C7D3E3'} onPress={() => {
                                console.log("isRecording", isRecording, 'isRecordingComplete', isRecordingComplete)
                                if(!isRecording) {
                                    onRecord()
                                }else if (isRecording && !isRecordingComplete) {
                                    onStop()
                                }else {
                                    onPlay()
                                }
                            }}

                                imgPath={recordingStart ? require('../../assets/images/play.png') : (isRecording ? require('../../assets/images/play.png') : require('../../assets/images/mike2.png'))}
                                imgStyle={isRecording ? {
                                    height: 40,
                                    width: 40

                                } : { width: 35, height: 56 }}
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
        flex: 1, alignItems: 'center'
    },
    crossStyle: {
        width: '85%',

        marginTop: height * 0.02,
        alignItems: 'flex-end'
    },
    LinearGradient2: {
        width: '80%', height: height * 0.81, borderRadius: 150, backgroundColor: 'transparent',
        overflow: 'hidden',
        alignItems: 'center',
        // justifyContent: 'center'
    },


})

const mapStateToProps = state => {
    return {
        user: state.userReducer.users
    }
}

export default connect(mapStateToProps, null)(Record)
