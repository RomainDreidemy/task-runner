import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { color } from 'react-native-reanimated'

const AlbumItem = ({ id, title }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.albumItemContainer}
      onPress={() => navigation.navigate('AlbumDetails', { id, title })}
    >
      <Image
        source={require('./../../../assets/adaptive-icon.png')}
        style={styles.albumItemImage}
      />
      <Text style={styles.albumItemTitle}>{title.substring(0, 15)}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  albumItemContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    marginBottom: 16
  },
  albumItemImage: {
    flex: 1,
    height: 100,
    borderWidth: 1,
    borderColor: 'grey'
  },
  albumItemTitle: {
    flex: 2,
    alignItems: 'center',
    marginLeft: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})

export default AlbumItem
