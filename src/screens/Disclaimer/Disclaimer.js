import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Dimensions,

} from 'react-native'
const { width, height } = Dimensions.get('window');

import { connect, useDispatch } from 'react-redux'
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'

const Disclaimer = ({ navigation, user }) => {
    const dispatch = useDispatch()

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={'#BFCCE0'} />
            <LinearGradient
                style={styles.LinearGradient1}
                colors={['#BFCCE0', '#F8F7F4']}>
                <View style={styles.crossStyle}>
                    <Feather name={'x'} size={50} color={'#A3A2BA'} />
                </View>
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


                    <View

                        style={styles.buttonViewStyle}


                    >
                        <NewmorphButton backgroundColor="#C7D3E3" onPress={() => {
                            navigation.navigate('Record')
                        }}

                            imgPath={require('../../assets/images/phone.png')}
                            imgStyle={{
                                height: 40,
                                width: 40

                            }}
                        />
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
        justifyContent: 'center'
    },
    discliamerTextStyle: {
        color: '#6B6B8D',
        fontSize: 22,
        fontFamily:"OPTIMA"
    },
    centerTextViewStyle: {
        marginVertical: height * 0.065,
        width: '85%'
    },
    centerTextStyle: {
        color: '#6B6B8D',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 25
    },
    buttonViewStyle: {
        marginTop: height * 0.03
    }

})

const mapStateToProps = state => {
    return {
        user: state.userReducer.users
    }
}

export default connect(mapStateToProps, null)(Disclaimer)
