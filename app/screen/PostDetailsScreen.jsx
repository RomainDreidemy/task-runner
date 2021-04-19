import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import PostApi from './../src/api/PostApi'
import PostContent from './../component/PostContent'
import PostComment from '../component/PostComment'

const PostDetailsScreen = ({ route }) => {
  const { postId } = route.params

  const [postContent, setPostContent] = useState({})
  const [comments, setComments] = useState([])

  useEffect(() => {
    ;(async function () {
      setPostContent(await PostApi.getPost(postId))
      setComments(await PostApi.getCommentsByPost(postId))
    })()
  }, [postId])

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
