import React from 'react';
import { View, Text } from "react-native";

const PostComment = ({ username, comment }) => (
  <View>
    <Text>{username}</Text>
    <Text>{comment}</Text>
  </View>
)

export default PostComment;