import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TextInput, ImageBackground } from 'react-native'

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
        // <ImageBackground source={require('../../assets/images/noteback.jpg')} style={{height: '100%', width: Dimensions.get('window').width - 100, tintColor: '#fff'}}>
            <View>
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    multiline={true}
                    numberOfLines={15}   
                    // defaultValue={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                />
            </View>
        // {/* </ImageBackground> */}

    );
}

   

const styles = StyleSheet.create({
textArea:{
        width: Dimensions.get('window').width - 100,
        fontSize:12,
        justifyContent: "flex-start",
        textAlignVertical: 'top',
        borderColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        lineHeight: 20,
        // textDecorationLine: "underline",
        textAlign:'center',
        fontFamily:"OPTIMA",
        textDecorationStyle:"double"
     },
})