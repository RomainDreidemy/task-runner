import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";

const HomeUser = ({ user, navigation }) => (
  <TouchableOpacity key={user.id} onPress={() => {
    navigation.navigate('UserDetails', {id: user.id})
  }}>
    <Text style={{height: 80}}>{user.name}</Text>
  </TouchableOpacity>
)

export default HomeUser;
