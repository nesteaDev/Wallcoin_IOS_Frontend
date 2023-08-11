import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfilePage from '../screens/Profile/ProfilePage';
import NotificationPage from '../screens/Notifications/NotificationPage';

interface PersonaInterface {
  nombre: string;
  numeroCuenta: string;
  urlImagen: string;
}

interface NotificacionInterface {
  destino: string;
  fecha: string;
  monto: string;
}


export type RootStackParams = {
  HomeScreen: undefined;
  ProfilePage: PersonaInterface;
  NotificationPage: NotificacionInterface;
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
        name="ProfilePage"
        options={{title: 'Tu Perfil'}}
        component={ProfilePage}
      />
      <Stack.Screen
        name="NotificationPage"
        options={{title: 'Notificaciones'}}
        component={NotificationPage}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
