import React, { useEffect, useState } from 'react'
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {
    Dimensions,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import { getPermissions } from '../../utils/getPermission';
import Button from './Button';

export const VoiceRecorder = () => {

        const [recordSecs, setrecordSecs] = useState(0)
        const [recordTime, setrecordTime] = useState(0)
        const [currentPositionSec, setcurrentPositionSec] = useState(0)
        const [currentDurationSec, setcurrentDurationSec] = useState(0)
        const [playTime, setplayTime] = useState(0)
        const [duration, setduration] = useState(0)




        useEffect(() => {
            getPermissions()
        }, [])

        const audioRecorderPlayer = new AudioRecorderPlayer();
        // const playWidth =
        // (currentPositionSec / currentDurationSec) *
        // (screenWidth - 56);

        const onStartRecord = async () => {
        const result = await audioRecorderPlayer.startRecorder();
        audioRecorderPlayer.addRecordBackListener((e) => {
            setrecordSecs(e.currentPosition)
            setrecordTime(audioRecorderPlayer.mmssss(
                Math.floor(e.currentPosition),
            ))
            return;
        });
        console.log(result);
        };

        const onStopRecord = async () => {
        const result = await audioRecorderPlayer.stopRecorder();
        audioRecorderPlayer.removeRecordBackListener();
        setrecordSecs(0)
        console.log(result);
        };

        const onStartPlay = async () => {
        console.log('onStartPlay');
        const msg = await audioRecorderPlayer.startPlayer();
        console.log(msg);
        audioRecorderPlayer.addPlayBackListener((e) => {
            setcurrentPositionSec(e.currentPosition)
            setcurrentDurationSec(e.duration)
            setplayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)))
            setduration(audioRecorderPlayer.mmssss(Math.floor(e.duration)))
            return;
        });
        };

        const onPausePlay = async () => {
        await audioRecorderPlayer.pausePlayer();
        };

        const onStopPlay = async () => {
        console.log('onStopPlay');
        audioRecorderPlayer.stopPlayer();
        audioRecorderPlayer.removePlayBackListener();
        };

        const onResumePlay = async () => {
            await audioRecorderPlayer.resumePlayer();
          };

        const onStatusPress = (e) => {
            const touchX = e.nativeEvent.locationX;
            console.log(`touchX: ${touchX}`);
           
            console.log(`currentPlayWidth: ${playWidth}`);
        
            const currentPosition = Math.round(currentPositionSec);
        
            if (playWidth && playWidth < touchX) {
              const addSecs = Math.round(currentPosition + 1000);
              audioRecorderPlayer.seekToPlayer(addSecs);
              console.log(`addSecs: ${addSecs}`);
            } else {
              const subSecs = Math.round(currentPosition - 1000);
              audioRecorderPlayer.seekToPlayer(subSecs);
              console.log(`subSecs: ${subSecs}`);
            }
          };



        return (
        <SafeAreaView style={styles.container}>
                <Text style={styles.titleTxt}>Audio Recorder Player</Text>
                <Text style={styles.txtRecordCounter}>{recordTime}</Text>
                <View style={styles.viewRecorder}>
                <View style={styles.recordBtnWrapper}>
                    <Button
                    style={styles.btn}
                    onPress={onStartRecord}
                    textStyle={styles.txt}>
                    Record
                    </Button>
                    <Button
                    style={[
                        styles.btn,
                        {
                        marginLeft: 12,
                        },
                    ]}
                    onPress={onPausePlay}
                    textStyle={styles.txt}>
                    Pause
                    </Button>
                    <Button
                    style={[
                        styles.btn,
                        {
                        marginLeft: 12,
                        },
                    ]}
                    // onPress={onResumeRecord}
                    textStyle={styles.txt}>
                    Resume
                    </Button>
                    <Button
                    style={[styles.btn, {marginLeft: 12}]}
                    onPress={onStopRecord}
                    textStyle={styles.txt}>
                    Stop
                    </Button>
                </View>
                </View>
                <View style={styles.viewPlayer}>
                {/* <TouchableOpacity
                    style={styles.viewBarWrapper}
                    onPress={onStatusPress}>
                    <View style={styles.viewBar}>
                    <View style={[styles.viewBarPlay, {width: playWidth}]} />
                    </View>
                </TouchableOpacity> */}
                <Text style={styles.txtCounter}>
                    {playTime} / {duration}
                </Text>
                <View style={styles.playBtnWrapper}>
                    <Button
                    style={styles.btn}
                    onPress={onStartPlay}
                    textStyle={styles.txt}>
                    Play
                    </Button>
                    <Button
                    style={[
                        styles.btn,
                        {
                        marginLeft: 12,
                        },
                    ]}
                    onPress={onPausePlay}
                    textStyle={styles.txt}>
                    Pause
                    </Button>
                    <Button
                    style={[
                        styles.btn,
                        {
                        marginLeft: 12,
                        },
                    ]}
                    onPress={onResumePlay}
                    textStyle={styles.txt}>
                    Resume
                    </Button>
                    <Button
                    style={[
                        styles.btn,
                        {
                        marginLeft: 12,
                        },
                    ]}
                    onPress={onStopPlay}
                    textStyle={styles.txt}>
                    Stop
                    </Button>
                </View>
                </View>
            </SafeAreaView>
        )
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#455A64',
      flexDirection: 'column',
      alignItems: 'center',
    },
    titleTxt: {
      marginTop: 100,
      color: 'white',
      fontSize: 28,
    },
    viewRecorder: {
      marginTop: 40,
      width: '100%',
      alignItems: 'center',
    },
    recordBtnWrapper: {
      flexDirection: 'row',
    },
    viewPlayer: {
      marginTop: 60,
      alignSelf: 'stretch',
      alignItems: 'center',
    },
    viewBarWrapper: {
      marginTop: 28,
      marginHorizontal: 28,
      alignSelf: 'stretch',
    },
    viewBar: {
      backgroundColor: '#ccc',
      height: 4,
      alignSelf: 'stretch',
    },
    viewBarPlay: {
      backgroundColor: 'white',
      height: 4,
      width: 0,
    },
    playStatusTxt: {
      marginTop: 8,
      color: '#ccc',
    },
    playBtnWrapper: {
      flexDirection: 'row',
      marginTop: 40,
    },
    btn: {
      borderColor: 'white',
      borderWidth: 1,
    },
    txt: {
      color: 'white',
      fontSize: 14,
      marginHorizontal: 8,
      marginVertical: 4,
    },
    txtRecordCounter: {
      marginTop: 32,
      color: 'white',
      fontSize: 20,
      textAlignVertical: 'center',
      fontWeight: '200',
      fontFamily: 'Helvetica Neue',
      letterSpacing: 3,
    },
    txtCounter: {
      marginTop: 12,
      color: 'white',
      fontSize: 20,
      textAlignVertical: 'center',
      fontWeight: '200',
      fontFamily: 'Helvetica Neue',
      letterSpacing: 3,
    },
  });
 
  
  const screenWidth = Dimensions.get('screen').width;

