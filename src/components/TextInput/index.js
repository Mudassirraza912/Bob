import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TextInput, ImageBackground } from 'react-native'

export default function TextInputView({

    title = "I need more",
    title2 = "I'am way better",
    onPress = () => { },
    style = {},
    style2 = {},
    onChange = (e) => { },
    value = ''
}) {
    return (
        <View>
            <TextInput
                onChangeText={onChange}
                style={styles.textArea}
                underlineColorAndroid="transparent"
                multiline={true}
                numberOfLines={15}
                value={value}
                returnKeyType='done'

            // defaultValue={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
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