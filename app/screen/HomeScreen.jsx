import React, { useEffect, useState } from 'react';

import {StyleSheet, View, TextInput, ActivityIndicator} from 'react-native';
import HomeMap from "../component/Home/HomeMap";
import HomeUserSearch from "../component/Home/HomeUserSearch";
import HomeUserList from "../component/Home/HomeUserList";
import UserService from "../src/service/UserService";
import IsConnected from "../_share/isConnected";
import Loading from "../_share/Loading";

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UserService.retrieveUsers().then(users => {
      setUsers(users ?? [])
      setFilteredUsers(users)
    }).catch(() => {
        setUsers([])
    }).finally(() => setLoading(false));
  }, [])

    if(loading)
        return <Loading />

  return (
    <View style={styles.container}>

        <HomeUserSearch users={users} setFilteredUsers={setFilteredUsers} />

        <HomeUserList users={filteredUsers} />

        <HomeMap users={filteredUsers} />
      <IsConnected />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
    containerLoading: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen;
