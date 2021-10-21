import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Neomorph } from 'react-native-neomorph-shadows';
import Entypo from 'react-native-vector-icons/Entypo'


const index = ({ onPress, iconName }) => {
    return (

        <TouchableOpacity

            activeOpacity={0.7}
            onPress={onPress}

        >
            <Neomorph


                inner
                // swapShadows
                style={{
                    shadowRadius: 100,
                    shadowColor: 'transparent',
                    borderRadius: 50,
                    backgroundColor: '#ffff',
                    width: 67.94,
                    height: 68.26,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // margin: 50
                }}
            >
                <Entypo name={iconName} size={50} color={'#fff'} />
            </Neomorph>
        </TouchableOpacity>
    )
}

export default index
