import React, { useEffect, useState } from 'react';

import { StyleSheet, View, TextInput } from 'react-native';
import HomeMap from "../component/Home/HomeMap";
import HomeUserSearch from "../component/Home/HomeUserSearch";
import HomeUserList from "../component/Home/HomeUserList";
import UserService from "../src/service/UserService";
import IsConnected from "../_share/isConnected";

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    UserService.retrieveUsers()
      .then(users => {
        setUsers(users)
        setFilteredUsers(users)
      }).catch(() => {
        setUsers([])
        setFilteredUsers([])
      })
  }, [])

  return (
    <View style={styles.container}>
      <IsConnected />

      <HomeUserSearch users={users} setFilteredUsers={setFilteredUsers} />

      <HomeUserList users={filteredUsers} />

      <HomeMap users={filteredUsers} />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default HomeScreen;
