import React, {useEffect, useState} from 'react';

import UserApi from "../src/api/UserApi";
import {ScrollView, StyleSheet, View,Text} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import HomeUser from "../component/HomeUser";

const HomeScreen = ({navigation}) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setUsers(await UserApi.getUsers());
    }

    fetchDataAsync()
  }, [])

  return (

    <View style={styles.home}>
      <View style={styles.homeUsers}>
        <ScrollView>
          {
            users.map(user => <HomeUser user={user} key={user.id} navigation={navigation}/>)
          }
        </ScrollView>
      </View>


      <View style={styles.homeMap}>
        <Text style={styles.homeMapHeadline}>Maps</Text>
        <MapView  style={styles.homeMapView}
                 initialRegion={{
                   latitude: 37.78825,
                   longitude: -122.4324,
                   latitudeDelta: 0.0922,
                   longitudeDelta: 0.0421,
                 }} zoomEnabled={true} maxZoomLevel={1}
        >
          {
            users.map(user =>
              <Marker coordinate={{latitude: +user.address.geo.lat, longitude: +user.address.geo.lng}}
                      title={user.name} key={user.id} onPress={() => {
                navigation.navigate('UserDetails', {id: user.id})}}
              />
            )
          }
        </MapView>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    padding:20,
    backgroundColor: 'white'
  },


  homeUsers: {
    flex: 1,
    backgroundColor: "white"

  },

  homeMap: {
    flex: 1,
    backgroundColor: "white"
  },

  homeMapHeadline: {
    fontSize:25,
    fontWeight:'bold',
    paddingTop:30,
    paddingBottom:20,
  },

  homeMapView: {
    flex: 1
  }
});

export default HomeScreen
