import {ActivityIndicator, StyleSheet, View} from "react-native";
import React from "react";

const Loading = () => {
    return (
        <View style={styles.containerLoading}>
            <ActivityIndicator />
        </View>
    )
}

const styles = StyleSheet.create({
    containerLoading: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Loading;
