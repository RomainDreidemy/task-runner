import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screen/HomeScreen";
import {SafeAreaView} from "react-native";
import AlbumDetailsScreen from "../screen/AlbumDetailsScreen";
import UserDetailsScreen from "../screen/UserDetailsScreen";
import TodoDetailsScreen from "../screen/TodoDetailsScreen";

const Stack = createStackNavigator();

const NavigationHandler = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="UserDetails"
                    component={UserDetailsScreen}
                />
                <Stack.Screen
                    name="TodoDetails"
                    component={TodoDetailsScreen}
                />
                <Stack.Screen
                    name="AlbumDetails"
                    component={AlbumDetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationHandler;
