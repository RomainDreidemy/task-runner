import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const HomeMap = ({ users = [] }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeMap}>
      <MapView
        style={styles.homeMapView}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        zoomEnabled={true}
        maxZoomLevel={1}
      >
        {users.map((user) => (
          <Marker
            coordinate={{
              latitude: +user.address.geo.lat,
              longitude: +user.address.geo.lng
            }}
            title={user.name}
            key={user.id}
            onPress={() => navigation.navigate('UserDetails', { id: user.id })}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeMap: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    overflow: 'hidden',
    borderRadius: 20
  },

  homeMapView: {
    flex: 1
  }
});

export default HomeMap;
