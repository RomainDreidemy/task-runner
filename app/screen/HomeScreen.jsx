import React, {useEffect, useState} from 'react';

import UserApi from "../src/api/UserApi";
import {StyleSheet, View} from 'react-native';
import HomeMap from "../component/Home/HomeMap";
import HomeUserList from "../component/Home/HomeUserList";

const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      UserApi.getUsers().then(data => setUsers(data))
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
