import { FlatList, StyleSheet, View } from "react-native";
import HomeUser from "./HomeUser";
import React from "react";

const HomeUserList = ({ users = [] }) => {
    return (
        <View style={styles.users}>
            <FlatList
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <HomeUser user={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    users: {
        flex: 2
    }
})

export default HomeUserList;
