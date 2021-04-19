import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import UserApi from "../src/api/UserApi";
const AlbumDetailsScreen = ({navigation, route}) => {

    const {id} = route.params;

    return (
        <View>
            <Text>Album id: {id}</Text>
        </View>
    )
}

export default AlbumDetailsScreen;
