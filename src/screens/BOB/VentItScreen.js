import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    StyleSheet
} from 'react-native'
import { connect, useDispatch } from 'react-redux'
import NewmorphButton from '../../components/NewmorphButton/index'
import VentOut from '../../components/VentOut/index'
import LinearGradient from 'react-native-linear-gradient'
const VentItScreens = ({ navigation, user }) => {
    const dispatch = useDispatch()
    return (
        <LinearGradient style={styles.container} colors={['#D1D9E5', '#8B97B4']} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ paddingVertical: "13%", textAlign: "center", color: "#95A4B9", fontSize: 16 }}>HEY DANIEL</Text>
                <View style={{ marginBottom: 20 }}>
                    <VentOut
                        imgStyle={{ width: 22, height: 40, tintColor: '#fff', top: 5 }}
                        onPress={() => navigation.navigate('Record')}
                        decription={'Speaking out loud creates clarity and space to find solutions'}
                        imgIcon={require('../../assets/images/mike.png')}
                        title={'RECORD YOUR THOUGHTS'} />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <VentOut
                        imgStyle={{ height: 38, width: 28, marginTop: 5  }}
                        onPress={() => navigation.navigate('Write')}
                        title={'WRITE YOUR THOUGHTS'}
                        decription={'Write your thoughts to dejunk your mind and create space to find solutions.'}
                        imgIcon={require('../../assets/images/write.png')} />
                </View>
            </ScrollView>
            <View style={styles.foter}>
                <Image source={require('../../assets/images/Path701.png')} />
                <Image source={require('../../assets/images/MenuIcon.png')} />
            </View>
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    foter: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: "20%",
        paddingVertical: 10,
        position: 'absolute',
        width: '100%',
        bottom: 15,
        alignSelf: 'center'
    }
})








export default VentItScreens