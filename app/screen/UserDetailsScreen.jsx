import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from "react-native";
import UserApi from "../src/api/UserApi";
import tailwind from "tailwind-rn";
import TodoItem from "../component/UserDetails/TodoItem";
import AlbumItem from "../component/UserDetails/AlbumItem";

const UserDetailsScreen = ({ route }) => {

    const [user, setUser] = useState({});
    const [todos, setTodos] = useState([]);
    const [albums, setAlbums] = useState([]);

    const {id} = route.params;

    useEffect(() => {
        UserApi.getUser(id).then(data => setUser(data));
        UserApi.getAlbumsByUser(id).then(data => setAlbums(data));
        UserApi.getTodosByUser(id).then(data => setTodos(data));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.infosSection}>
                <Text style={styles.infoLine}>Nom: {user.name}</Text>
                <Text style={styles.infoLine}>Société: {user.company?.name}</Text>
                <Text style={styles.infoLine}>Email: {user.email}</Text>
                <Text style={styles.infoLine}>Téléphone: {user.phone}</Text>
            </View>

            <View style={styles.todosSection}>
                <Text style={styles.title}>TODOs</Text>
                <FlatList
                    data={todos}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) => <TodoItem key={item.id} id={item.id} title={item.title} completed={item.completed}/>}
                />
            </View>

            <View style={styles.albumsSection}>
                <Text style={styles.title}>Albums</Text>
                <View style={styles.albumsBlock} />
                <FlatList
                    data={albums}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) => <AlbumItem id={item.id} title={item.title}/>}
                />
            </View>
        </View>
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
