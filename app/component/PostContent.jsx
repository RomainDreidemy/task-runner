import React from 'react';
import {View, Text, StyleSheet, TextInput} from "react-native";

const PostContent = ({ title, body }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.body}>{body}</Text>
  </View>
)

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        marginBottom: 15
    },
    body: {
        marginBottom: 40
    }
})

export default PostContent;
