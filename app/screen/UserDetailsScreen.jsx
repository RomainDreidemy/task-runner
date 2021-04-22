import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from "react-native";
import TodoItem from "../component/UserDetails/TodoItem";
import AlbumItem from "../component/UserDetails/AlbumItem";
import ModalTodo from "../component/UserDetails/ModalTodo";
import { Ionicons } from '@expo/vector-icons';
import PostItem from "../component/UserDetails/PostItem";
import Map from "../component/UserDetails/Map";
import UserService from "../src/service/UserService";
import IsConnected from "../_share/isConnected";
import UserInfosSection from "../component/UserDetails/Section/UserInfosSection";
import TodosSection from "../component/UserDetails/Section/TodosSection";
const UserDetailsScreen = ({ route }) => {

    const [user, setUser] = useState({});
    const [todos, setTodos] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [posts, setPosts] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);

    const {id} = route.params;

    useEffect(() => {
        UserService.retrieveUser(id).then(data => setUser(data));
        UserService.retrieveTodos(id).then(data => setTodos(data.sort(todo => todo.completed)));
        UserService.retrieveAlbums(id).then(data => setAlbums(data));
        UserService.retrievePosts(id).then(data => setPosts(data));
    }, []);

    const addTodo = (title) => {
        const todo = {
            userId: id,
            id: todos.sort((x, y) => x.id - y.id)[todos.length-1].id + 1,
            title,
            completed: false
        }

        setTodos([todo, ...todos.sort(todo => todo.completed)]);
    }

    return (
        <ScrollView style={styles.container}>
            <IsConnected />

            <UserInfosSection user={user} />

            <TodosSection todos={todos} />



        <View style={styles.blockTitle}>
            <Text style={styles.title}>Albums</Text>
        </View>
        <View style={styles.albumsBlock} />
        <ScrollView style={{maxHeight: 300}}>
            {
                albums.map(album => <AlbumItem key={album.id} id={album.id} title={album.title}/>)
            }
        </ScrollView>


        <View style={styles.blockTitle}>
            <Text style={styles.title}>Posts</Text>
        </View>
        <ScrollView style={{maxHeight: 500}}>
            {
                posts.map(post => <PostItem key={post.id} id={post.id} title={post.title} />)
            }
        </ScrollView>

        <ModalTodo
            visible={modalVisible}
            onSuccess={(value) => {
                setModalVisible(false)
                addTodo(value)
            }}
            onClose={() => setModalVisible(false)}
        />
        </ScrollView>
    )
}

const styles = {
    container: {
        padding: 10,
        flex: 1,
        backgroundColor : '#fff'
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
    blockTitle: {
        marginBottom: 15,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
    }
}

export default UserDetailsScreen;
