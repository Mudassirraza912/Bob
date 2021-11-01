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
    Image,
    TextInput,
    Alert
} from 'react-native'
const { width, height } = Dimensions.get('window');

import { connect, useDispatch } from 'react-redux'
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'
import WhiteButton from '../../components/WhiteButton'
import TextInputView from '../../components/TextInput';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/core';

const Write = ({ navigation, user, route }) => {
    const fromHowDoYouFeel = route?.params?.fromHowDoYouFeel
    console.log('fromHowDoYouFeel ', fromHowDoYouFeel)
    const [answer, setAnswer] = useState()
    useFocusEffect(() => {
        console.log("asd")
        if (fromHowDoYouFeel) {
            setAnswer('')
        }
    })


    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView>
                <StatusBar barStyle="dark-content" backgroundColor='#BFCCE0' />
                <LinearGradient
                    style={styles.LinearGradient1}
                    colors={['#BFCCE0', '#F8F7F4']}>
                    <View style={styles.crossStyle}>
                        <Feather onPress={() => { navigation.navigate('BOB') }} name={'x'} size={50} color={'#A3A2BA'} />
                    </View>
                    <LinearGradient
                        style={styles.LinearGradient2}
                        colors={['#F8F7F4', '#BFCCE0']}>
                        <View style={{
                            // justifyContent: 'space-between'
                        }}>
                            <View
                                style={styles.imageTextViewStyle}
                            >
                                <Image source={require('../../assets/images/pencil2.png')} style={{ width: 42, height: 57 }} />
                                <Text
                                    style={styles.textStyle}
                                >
                                    What is on your
                                </Text>
                                <Text
                                    style={styles.textStyle}
                                >
                                    mind Daniel?
                                </Text>
                            </View>
                            <View
                                style={styles.centerImageViewStyle}
                            >
                                <TextInputView onChange={e => setAnswer(e)} value={answer} />
                            </View>
                            <View
                                style={styles.buttonViewStyle}
                            >
                                <WhiteButton title="Completed" textStyle={{ color: "#B5C5DC" }}


                                    onPress={() => {
                                        if (answer) {
                                            navigation.navigate('Burn')
                                        } else {
                                            Alert.alert("Alert", "Field is required")
                                        }
                                    }}
                                />
                            </View>
                        </View>
                    </LinearGradient>

                </LinearGradient>
            </ScrollView>
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
        color: '#6B6B8D',
        fontFamily: 'Optima'
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

export default connect(mapStateToProps, null)(Write)