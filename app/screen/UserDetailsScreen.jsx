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
        <View style={tailwind('p-2 flex-1')}>
            <View style={tailwind('border rounded-lg p-2 bg-white border-gray-200')}>
                <Text style={tailwind('mb-1')}>Nom: {user.name}</Text>
                <Text style={tailwind('mb-1')}>Société: {user.company?.name}</Text>
                <Text style={tailwind('mb-1')}>Email: {user.email}</Text>
                <Text style={tailwind('mb-1')}>Téléphone: {user.phone}</Text>
            </View>

            <View style={{flex: 3}}>
                <Text style={tailwind('text-xl mt-3 mb-3')}>TODOs</Text>
                <FlatList
                    data={todos}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) => <TodoItem key={item.id} id={item.id} title={item.title} completed={item.completed}/>}
                />
            </View>

            <View style={{flex: 2}}>
                <Text style={tailwind('text-xl mt-3 mb-3')}>Albums</Text>
                <View style={tailwind('h-8 bg-gray-500')} />
                <FlatList
                    data={albums}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) => <AlbumItem id={item.id} title={item.title}/>}
                />
            </View>
        </View>
    )
}

export default UserDetailsScreen;
