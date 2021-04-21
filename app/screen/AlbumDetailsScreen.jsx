import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Modal,
  View,
  Pressable
} from 'react-native'
import AlbumApi from '../src/api/AlbumApi'

const AlbumDetailsScreen = ({ navigation, route }) => {
  const { id, title } = route.params

  const [photos, setPhotos] = useState([])
  const [selectedPhoto, setSelectedPhoto] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  const onPhotoClick = photo => {
    console.log('click')
    setSelectedPhoto(photo.url)
  }

  useEffect(() => {
    AlbumApi.getPhotoByAlbum(id).then(data => setPhotos(data))
  }, [])

  return (
    <ScrollView style={styles.albumDetailsContainer}>
      <Text style={styles.albumDetailsTitle}>{title}</Text>

      {photos.map(photo => (
        <View key={photo.id}>
          <Pressable
            onPress={
              (() => setModalVisible(!modalVisible), onPhotoClick(photo))
            }
          >
            <Image
              source={{ uri: photo.thumbnailUrl }}
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.albumDetailsImage}
            />
          </Pressable>
        </View>
      ))}

      <Modal
        animationType='fade'
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <Pressable
            style={styles.modalContainer}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.modalClose}>Hide Modal</Text>
            <Image
              source={{ uri: selectedPhoto.url }}
              onPress={() => setModalVisible(!modalVisible)}
              // onPhotoClick={}
              style={styles.modalImage}
            />
          </Pressable>
        </View>
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green'
  },
  modalContainer: {
    alignItems: 'center',
    maxHeight: 600,
    height: '100%',
    width: '100%',
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8
  },
  modalImage: {
    flex: 1,
    width: '100%'
    // width: '100%',
    // backgroundColor: 'coral'
  },
  albumDetailsContainer: {
    flex: 1,
    padding: 16
  },
  albumDetailsTitle: {
    marginBottom: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  albumDetailsImage: {
    height: 240,
    width: 'auto',
    marginBottom: 16
  }
})

export default AlbumDetailsScreen
