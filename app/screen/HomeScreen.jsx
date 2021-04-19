import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import UserApi from "../src/api/UserApi";
const HomeScreen = ({navigation}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchDataAsync = async () => {
            setUsers(await UserApi.getUsers());
        }

        fetchDataAsync()
    }, [])

    return (
        <View style={styles.container}>
            {
                users.map(user => {
                    return <TouchableOpacity onPress={() => {
                        navigation.navigate('UserDetails', {id: user.id})
                    }}>
                        <Text>{user.name}</Text>
                    </TouchableOpacity>
                })
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
});

export default HomeScreen;
