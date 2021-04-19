import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import UserApi from "../src/api/UserApi";
const UserDetailsScreen = ({ navigation, route }) => {

    const {id} = route.params;

    return (
        <View style={styles.container}>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default UserDetailsScreen;
