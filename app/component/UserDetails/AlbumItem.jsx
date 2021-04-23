import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const AlbumItem = ({ id, title }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.albumItemContainer}
      onPress={() => navigation.navigate('AlbumDetails', { id, title })}
    >
      <Image
        source={{ uri: 'https://placehold.co/180x180' }}
        style={styles.albumItemImage}
        resizeMode={'cover'}
      />
      <Text style={styles.albumItemTitle}>{title.substring(0, 40)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  albumItemContainer: {
    marginBottom: 16,
    width: '48%'
  },
  albumItemImage: {
    flex: 1,
    width: '100%',
    height: 180,
    backgroundColor: '#ddd'
  },
  albumItemTitle: {
    flex: 2,
    alignItems: 'center',
    fontWeight: '600',
    fontSize: 12,
    textTransform: 'uppercase',
    marginTop: 10
  }
});

export default AlbumItem;
