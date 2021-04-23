import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PostContent = ({ title, body }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View
      style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}
    >
      <View style={styles.userImage}>
        <Ionicons
          style={styles.userIcon}
          name="person"
          size={15}
          color="white"
        />
      </View>
      <View>
        <Text style={styles.userText}>Romain Dreidemy</Text>
      </View>
    </View>
    <Text style={styles.body}>{body}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  body: {
    marginBottom: 40
  },
  userText: {
    fontSize: 15
  },
  userImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
    backgroundColor: '#e6e4e6',
    borderRadius: 500,
    marginRight: 15
  },
  userCompany: {
    color: 'grey'
  }
});

export default PostContent;
