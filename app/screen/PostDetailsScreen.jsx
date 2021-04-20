import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import PostApi from './../src/api/PostApi'
import PostContent from './../component/PostContent'
import PostComment from '../component/PostComment'

const PostDetailsScreen = ({ route }) => {
  const { id } = route.params

  const [postContent, setPostContent] = useState({})
  const [comments, setComments] = useState([])

  useEffect(() => {
      PostApi.getPost(id).then(data => setPostContent(data))
      PostApi.getCommentsByPost(id).then(data => setComments(data))
  }, [])

  return (
    <View>
      <PostContent title={postContent.title} body={postContent.body} />

      <Text>Comments</Text>
      {comments.map(comment => (
        <PostComment username={comment.name} comment={comment.body} />
      ))}
    </View>
  )
}

export default PostDetailsScreen
