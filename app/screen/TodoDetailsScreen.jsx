import React from "react";
import {Text, View} from "react-native";

const TodoDetailsScreen = ({navigation, route}) => {
    const {id} = route.params;


    return <View>
        <Text>Todo id: {id}</Text>
    </View>
}

export default TodoDetailsScreen
