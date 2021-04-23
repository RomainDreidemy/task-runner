import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const HomeUser = ({ user }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.user}
      onPress={() => navigation.navigate('UserDetails', { id: user.id })}
    >
      <View style={styles.userImage}>
        <Ionicons
          style={styles.userIcon}
          name="person"
          size={25}
          color="white"
        />
      </View>
      <View>
        <Text style={styles.userText}>{user.name}</Text>
        <Text style={styles.userCompany}>{user.company.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  user: {
    height: 80,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  userImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#e6e4e6',
    borderRadius: 500,
    marginRight: 15
  },
  userCompany: {
    color: 'grey'
  }
});

export default HomeUser;
