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
import { connect, useDispatch } from 'react-redux'
import NewmorphButton from '../../components/NewmorphButton/index'

const { width, height } = Dimensions.get('window')

const Home = ({ navigation, user }) => {
  const dispatch = useDispatch()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#B5C5DC'} />
      
      <SafeAreaView style={styles.SafeAreaView2}>
        <ImageBackground source={require('../../assets/images/earBack.png')} style={styles.imgBackground}>
          <View style={{ paddingVertical: height/12, alignItems: 'center' }}>
            <View>
              <Text style={styles.nameTxt}>
                Hey Daniel
              </Text>
            </View>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.title}>
                I am BoB
              </Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.tagline}>
                And I am all ears
              </Text>
            </View>
          </View>

          <View style={styles.bottomBtn}>
            <NewmorphButton backgroundColor="#B5C5DC"  imgStyle={{marginLeft:10}}  onPress={() => {
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
    bottom: height/10
  }
})

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(Home)



// import React,{ Component } from 'react';
// import { 
//     StyleSheet,
//     View,
//     Text,
//     PanResponder,
//     Animated,
//     Easing,
//     Dimensions 
// } from 'react-native';

// export default class Home extends Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             showDraggable   : true,
//             dropZoneValues  : null,
//             pan             : new Animated.ValueXY()
//         };

        // this.panResponder = PanResponder.create({
        //     onStartShouldSetPanResponder    : () => true,
        //     onPanResponderMove              : Animated.event([null,{
        //         dx  : this.state.pan.x,
        //         dy  : this.state.pan.y
        //     }]),
        //     onPanResponderRelease           : (e, gesture) => {
        //         if(this.isDropZone(gesture)){
        //             this.setState({
        //                 showDraggable : false
        //             });
        //         }else{
        //             Animated.spring(
        //                 this.state.pan,
        //                 {toValue:{x:0,y:0}}
        //             ).start();
        //         }
        //     }
        // });
//     }

//     isDropZone(gesture){
//         var dz = this.state.dropZoneValues;
//         return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
//     }

//     setDropZoneValues(event){
//         this.setState({
//             dropZoneValues : event.nativeEvent.layout
//         });
//     }

//     render(){
//         return (
//             <View style={styles.mainContainer}>
//                 <View 
//                     onLayout={this.setDropZoneValues.bind(this)}
//                     style={styles.dropZone}>
//                     <Text style={styles.text}>Drop me here!</Text>
//                 </View>

//                 {this.renderDraggable()}
//             </View>
//         );
//     }

//     renderDraggable(){
//         if(this.state.showDraggable){
//             return (
//                 <View style={styles.draggableContainer}>
                    // <Animated.View 
                    //     {...this.panResponder.panHandlers}
                    //     style={[this.state.pan.getLayout(), styles.circle]}>
//                         <Text style={styles.text}>Drag me!</Text>
//                     </Animated.View>
//                 </View>
//             );
//         }
//     }
// }

// let CIRCLE_RADIUS = 36;
// let Window = Dimensions.get('window');
// let styles = StyleSheet.create({
//     mainContainer: {
//         flex    : 1
//     },
//     dropZone    : {
//         height  : 100,
//         backgroundColor:'#2c3e50'
//     },
//     text        : {
//         marginTop   : 25,
//         marginLeft  : 5,
//         marginRight : 5,
//         textAlign   : 'center',
//         color       : '#fff'
//     },
//     draggableContainer: {
//         position    : 'absolute',
//         top         : Window.height/2 - CIRCLE_RADIUS,
//         left        : Window.width/2 - CIRCLE_RADIUS,
//     },
//     circle      : {
//         backgroundColor     : '#1abc9c',
//         width               : CIRCLE_RADIUS*2,
//         height              : CIRCLE_RADIUS*2,
//         borderRadius        : CIRCLE_RADIUS
//     }
// });