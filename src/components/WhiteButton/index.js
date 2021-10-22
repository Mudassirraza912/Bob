import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function WhiteButton({
  title = 'Completed',
  onPress = () => { },
  style = {},
  textStyle = {}
}) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.Button, style]}
        onPress={onPress}
        activeOpacity={0.8}>
        <Text style={[{ color: '#B5C5DC', fontSize: 16 }, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Button: {
    height: 35,
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
