import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons";

const PostComment = ({ comment, title }) => (
  <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
          <View style={styles.userImage}>
              <Ionicons style={styles.userIcon} name="person" size={15} color="white" />
          </View>
          <View>
              <Text style={styles.userText}>John Doe </Text>
          </View>
      </View>
    <Text style={styles.content}>{comment.replace(/\n|\r/g,'')}</Text>
  </View>
)

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        flex: 1
    },
    title: {
        fontSize: 16,
        // marginBottom: 5
    },
    content: {
        fontStyle: 'italic',
        marginLeft: 30
    },
    userText: {
        fontSize: 15,

    },
    userImage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        width: 25,
        backgroundColor: '#e6e4e6',
        borderRadius: 500,
        marginRight: 7
    },
})

export default PostComment;
