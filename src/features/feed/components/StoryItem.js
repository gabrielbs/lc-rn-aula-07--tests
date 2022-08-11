import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Highlight } from './Highligh'

export const StoryItem = ({ children }) => {
  return (
    <View style={styles.storyItem}>
      <Highlight />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  storyItem: {
    marginHorizontal: 6,
  },
});