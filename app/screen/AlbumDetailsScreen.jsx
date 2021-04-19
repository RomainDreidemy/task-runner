import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import UserApi from '../src/api/UserApi'

const AlbumDetailsScreen = ({ navigation, route }) => {
  const { id } = route.params

  return (
    <View>
      <Text>Album id: {id}</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
})

export default AlbumDetailsScreen
