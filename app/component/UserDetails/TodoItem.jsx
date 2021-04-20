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
        <TouchableOpacity
            style={tailwind(  `h-12 bg-${isCompleted ? 'green' : 'red'}-200 mb-2 flex-row justify-between p-2 items-center border rounded-lg border-transparent`)}
                          onPress={() => navigation.navigate('TodoDetails', {id})}
        >
            <Text style={tailwind('text-white')}>{title.substring(0, 30)}{title.length > 30 ? '...' : ''}</Text>
            <Switch
                trackColor={{ false: "red", true: "green" }}
                thumbColor={isCompleted ? "#fff" : "#fff"}
                ios_backgroundColor="red"
                onValueChange={(val) => setIsCompleted(val)}
                value={isCompleted}
            />
        </TouchableOpacity>
    )
}

export default TodoItem;
