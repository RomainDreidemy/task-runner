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
            style={isCompleted ? {...styles.global.container, ...styles.completedYes.container} : {...styles.global.container, ...styles.completedNo.container}}
                          onPress={() => navigation.navigate('TodoDetails', {id})}
        >
            <Text style={styles.global.text}>{title.substring(0, 30)}{title.length > 30 ? '...' : ''}</Text>
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

const styles = {
    global: {
        container: {
            height: 50,
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            alignItems: 'center',
            border: 1,
            borderRadius: 5,
            borderColor: 'transparent',
        },
        text: {
            color: '#fff'
        }
    },
    completedYes: {
        container: {
            backgroundColor: '#79c194',
        }
    },
    completedNo: {
        container: {
            backgroundColor: '#e37885',
        }
    }
}

export default TodoItem;
