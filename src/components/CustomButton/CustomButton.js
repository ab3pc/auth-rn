import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        [styles.container, styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
        pressed ? styles.pressed : null]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {}
        ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5
  },
  text: {
    fontWeight: 'bold',
    color: 'white'
  },
  text_TERTIARY: {
    fontWeight: 'bold',
    color: 'grey'
  },
  text_SECONDARY: {
    color: '#3b71f3'
  },
  pressed: {
    opacity: 0.7,
  },
  container_PRIMARY: {
    backgroundColor: '#3b71f3',
  },
  container_SECONDARY: {
    borderColor: '#3b71f3',
    borderWidth: 2
  },
  container_TERTIARY: {

  }
})

export default CustomButton