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
  Image,
  PanResponder,
  Animated,
  Easing,
  Alert
} from 'react-native';
import React, { Component } from 'react';

import Button from './Button';
import RNFetchBlob from 'rn-fetch-blob';
import Record from '../Record/Record';
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'
import Sound from 'react-native-sound';

const { width, height } = Dimensions.get('window');
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);


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

    marginTop: height * 0.04,
    alignItems: 'flex-end'
  },
  LinearGradient2: {
    width: '80%', height: height * 0.81, borderRadius: height / 2, backgroundColor: 'transparent',
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
  isPlaying: boolean;
  showDraggable: boolean;
  dropZoneValues: any;
  pan: any;
  isTrash: boolean;
  paused: boolean
}

const screenWidth = Dimensions.get('screen').width;
const TrashAudio = Platform.OS == "android" ? "audio_trash.mp3" : "Audio_Trash.m4a"
class VoiceRecorder extends Component<any, State> {
  private dirs = RNFetchBlob.fs.dirs;
  private path = Platform.select({
    ios: 'hello.m4a',
    android: `${this.dirs.CacheDir}/hello.mp3`,
  });

  private audioRecorderPlayer: AudioRecorderPlayer;
  private panResponder: PanResponder
  private soundPlayer: Sound
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
      isPlaying: false,
      showDraggable: true,
      dropZoneValues: null,
      pan: new Animated.ValueXY(),
      isTrash: false,
      paused: false
    };

    this.audioRecorderPlayer = new AudioRecorderPlayer();
    this.audioRecorderPlayer.setSubscriptionDuration(0.1); // optional. Default is 0.5
    this.soundPlayer = new Sound(TrashAudio, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    }
    )

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: Platform.select({
        default: () => true,
        android: (e: GestureResponderEvent, state: PanResponderGestureState) =>
          Math.abs(state.dx) > 10 || Math.abs(state.dy) > 10
      }),
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropZone(gesture)) {
          this.soundPlayer.play((e) => { console.log(e) })
          // Alert.alert("DELETE IF")
          this.setState({ isTrash: true })
          setTimeout(() => {
            this.soundPlayer.stop()
            this.setState({ isTrash: false })
            setTimeout(() => {
              this.setState({
                isTrash: false,
                isLoggingIn: false,
                recordSecs: 0,
                recordTime: '00:00:00',
                currentPositionSec: 0,
                currentDurationSec: 0,
                playTime: '00:00:00',
                duration: '00:00:00',
                isRecording: false,
                isRecordingComplete: false,
                isPlaying: false,
              })
              this.props.navigation.navigate('HowDoYouFeel')
            }, 250)
          }, 1600)
          Animated.spring(
            this.state.pan,
            { toValue: { x: 0, y: 0 }, useNativeDriver: false }
          ).start();
          this.setState({
            showDraggable: false
          });
        } else {
          Animated.spring(
            this.state.pan,
            { toValue: { x: 0, y: 0 }, useNativeDriver: false }
          ).start();
        }
      }
    });
  }

  public render() {
    const { isRecording, isRecordingComplete, isPlaying, duration, playTime, paused, isTrash, recordTime } = this.state
    let playWidth =
      (this.state.currentPositionSec / this.state.currentDurationSec) *
      (screenWidth - 56);

    if (!playWidth) {
      playWidth = 0;
    }

    return (
      <View style={styles.container}>
        <>
          <StatusBar barStyle="dark-content" backgroundColor={isRecordingComplete ? '#E6C5C0' : '#BFCCE0'} />
          <LinearGradient
            style={styles.LinearGradient1}
            colors={isRecordingComplete ? ['#E6C5C0', '#EAE8EA'] : ['#BFCCE0', '#F8F7F4']}


          >
            <View style={styles.crossStyle}>
              <Feather onPress={() => {
                if(this.state.isRecording && !isRecordingComplete) {
                  this.audioRecorderPlayer.stopRecorder()
                  this.props.navigation.goBack()
                }else {
                  this.props.navigation.goBack()
                }
              }} name={'x'} size={50} color={'#A3A2BA'} />
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

                <View
                  onLayout={this.setDropZoneValues.bind(this)}
                  style={{
                    height: height * 0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image source={isRecordingComplete ? (isTrash ? require('../../assets/trash1.gif') : require('../../assets/images/trash.png')) : (isRecording ? require('../../assets/recordWave.gif') : require('../../assets/images/Line.png') )} style={{ width: isRecordingComplete ? (!isTrash ? 89 : 339) : (isRecording ? 300 : 200), height: isRecordingComplete ? (!isTrash ? 108 : 368) : (isRecording ? 50 : 3) }} />
                  {isRecording && <Text style={{color: '#706F93', top: 20}}>{recordTime}</Text>}
                </View>

                {!(isRecordingComplete && !isPlaying) ? <View
                  style={[{
                    height: isRecordingComplete ? height * 0.28 : height * 0.3,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }]}
                >
                  <NewmorphButton backgroundColor={isRecordingComplete ? '#E6C5C0' : '#C7D3E3'} onPress={() => {
                    if (!isRecording && !isRecordingComplete) {
                      this.onStartRecord()
                    } else if (isRecording && !isRecordingComplete) {
                      this.onStopRecord()
                    } else if (isRecording && isRecordingComplete && isPlaying) {
                      this.onPausePlay()
                    } else {
                      this.onPausePlay()
                    }
                  }}
                    imgPath={isRecordingComplete ? (!isPlaying ? require('../../assets/images/play.png') : require('../../assets/images/pauseWave.png')) : (isRecording ? require('../../assets/images/box.png') : require('../../assets/images/circle.png'))}
                    imgStyle={isRecording ? {
                      height: 40,
                      width: 40
                    } : { width: 40, height: 40 }}
                  />
                </View>

                  :

                  <Animated.View
                    {...this.panResponder.panHandlers}
                    style={[this.state.pan.getLayout(), {
                      height: isRecordingComplete ? height * 0.28 : height * 0.3,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }]}
                  >
                    <AnimatedTouchable onPress={() => {
                     
                      if (paused) {
                        console.log("onResumePlay")
                        this.onResumePlay()
                      } else {
                        this.onStartPlay()
                      }
                    }}>
                      <NewmorphButton backgroundColor={isRecordingComplete ? '#E6C5C0' : '#C7D3E3'}
                        imgPath={isRecordingComplete ? (isTrash ? require('../../assets/images/circle.png') :  (!isPlaying ? require('../../assets/images/playWave.png') : require('../../assets/images/playWave.png'))) : (isRecording ? require('../../assets/images/circle.png') : require('../../assets/images/mike2.png'))}
                        imgStyle={isRecording ? {
                          height: 40,
                          width: 40
                        } : { width: 40, height: 40 }}
                      />
                    </AnimatedTouchable>
                  </Animated.View >}
              </View>
            </LinearGradient>
          </LinearGradient>
        </>
      </View>
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
          isPlaying: false,
          paused: false
        })
        // this.props.navigation.navigate("HowDoYouFeel")
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
    console.log("onPausePlay")
    await this.audioRecorderPlayer.pausePlayer();
    this.setState({
      isPlaying: !this.state.isPlaying,
      paused: true
    })
  };

  private onResumePlay = async () => {
    await this.audioRecorderPlayer.resumePlayer();
    this.setState({
      isPlaying: !this.state.isPlaying,
      paused: false
    })
  };

  private onStopPlay = async () => {
    console.log('onStopPlay');
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
  };


  private isDropZone(gesture) {
    var dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y + 100 && gesture.moveY < dz.y + (height * 0.50) - dz.height;
    // return gesture.moveY <= 395 && gesture.moveY >= 312;

  }

  private setDropZoneValues(event) {
    this.setState({
      dropZoneValues: event.nativeEvent.layout
    });
  }
}

export default VoiceRecorder;