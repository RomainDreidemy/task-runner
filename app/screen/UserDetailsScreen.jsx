import React, {useEffect, useState} from 'react';
import {Alert, FlatList, ScrollView, Text, TextInput, View} from "react-native";
import UserApi from "../src/api/UserApi";
import TodoItem from "../component/UserDetails/TodoItem";
import AlbumItem from "../component/UserDetails/AlbumItem";
import ModalTodo from "../component/UserDetails/ModalTodo";
import { Ionicons } from '@expo/vector-icons';
import PostItem from "../component/UserDetails/PostItem";
import Map from "../component/UserDetails/Map";
import MapView, {Marker} from "react-native-maps";
import UserService from "../src/service/UserService";
const UserDetailsScreen = ({ route }) => {

    const [user, setUser] = useState({});
    const [todos, setTodos] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [posts, setPosts] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);

    const {id} = route.params;

    useEffect(() => {
        // UserApi.getUser(id).then(data => setUser(data));
        UserService.retrieveUser(id).then(user => {
            setUser(user)
            console.log(user)
        })
        UserApi.getAlbumsByUser(id).then(data => setAlbums(data));
        UserApi.getTodosByUser(id).then(data => setTodos(data.sort(todo => todo.completed)));
        UserApi.getPostsByUser(id).then(data => setPosts(data));
    }, []);

    const addTodo = (title) => {
        console.log();
        console.log(todos.sort((x, y) => x.id - y.id)[todos.length-1].id)
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

        <View>
            <View style={styles.infosSection}>
                <View style={{padding: 20}}>
                    <Text style={styles.infoLine}>Nom: {user.name}</Text>
                    <Text style={styles.infoLine}>Société: {user.company?.name}</Text>
                    <Text style={styles.infoLine}>Email: {user.email}</Text>
                    <Text style={styles.infoLine}>Téléphone: {user.phone}</Text>
                </View>

                {
                    user.name ? <Map user_id={user.id} title={user.name} lat={user.address.geo.lat} lng={user.address.geo.lng} /> : <Text>Loading...</Text>
                }
            </View>
        </View>

        <View style={styles.todosSection}>
            <View style={styles.blockTitle}>
                <Text style={styles.title}>TODOs</Text>
                <Ionicons  name="add-sharp" size={30} onPress={() => setModalVisible(true)} />
            </View>
            <ScrollView style={{maxHeight: 300}}>
                {
                    todos.map(todo => <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}/>)
                }
            </ScrollView>
        </View>

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
    infosSection: {
        border: 1,
        borderRadius: 15,
        borderColor: '#eee',
        backgroundColor: '#fff',
        overflow: 'hidden'
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
    blockTitle: {
        marginBottom: 15,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
    },
    map: {
        height: 250
    }
}

export default UserDetailsScreen;
