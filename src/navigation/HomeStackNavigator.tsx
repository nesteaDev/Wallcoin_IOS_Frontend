import {createStackNavigator} from '@react-navigation/stack';
import PageScreen02 from '../screens/PageScreen02';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';

interface PersonaInterface {
  nombre: string;
  numeroCuenta: string;
  urlImagen: string;
}


export type RootStackParams = {
  HomeScreen: undefined;
  PageScreen02: PersonaInterface;
};

const Stack = createStackNavigator<RootStackParams>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'black',
        title: 'App',
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{headerShown: false, title: 'Home'}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="PageScreen02"
        options={{title: 'Tu Perfil'}}
        component={PageScreen02}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
