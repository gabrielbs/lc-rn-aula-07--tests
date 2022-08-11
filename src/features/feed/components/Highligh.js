import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Highlight = ({ width = 70, height = 70 }) => {
  return (
    <View style={
      {...styles.storyCircle,
        ...{
        width,
        height,
        borderRadius: width / 2
      }}} />
  )
}

const styles = StyleSheet.create({
  storyCircle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#ccc'
  },
});