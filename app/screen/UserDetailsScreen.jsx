import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from "react-native";
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
        <ScrollView style={tailwind('p-5')}>
            <Text style={tailwind('mb-1')}>Nom: {user.name}</Text>
            <Text style={tailwind('mb-1')}>Société: {user.company?.name}</Text>
            <Text style={tailwind('mb-1')}>Email: {user.email}</Text>
            <Text style={tailwind('mb-1')}>Téléphone {user.phone}</Text>
            <Text style={tailwind('mb-1')}>{user.name}</Text>

            <Text style={tailwind('text-xl mt-3 mb-3')}>TODOs</Text>
            {
                todos.map(todo => <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}/>)
            }

            <Text style={tailwind('text-xl mt-3 mb-3')}>Albums</Text>
            <View style={tailwind('h-8 bg-gray-500')}>
            </View>
            {
                albums.map(album => <AlbumItem id={album.id} title={album.title}/>)
            }
        </ScrollView>
    )
}

export default UserDetailsScreen;
