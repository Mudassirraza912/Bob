// import React, { useEffect, useState } from 'react'
// import AudioRecorderPlayer, { AudioEncoderAndroidType, AudioSourceAndroidType, AVEncoderAudioQualityIOSType, AVEncodingOption } from 'react-native-audio-recorder-player';
// import {
//   Dimensions,
//   Platform,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { getPermissions } from '../../utils/getPermission';
// import Button from './Button';

// import RNFetchBlob from 'rn-fetch-blob'

// const { config, fs } = RNFetchBlob
// const audioRecorderPlayer = new AudioRecorderPlayer();


// const VoiceRecorder = () => {

//   const [recordSecs, setrecordSecs] = useState(0)
//   const [recordTime, setrecordTime] = useState(0)
//   const [currentPositionSec, setcurrentPositionSec] = useState(0)
//   const [currentDurationSec, setcurrentDurationSec] = useState(0)
//   const [playTime, setplayTime] = useState(0)
//   const [duration, setduration] = useState(0)




//   useEffect(() => {
//     getPermissions()
//   }, [])

//   // const playWidth =
//   // (currentPositionSec / currentDurationSec) *
//   // (screenWidth - 56);

//   const onStartRecord = async () => {
//     const dirs = RNFetchBlob.fs.dirs;
//     const path = Platform.select({
//       ios: 'hello.m4a',
//       android: `${dirs.CacheDir}/hello.mp3`,
//     });
//     console.log('path', path)
//     const result = await audioRecorderPlayer.startRecorder(path);
//     audioRecorderPlayer.addRecordBackListener((e) => {
//       setrecordSecs(e.currentPosition)
//       setrecordTime(audioRecorderPlayer.mmssss(
//         Math.floor(e.currentPosition),
//       ))
//       return;
//     });
//     console.log('onStartRecord', result);
//   };

//   const onStopRecord = async () => {
//     const result = await audioRecorderPlayer.stopRecorder();
//     audioRecorderPlayer.removeRecordBackListener();
//     setrecordSecs(0)
//     console.log('onStopRecord', result);
//   };

//   const onStartPlay = async () => {
//     console.log('onStartPlay');
//     const msg = await audioRecorderPlayer.startPlayer();
//     console.log("onStartPlay", msg);
//     audioRecorderPlayer.addPlayBackListener((e) => {
//       setcurrentPositionSec(e.currentPosition)
//       setcurrentDurationSec(e.duration)
//       setplayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)))
//       setduration(audioRecorderPlayer.mmssss(Math.floor(e.duration)))
//       return;
//     });
//   };

//   const onPausePlay = async () => {
//     const result =await audioRecorderPlayer.pausePlayer();
//     console.log('onPausePlay', result)
//   };

//   const onStopPlay = async () => {
//     console.log('onStopPlay');
//     audioRecorderPlayer.stopPlayer();
//     audioRecorderPlayer.removePlayBackListener();
//   };

//   const onResumePlay = async () => {
//     const result = await audioRecorderPlayer.resumePlayer();
//     console.log('onResumePlay', result)
//   };

//   const onStatusPress = (e) => {
//     const touchX = e.nativeEvent.locationX;
//     console.log(`touchX: ${touchX}`);

//     console.log(`currentPlayWidth: ${playWidth}`);

//     const currentPosition = Math.round(currentPositionSec);

//     if (playWidth && playWidth < touchX) {
//       const addSecs = Math.round(currentPosition + 1000);
//       audioRecorderPlayer.seekToPlayer(addSecs);
//       console.log(`addSecs: ${addSecs}`);
//     } else {
//       const subSecs = Math.round(currentPosition - 1000);
//       audioRecorderPlayer.seekToPlayer(subSecs);
//       console.log(`subSecs: ${subSecs}`);
//     }
//   };



//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.titleTxt}>Audio Recorder Player</Text>
//       <Text style={styles.txtRecordCounter}>{recordTime}</Text>
//       <View style={styles.viewRecorder}>
//         <View style={styles.recordBtnWrapper}>
//           <Button
//             style={styles.btn}
//             onPress={onStartRecord}
//             textStyle={styles.txt}>
//             Record
//           </Button>
//           {/* <Button
//             style={[
//               styles.btn,
//               {
//                 marginLeft: 12,
//               },
//             ]}
//             onPress={onPausePlay}
//             textStyle={styles.txt}>
//             Pause
//           </Button> */}
//           {/* <Button
//             style={[
//               styles.btn,
//               {
//                 marginLeft: 12,
//               },
//             ]}
//             onPress={onResumeRecord}
//             textStyle={styles.txt}>
//             Resume
//           </Button> */}
//           <Button
//             style={[styles.btn, { marginLeft: 12 }]}
//             onPress={onStopRecord}
//             textStyle={styles.txt}>
//             Stop
//           </Button>
//         </View>
//       </View>
//       <View style={styles.viewPlayer}>
//         {/* <TouchableOpacity
//                     style={styles.viewBarWrapper}
//                     onPress={onStatusPress}>
//                     <View style={styles.viewBar}>
//                     <View style={[styles.viewBarPlay, {width: playWidth}]} />
//                     </View>
//                 </TouchableOpacity> */}
//         <Text style={styles.txtCounter}>
//           {playTime} / {duration}
//         </Text>
//         <View style={styles.playBtnWrapper}>
//           <Button
//             style={styles.btn}
//             onPress={onStartPlay}
//             textStyle={styles.txt}>
//             Play
//           </Button>
//           <Button
//             style={[
//               styles.btn,
//               {
//                 marginLeft: 12,
//               },
//             ]}
//             onPress={onPausePlay}
//             textStyle={styles.txt}>
//             Pause
//           </Button>
//           <Button
//             style={[
//               styles.btn,
//               {
//                 marginLeft: 12,
//               },
//             ]}
//             onPress={onResumePlay}
//             textStyle={styles.txt}>
//             Resume
//           </Button>
//           {/* <Button
//             style={[
//               styles.btn,
//               {
//                 marginLeft: 12,
//               },
//             ]}
//             onPress={onStopPlay}
//             textStyle={styles.txt}>
//             Stop
//           </Button> */}
//         </View>
//       </View>
//     </SafeAreaView>
//   )

// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#455A64',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   titleTxt: {
//     marginTop: 100,
//     color: 'white',
//     fontSize: 28,
//   },
//   viewRecorder: {
//     marginTop: 40,
//     width: '100%',
//     alignItems: 'center',
//   },
//   recordBtnWrapper: {
//     flexDirection: 'row',
//   },
//   viewPlayer: {
//     marginTop: 60,
//     alignSelf: 'stretch',
//     alignItems: 'center',
//   },
//   viewBarWrapper: {
//     marginTop: 28,
//     marginHorizontal: 28,
//     alignSelf: 'stretch',
//   },
//   viewBar: {
//     backgroundColor: '#ccc',
//     height: 4,
//     alignSelf: 'stretch',
//   },
//   viewBarPlay: {
//     backgroundColor: 'white',
//     height: 4,
//     width: 0,
//   },
//   playStatusTxt: {
//     marginTop: 8,
//     color: '#ccc',
//   },
//   playBtnWrapper: {
//     flexDirection: 'row',
//     marginTop: 40,
//   },
//   btn: {
//     borderColor: 'white',
//     borderWidth: 1,
//   },
//   txt: {
//     color: 'white',
//     fontSize: 14,
//     marginHorizontal: 8,
//     marginVertical: 4,
//   },
//   txtRecordCounter: {
//     marginTop: 32,
//     color: 'white',
//     fontSize: 20,
//     textAlignVertical: 'center',
//     fontWeight: '200',
//     fontFamily: 'Helvetica Neue',
//     letterSpacing: 3,
//   },
//   txtCounter: {
//     marginTop: 12,
//     color: 'white',
//     fontSize: 20,
//     textAlignVertical: 'center',
//     fontWeight: '200',
//     fontFamily: 'Helvetica Neue',
//     letterSpacing: 3,
//   },
// });


// const screenWidth = Dimensions.get('screen').width;
// export default VoiceRecorder




import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  PlayBackType,
  RecordBackType,
} from 'react-native-audio-recorder-player';
import {
  Dimensions,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image
} from 'react-native';
import React, { Component } from 'react';

import Button from './Button';
import RNFetchBlob from 'rn-fetch-blob';
import Record from '../Record/Record';
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'

const { width, height } = Dimensions.get('window');

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#455A64',
    // flexDirection: 'column',
    // alignItems: 'center',
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
});

interface State {
  isLoggingIn: boolean;
  recordSecs: number;
  recordTime: string;
  currentPositionSec: number;
  currentDurationSec: number;
  playTime: string;
  duration: string;
  isRecording: boolean;
  isRecordingComplete: boolean;
  isPlaying: boolean
}

const screenWidth = Dimensions.get('screen').width;

class VoiceRecorder extends Component<any, State> {
  private dirs = RNFetchBlob.fs.dirs;
  private path = Platform.select({
    ios: 'hello.m4a',
    android: `${this.dirs.CacheDir}/hello.mp3`,
  });

  private audioRecorderPlayer: AudioRecorderPlayer;

  constructor(props: any) {
    super(props);
    this.state = {
      isLoggingIn: false,
      recordSecs: 0,
      recordTime: '00:00:00',
      currentPositionSec: 0,
      currentDurationSec: 0,
      playTime: '00:00:00',
      duration: '00:00:00',
      isRecording: false,
      isRecordingComplete: false,
      isPlaying: false
    };

    this.audioRecorderPlayer = new AudioRecorderPlayer();
    this.audioRecorderPlayer.setSubscriptionDuration(0.1); // optional. Default is 0.5
  }

  public render() {
    let playWidth =
      (this.state.currentPositionSec / this.state.currentDurationSec) *
      (screenWidth - 56);

    if (!playWidth) {
      playWidth = 0;
    }
    const { isRecording, isRecordingComplete, isPlaying, duration, playTime, recordTime, recordSecs } = this.state
    console.log('duration, playTime, recordTime, recordSecs', duration, playTime, recordTime, recordSecs)
    return (
      <SafeAreaView style={styles.container}>
        <>
          <StatusBar barStyle="dark-content" backgroundColor={isRecordingComplete ? '#E6C5C0' : '#BFCCE0'} />
          <LinearGradient
            style={styles.LinearGradient1}
            colors={isRecordingComplete ? ['#E6C5C0', '#EAE8EA'] : ['#BFCCE0', '#F8F7F4']}


          >
            <View style={styles.crossStyle}>
              <Feather onPress={() => this.props.navigation.goBack()} name={'x'} size={50} color={'#A3A2BA'} />
            </View>
            <LinearGradient
              style={styles.LinearGradient2}
              colors={isRecordingComplete ? ['#EAE8EA', '#E6C5C0'] : ['#F8F7F4', '#BFCCE0']}>


              <View style={{
                justifyContent: 'space-between'

              }}>
                <View style={{
                  height: height * 0.26,
                  // backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: height * 0.07
                }}>
                  <Image source={isRecordingComplete ? require('../../assets/images/mike2.png') : require('../../assets/images/mike.png')} style={{ width: 35, height: 56 }} />
                  <Text style={{
                    fontSize: 22,
                    color: '#6B6B8D'
                  }}>
                    {isRecordingComplete ? 'Drag to Trash' : 'Record'}
                  </Text>
                  <Text style={{
                    fontSize: 22,
                    color: '#6B6B8D'
                  }}>
                    {isRecordingComplete ? 'Your note' : 'I am all ears'}
                  </Text>


                </View>
                <View style={{
                  // height: isRecordingComplete ? 150 : 150,
                  height: height * 0.2,
                  // backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center',

                }}>
                  <Image source={isRecordingComplete ? require('../../assets/images/trash.png') : require('../../assets/images/Line.png')} style={{ width: isRecordingComplete ? 89 : 200, height: isRecordingComplete ? 108 : 3 }} />


                </View>
                <View style={{
                  height: isRecordingComplete ? height * 0.28 : height * 0.3,
                  // backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>

                  <NewmorphButton backgroundColor={isRecordingComplete ? '#E6C5C0' : '#C7D3E3'} onPress={() => {
                    console.log("isRecording", isRecording, 'isRecordingComplete', isRecordingComplete)
                    if (!isRecording && !isRecordingComplete) {
                      this.onStartRecord()
                    } else if (isRecording && !isRecordingComplete) {
                      this.onStopRecord()
                    } else if (isRecording && isRecordingComplete && isPlaying) {
                      this.onPausePlay()
                    } else if (isRecording && isRecordingComplete && !isPlaying) {
                      this.onResumePlay()
                    } else {
                      this.onStartPlay()
                    }

                  }}
                    imgPath={isRecordingComplete ? (!isPlaying ? require('../../assets/images/play.png') : require('../../assets/images/pause.png')) : (isRecording ? require('../../assets/images/circle.png') : require('../../assets/images/mike2.png'))}
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
      </SafeAreaView>
    );
  }

  private onStatusPress = (e: any) => {
    const touchX = e.nativeEvent.locationX;
    console.log(`touchX: ${touchX}`);
    const playWidth =
      (this.state.currentPositionSec / this.state.currentDurationSec) *
      (screenWidth - 56);
    console.log(`currentPlayWidth: ${playWidth}`);

    const currentPosition = Math.round(this.state.currentPositionSec);

    if (playWidth && playWidth < touchX) {
      const addSecs = Math.round(currentPosition + 1000);
      this.audioRecorderPlayer.seekToPlayer(addSecs);
      console.log(`addSecs: ${addSecs}`);
    } else {
      const subSecs = Math.round(currentPosition - 1000);
      this.audioRecorderPlayer.seekToPlayer(subSecs);
      console.log(`subSecs: ${subSecs}`);
    }
  };

  private onStartRecord = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log('write external stroage', grants);

        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('permissions granted');
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }

    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };

    console.log('audioSet', audioSet);
    //? Custom path
    // const uri = await this.audioRecorderPlayer.startRecorder(
    //   this.path,
    //   audioSet,
    // );

    //? Default path
    const uri = await this.audioRecorderPlayer.startRecorder(
      undefined,
      audioSet,
    );

    this.audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
      // console.log('record-back', e);
      this.setState({
        recordSecs: e.currentPosition,
        recordTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
      });
    });
    this.setState({
      isRecording: !this.state.isRecording,
    })
    console.log(`uri: ${uri}`);
  };


  private onStopRecord = async () => {
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      recordSecs: 0,
      isRecording: !this.state.isRecording,
      isRecordingComplete: !this.state.isRecordingComplete
    });
    console.log(result);
  };

  private onStartPlay = async () => {
    console.log('onStartPlay');
    //? Custom path
    // const msg = await this.audioRecorderPlayer.startPlayer(this.path);

    //? Default path
    const msg = await this.audioRecorderPlayer.startPlayer();
    const volume = await this.audioRecorderPlayer.setVolume(1.0);
    console.log(`file: ${msg}`, `volume: ${volume}`);
    this.setState({
      isPlaying: !this.state.isPlaying
    })
    this.audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
      if (this.audioRecorderPlayer.mmssss(Math.floor(e.duration)) == this.audioRecorderPlayer.mmssss(Math.floor(e.currentPosition))) {
        this.setState({
          isPlaying: false
        })
      }
      this.setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
        duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
    });
  };

  private onPausePlay = async () => {
    await this.audioRecorderPlayer.pausePlayer();
    this.setState({
      isPlaying: !this.state.isPlaying
    })
  };

  private onResumePlay = async () => {
    await this.audioRecorderPlayer.resumePlayer();
    this.setState({
      isPlaying: !this.state.isPlaying
    })
  };

  private onStopPlay = async () => {
    console.log('onStopPlay');
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
  };
}

export default VoiceRecorder;