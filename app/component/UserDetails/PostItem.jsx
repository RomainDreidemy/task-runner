import {Alert, Text, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {useNavigation} from "@react-navigation/native";

const PostItem = ({id, title}) => {

    const navigation = useNavigation();

    return (

        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('PostDetails', {id})}>
            <Text style={styles.title}>{title.substring(0, 43)}{title.length > 43 ? '...' : ''}</Text>
            <Ionicons name="arrow-forward-outline" size={24} color={'#bbb'}/>
        </TouchableOpacity>
    )
}

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    title: {
        color: '#717070'
    }
}

export default PostItem;
