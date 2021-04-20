import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Image, ScrollView } from 'react-native'
import AlbumApi from '../src/api/AlbumApi'

const AlbumDetailsScreen = ({ navigation, route }) => {
  const { id, title } = route.params

  const [photos, setPhotos] = useState([])
  console.log({ photos })

  useEffect(() => {
    AlbumApi.getPhotoByAlbum(id).then(data => setPhotos(data))
  }, [])

  return (
    <ScrollView style={styles.albumDetailsContainer}>
      <Text style={styles.albumDetailsTitle}>{title}</Text>
      {photos.map(photo => (
        <Image
          key={photo.id}
          source={{ uri: photo.thumbnailUrl }}
          style={styles.albumDetailsImage}
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  albumDetailsContainer: {
    flex: 1,
    padding: 16
  },
  albumDetailsTitle: {
    marginBottom: 16,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  albumDetailsImage: {
    height: 200,
    width: 'auto',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'grey'
  }
})

export default AlbumDetailsScreen
