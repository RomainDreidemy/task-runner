import React, {useEffect, useState} from 'react';

import UserApi from "../src/api/UserApi";
import {Alert, StyleSheet, View} from 'react-native';
import HomeMap from "../component/Home/HomeMap";
import HomeUserList from "../component/Home/HomeUserList";
import LocalStorageService from "../src/service/LocalStorageService";
import UserService from "../src/service/UserService";

const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      UserService.retrieveUsers().then(users => setUsers(users));
  }, [])

  return (
    <View style={styles.container}>
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
