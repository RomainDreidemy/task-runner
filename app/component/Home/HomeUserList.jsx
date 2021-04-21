import {FlatList, StyleSheet, View} from "react-native";
import HomeUser from "./HomeUser";
import React from "react";

const HomeUserList = ({users = []}) => {
    return (
        <View style={styles.users}>
            <FlatList
                data={users}
                keyExtractor={item => item.id}
                renderItem={({item}) => <HomeUser user={item} key={item.id}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    users: {
        flex: 1,
        backgroundColor: "white",
        padding:20
    }
})

export default HomeUserList;
