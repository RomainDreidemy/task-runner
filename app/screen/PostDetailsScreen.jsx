import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PostApi from './../src/api/PostApi';
import PostContent from './../component/PostContent';
import CommentList from '../component/PostDetails/CommentList';

const PostDetailsScreen = ({ route }) => {
  const { id } = route.params;

  const [postContent, setPostContent] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    PostApi.getPost(id).then((data) => setPostContent(data));
    PostApi.getCommentsByPost(id).then((data) => setComments(data));
  }, []);

  const addComment = (commentAuthor, commentContent) => {
    if (commentAuthor && commentContent) {
      const comment = {
        name: commentAuthor,
        body: commentContent,
        userId: 1,
        id: comments[comments.length - 1].id + 1
      };

      setComments([comment, ...comments]);
    }
  };

  return (
    <View style={styles.container}>
      <PostContent title={postContent.title} body={postContent.body} />
      <CommentList comments={comments} addComment={addComment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    marginBottom: 15
  },
  comments: {
    flex: 2
  },
  newComment: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#eee',
    padding: 15,
    marginBottom: 10
  },

  input: {
    padding: 5,
    height: 40,
    width: '100%',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#eee'
  }
});

export default PostDetailsScreen;
