import tailwind from "tailwind-rn";
import {Switch, Text, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";

const TodoItem = ({id, title, completed}) => {

    const [isCompleted, setIsCompleted] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        setIsCompleted(completed);
    }, []);


    return (
        <TouchableOpacity style={tailwind(  `h-12 bg-${isCompleted ? 'green' : 'red'}-300 mb-2 flex-1 flex-row justify-between p-2 items-center`)} onPress={() => {
            navigation.navigate('TodoDetails', {id})
        }}>
            <Text>{title.substring(0, 30)}{title.length > 30 ? '...' : ''}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isCompleted ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(val) => setIsCompleted(val)}
                value={isCompleted}
            />
        </TouchableOpacity>
    )
}

export default TodoItem;
