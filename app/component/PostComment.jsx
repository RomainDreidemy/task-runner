import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const PostComment = ({ comment, title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
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
        marginBottom: 5
    },
    content: {
        fontStyle: 'italic'
    }
})

export default PostComment;
