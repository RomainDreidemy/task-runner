import React from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import PostComment from '../PostComment';
import { Ionicons } from '@expo/vector-icons';

const CommentList = ({ comments = [] }) => {
  return (
    <View style={styles.comments}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
          marginBottom: 15
        }}
      />
      <Text style={styles.title}>Commentaires</Text>

      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostComment title={item.name} comment={item.body} />
        )}
      />
      <View style={styles.newComment}>
        <TextInput style={styles.input} placeholder={'Écrire un commentaire'} />
        <Pressable onPress={() => addComment()} style={styles.button}>
          <Ionicons name="send" size={20} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    marginBottom: 15
  },
  comments: {
    flex: 2
  },
  newComment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5'
  },

  input: {
    padding: 5,
    height: 40,
    width: '80%',
    backgroundColor: '#E5E5E5',
    borderRadius: 10
  },
  button: {
    width: '19%',
    height: 40,
    backgroundColor: '#46AAF2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CommentList;
