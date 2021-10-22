import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function RadioButton({

    title = "I need more",
    title2 = "I'am way better",
    onPress = () => { },
    style={},
    style2={},
}) {
    const [onFocus, setOnFocus] = useState(true);
    const [deFocus, setDeFocus] = useState(true);
    const handleOnFocus = () => {
        setOnFocus(0);
        setDeFocus(1);
      };
      const handleDeFocus = () => {
        setOnFocus(1);
        setDeFocus(0);
      };
    return (
        <View style={{}}>
            <TouchableOpacity onPress={() => handleOnFocus()} activeOpacity={0.88} style={[onFocus ? styles.deFocusButton : styles.onFocusButton, style]}>
                <Text style={{color:"#B5C5DC", fontSize:16}}>{title}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleDeFocus()} activeOpacity={0.88} style={[deFocus ? styles.deFocusButton : styles.onFocusButton, style2]}>
                <Text style={{color:"#B5C5DC", fontSize:16}}>{title2}</Text>
            </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    deFocusButton:{
        height:35,
        width:205,
        backgroundColor:"#fff",
        borderRadius:50,
        marginVertical:3,
        alignItems:"center",
        justifyContent:"center"
    },
    onFocusButton:{
        height:35,
        width:205,
        backgroundColor:"#fff",
        borderRadius:50,
        marginVertical:3,
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        borderColor:"#43acf7"
    }
})