import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function VentOut({
    title = "VENT IT ALL OUT",
    decription = "A safe space to express your extreme emotions when you are overwhelmed",
    onPress = () => { },
    imgIcon = require('../../assets/images/Group331.png'),
    imgArrow = require('../../assets/images/arrow-right.png'),
    imgStyle = {}
}) {
    return (
        <TouchableOpacity activeOpacity={.8} onPress={onPress} style={{paddingHorizontal:20}}>
            <View style={{flexDirection:"row"}}>
                <View style={{flex:1}}>
                    <Image source={imgIcon} style={[{height: 60, width: 30}, imgStyle]  } />
                </View>
                <View style={{flex:3}}>
                    <Text style={{ fontSize: 24, color: "#FFFFFF",paddingLeft:4}}>{title}</Text>
                </View>
                <View style={{flex:1.8, alignItems:"flex-end",justifyContent:"center"}}>
                    <Image source={imgArrow} style={{ height: 22, width: 22 }} />
                </View>
            </View>
                <Text style={{color:"#575672",paddingVertical:10}}>{decription}</Text>
                <View style={styles.border}></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    border:{
        backgroundColor:"#D2DAE6",
        width:"100%",height:1
    }
})