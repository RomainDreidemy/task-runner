import React, {useEffect, useState} from 'react';
import {ScrollView} from "react-native";
import ModalTodo from "../component/UserDetails/ModalTodo";
import UserService from "../src/service/UserService";
import IsConnected from "../_share/isConnected";
import UserInfosSection from "../component/UserDetails/Section/UserInfosSection";
import TodosSection from "../component/UserDetails/Section/TodosSection";
import AlbumsSection from "../component/UserDetails/Section/AlbumsSection";
import PostsSection from "../component/UserDetails/Section/PostsSection";
import Loading from "../_share/Loading";
const UserDetailsScreen = ({ route }) => {

    const [user, setUser] = useState({});
    const [todos, setTodos] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [posts, setPosts] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);

    const [loading, setLoading] = useState(true);

    const {id} = route.params;

    useEffect(() => {
        UserService.retrieveUser(id).then(data => setUser(data)).finally(() => setLoading(false));
        UserService.retrieveTodos(id).then(data => setTodos(data)).finally(() => setLoading(false));
        UserService.retrieveAlbums(id).then(data => setAlbums(data)).finally(() => setLoading(false));
        UserService.retrievePosts(id).then(data => setPosts(data)).finally(() => setLoading(false));
    }, []);

    const addTodo = (title) => {
        const todo = {
            userId: id,
            id: todos.sort((x, y) => x.id - y.id)[todos.length-1].id + 1,
            title,
            completed: false
        }

        setTodos([todo, ...todos]);
    }


    if(loading)
        return <Loading />

    return (
        <ScrollView style={styles.container}>
            <IsConnected />

            <UserInfosSection user={user} />

            <TodosSection todos={todos} onOpenModal={(title) => setModalVisible(true)}/>

            <AlbumsSection albums={albums} />

            <PostsSection posts={posts} />

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
    }
}

export default UserDetailsScreen;
