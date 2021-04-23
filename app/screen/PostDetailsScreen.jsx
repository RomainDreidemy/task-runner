import React, { useEffect, useState } from 'react'
import {StyleSheet, Text, ScrollView, View, FlatList, TextInput, Button, Alert} from 'react-native'
import PostApi from './../src/api/PostApi'
import PostContent from './../component/PostContent'
import PostComment from '../component/PostComment'
import CommentList from "../component/PostDetails/CommentList";
import Loading from "../_share/Loading";

const PostDetailsScreen = ({ route }) => {
  const { id } = route.params

  const [postContent, setPostContent] = useState({});
  const [comments, setComments] = useState([]);

    const [loading, setLoading] = useState(true);

  useEffect(() => {
      PostApi.getPost(id).then(data => setPostContent(data)).finally(() => setLoading(false))
      PostApi.getCommentsByPost(id).then(data => setComments(data)).finally(() => setLoading(false))
  }, [])

    const addComment = (text) => {
        if(text !== ""){
            const comment = {
                name: "",
                body: text,
                userId: 1,
                id: comments[comments.length - 1].id + 1
            }

            setComments([comment, ...comments]);
        }
    }

    if(loading)
        return <Loading />

    return (
        <View style={styles.container}>
            <PostContent title={postContent.title} body={postContent.body} />
            <CommentList comments={comments} onPostAdd={(text) => addComment(text)} />
        </View>
    )
}

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
        borderColor: "#eee",
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
})

export default PostDetailsScreen
