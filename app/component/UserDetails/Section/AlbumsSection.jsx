import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import AlbumItem from '../AlbumItem';

const AlbumsSection = ({ albums = [] }) => {
  return (
    <View>
      <View style={styles.blockTitle}>
        <Text style={styles.title}>Albums</Text>
      </View>
      <ScrollView style={{ maxHeight: 300 }} contentContainerStyle={{}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          {albums.map((album) => (
            <AlbumItem key={album.id} id={album.id} title={album.title} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  albumsSection: {
    flex: 2
  },
  blockTitle: {
    marginBottom: 15,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 20
  }
};

export default AlbumsSection;
