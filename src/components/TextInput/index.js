import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TextInput, ImageBackground } from 'react-native'

export default function TextInputView({

    title = "I need more",
    title2 = "I'am way better",
    onPress = () => { },
    style = {},
    style2 = {},
    onChange = (e) => { },
    value = '',
    onSubmitEditing = () => {}
}) {
    return (
        <View>
            <TextInput
                onChangeText={onChange}
                style={styles.textArea}
                underlineColorAndroid="transparent"
                multiline={true} 
                onSub
                blurOnSubmit
                numberOfLines={15}
                value={value}
                enablesReturnKeyAutomatically={true}
                returnKeyType={'done'}
                onSubmitEditing={onSubmitEditing}
            />
        </View>

    );
}



const styles = StyleSheet.create({
    textArea: {
        width: Dimensions.get('window').width / 1.4,
        height: Dimensions.get('window').height / 4,
        fontSize: 12,
        justifyContent: "flex-start",
        textAlignVertical: 'top',
        borderColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        lineHeight: 20,
        // textDecorationLine: "underline",
        // textAlign:'center',
        paddingHorizontal: 10,
        fontFamily: "OPTIMA",
        textDecorationStyle: "double"
    },
})