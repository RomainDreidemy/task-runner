import React, {useEffect, useState} from 'react';

import UserApi from "../src/api/UserApi";
import {Alert, StyleSheet, View} from 'react-native';
import HomeMap from "../component/Home/HomeMap";
import HomeUserList from "../component/Home/HomeUserList";
import UserService from "../src/service/UserService";
import IsConnected from "../_share/isConnected";

const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      UserService.retrieveUsers().then(users => setUsers(users));
  }, [])

  return (
    <View style={styles.container}>
      <IsConnected />
      <HomeUserList users={users} />

      <HomeMap users={users}/>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default HomeScreen;
