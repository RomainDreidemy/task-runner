import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import AlbumDetailsScreen from '../screen/AlbumDetailsScreen';
import UserDetailsScreen from '../screen/UserDetailsScreen';
import PostDetailsScreen from '../screen/PostDetailsScreen';

const Stack = createStackNavigator();

const NavigationHandler = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetailsScreen}
          options={{ title: "Fiche d'information", headerBackTitle: 'Accueil' }}
        />
        <Stack.Screen
          name="AlbumDetails"
          component={AlbumDetailsScreen}
          options={{ title: 'Mon album', headerBackTitle: 'Retour' }}
        />
        <Stack.Screen
          name="PostDetails"
          component={PostDetailsScreen}
          options={{ title: 'Mon article', headerBackTitle: 'Retour' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationHandler;
