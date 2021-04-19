import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import UserApi from "../src/api/UserApi";
import tailwind from "tailwind-rn";

const UserDetailsScreen = ({ navigation, route }) => {

    const [user, setUser] = useState({});
    const [todos, setTodos] = useState([])
    const [albums, setAlbums] = useState([]);

    const {id} = route.params;

    useEffect(() => {
        UserApi.getUser(id).then(data => setUser(data))
        UserApi.getAlbumsByUser(id).then(data => setAlbums(data))
        UserApi.getTodosByUser(id).then(data => setTodos(data))
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
                todos.map(todo => {
                    return <TouchableOpacity style={tailwind('h-12 bg-green-300 mb-2')} onPress={() => {
                        navigation.navigate('TodoDetails', {id: todo.id})
                    }}>
                        <Text>Truc à faire</Text>
                    </TouchableOpacity>
                })
            }

            <Text style={tailwind('text-xl mt-3 mb-3')}>Albums</Text>
            {
                albums.map(album => {
                    return <TouchableOpacity>
                        <Text>{album.title}</Text>
                    </TouchableOpacity>
                })
            }
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default UserDetailsScreen;
