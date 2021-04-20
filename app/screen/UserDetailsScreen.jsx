import React, {useEffect, useState} from 'react';
import {Alert, FlatList, ScrollView, Text, TextInput, View} from "react-native";
import UserApi from "../src/api/UserApi";
import TodoItem from "../component/UserDetails/TodoItem";
import AlbumItem from "../component/UserDetails/AlbumItem";
import ModalTodo from "../component/UserDetails/ModalTodo";
import { Ionicons } from '@expo/vector-icons';
import PostItem from "../component/UserDetails/PostItem";
const UserDetailsScreen = ({ route }) => {

    const [user, setUser] = useState({});
    const [todos, setTodos] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [posts, setPosts] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);

    const {id} = route.params;

    useEffect(() => {
        UserApi.getUser(id).then(data => setUser(data));
        UserApi.getAlbumsByUser(id).then(data => setAlbums(data));
        UserApi.getTodosByUser(id).then(data => setTodos(data));
        UserApi.getPostsByUser(id).then(data => setPosts(data));
    }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.infosSection}>
                <Text style={styles.infoLine}>Nom: {user.name}</Text>
                <Text style={styles.infoLine}>Société: {user.company?.name}</Text>
                <Text style={styles.infoLine}>Email: {user.email}</Text>
                <Text style={styles.infoLine}>Téléphone: {user.phone}</Text>
            </View>

            <View style={styles.todosSection}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.title}>TODOs</Text>
                    <Ionicons  name="add-sharp" size={30} onPress={() => setModalVisible(true)} />
                </View>
                <ScrollView style={{maxHeight: 300}}>
                    {
                        todos.map(todo => <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}/>)
                    }
                </ScrollView>
            </View>

                <Text style={styles.title}>Albums</Text>
                <View style={styles.albumsBlock} />
                <ScrollView style={{maxHeight: 300}}>
                    {
                        albums.map(album => <AlbumItem id={album.id} title={album.title}/>)
                    }
                </ScrollView>


            <Text style={styles.title}>Posts</Text>
            <ScrollView style={{maxHeight: 500}}>
                {
                    posts.map(post => <PostItem key={post.id} id={post.id} title={post.title} />)
                }
            </ScrollView>

            <ModalTodo
                visible={modalVisible}
                onSuccess={(value) => {
                    setModalVisible(false)
                    Alert.alert(value)
                }}
                onClose={() => setModalVisible(false)}
            />
        </ScrollView>
    )
}

const styles = {
    container: {
        flex: 1,
        padding: 10,
    },
    infosSection: {
        padding: 10,
        border: 1,
        borderRadius: 15,
        borderColor: '#eee',
        backgroundColor: '#fff'
    },
    infoLine: {
        marginBottom: 5,
    },
    todosSection: {
        flex: 3
    },
    albumsSection: {
        flex: 2
    },
    albumsBlock: {
      height: 30,
      backgroundColor: '#5a5a5a'
    },
    title: {
        fontSize: 20,
        marginVertical: 15
    }
}

export default UserDetailsScreen;
