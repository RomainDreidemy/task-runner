import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

const HomeUser = ({ user }) => {
  const navigation = useNavigation();

  return (
      <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('UserDetails', {id: user.id})}>
        <View style={styles.userImage} />
        <Text style={styles.userText}>{user.name}</Text>
      </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  user: {
    height: 150,
    backgroundColor: 'rgba(239, 239, 239, 1)',
    marginBottom: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding:30,
  },
  userText: {
    textAlign: 'center',
    fontSize:20,

  },
  userImage:{
    height: 50,
    marginBottom:20,
    width:50,
    backgroundColor: 'grey',
    borderRadius:50,
  }
})


export default HomeUser;
