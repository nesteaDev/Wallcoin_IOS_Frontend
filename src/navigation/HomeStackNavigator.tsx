import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomePage from '../components/pages/Home/HomePage';
import NotificationPage from '../components/pages/Notifications/NotificationPage';
import ProfilePage from '../components/pages/Profile/ProfilePage';
import { PersonInterface } from '../models/PersonInterface';
import AuthPage from '../components/pages/Auth/AuthPage';
import { NotificationInterface } from '../models/NotificationInterface';

// interface PersonaInterface {
//   nombre: string;
//   numeroCuenta: string;
//   urlImagen: string;
// }

export type RootStackParams = {
  HomePage: undefined;
  ProfilePage: PersonInterface;
  NotificationPage: NotificationInterface[];
  AuthPage: undefined;
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
      <Stack.Screen
        name="AuthPage"
        options={{headerShown: false, headerTransparent: true }}
        component={AuthPage}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
