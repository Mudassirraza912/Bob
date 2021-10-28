import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Neomorph } from 'react-native-neomorph-shadows';
import Entypo from 'react-native-vector-icons/Entypo'


const index = ({
    onPress,
    iconName = 'chevron-right',
    iconColor = '#fff',
    imgPath = require('../../assets/images/arrow-right.png'),
    imgStyle = {},
    backgroundColor = '#fff',
    touchableStyle={}
}) => {
    return (

        <TouchableOpacity
            style={[{}, touchableStyle]}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Neomorph
                inner
                style={{
                    shadowRadius: 2,
                    shadowColor: backgroundColor,
                    borderRadius: 50,
                    backgroundColor: backgroundColor,
                    width: 80,
                    height: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image source={imgPath} style={[{ height: 50, width: 25 }, imgStyle]} />
            </Neomorph>
        </TouchableOpacity>
    )
}

export default index
