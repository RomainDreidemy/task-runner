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
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    AlbumApi.getPhotoByAlbum(id).then(data => setPhotos(data))
  }, [])

  return (
    <ScrollView style={styles.albumDetailsContainer}>
      <Text style={styles.albumDetailsTitle}>{title}</Text>

      {photos.map(photo => (
        <View key={photo.id}>
          <Modal
            animationType='fade'
            transparent
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible)
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalContainer}>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.modalClose}>Hide Modal</Text>
                  <Image
                    source={{ uri: photo.url }}
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.modalImage}
                  />
                </Pressable>
              </View>
            </View>
          </Modal>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Image
              source={{ uri: photo.thumbnailUrl }}
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.albumDetailsImage}
            />
          </Pressable>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    borderWidth: 1,
    borderColor: 'green'
  },
  modalContainer: {
    alignItems: 'center',
    maxHeight: 600,
    width: 'auto',
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8
  },
  modalImage: {
    flex: 1,
    // height: 'auto',
    width: 300
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
