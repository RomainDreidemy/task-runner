import React from 'react';
import { View, Text } from "react-native";

const PostContent = ({ title, body }) => (
  <View>
    <Text>{title}</Text>
    <Text>{body}</Text>
  </View>
)

export default PostContent;