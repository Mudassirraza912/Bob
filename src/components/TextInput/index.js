import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export default function TextInputView({

    title = "I need more",
    title2 = "I'am way better",
    onPress = () => { },
    style={},
    style2={},
    // decription = "A safe space to express your extreme emotions when you are overwhelmed",
    // imgIcon = require('../../assets/images/Group331.png'),
    // imgArrow = require('../../assets/images/arrow-right.png'),
    // imgWidth = {}
}) {
    return (
  <View>
            <TextInput
            style={styles.textArea}
            underlineColorAndroid="#fff"
            maxLength={33}          
            />
            </View>

    );
}

   

const styles = StyleSheet.create({

textArea:{
    height:38,
        width:260,
        color:"#6B6B8D",
        fontSize:12
     },
})