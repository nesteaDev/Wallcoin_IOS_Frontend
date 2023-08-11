import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomePage from '../components/pages/Home/HomePage';
import NotificationPage from '../components/pages/Notifications/NotificationPage';
import ProfilePage from '../components/pages/Profile/ProfilePage';

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
  HomePage: undefined;
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
        name="HomePage"
        options={{headerShown: false, title: 'Home'}}
        component={HomePage}
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
