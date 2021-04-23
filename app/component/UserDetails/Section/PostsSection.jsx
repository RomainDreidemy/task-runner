import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import PostItem from '../PostItem';

const PostsSection = ({ posts = [] }) => {
  return (
    <View>
      <View style={styles.blockTitle}>
        <Text style={styles.title}>Posts</Text>
      </View>
      <ScrollView style={{ maxHeight: 500 }}>
        {posts.map((post) => (
          <PostItem key={post.id} id={post.id} title={post.title} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = {
  title: {
    fontSize: 20,
    marginTop: 40
  }
};

export default PostsSection;
