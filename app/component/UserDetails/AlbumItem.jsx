import tailwind from "tailwind-rn";
import {Image, Text, TouchableOpacity} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";

const AlbumItem = ({id, title}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={tailwind('h-28 bg-gray-200 flex-1 flex-row items-center')}
            onPress={() => navigation.navigate('AlbumDetails', {id})}
        >
            <Image source={require('./../../../assets/adaptive-icon.png')} style={{width: 100, height: 100}}/>
            <Text>{title.substring(0, 15)}...</Text>
        </TouchableOpacity>
    )
}

export default AlbumItem;
