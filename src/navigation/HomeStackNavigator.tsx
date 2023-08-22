import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import NotificationPage from '../components/pages/Notifications/NotificationPage';
import ProfilePage from '../components/pages/Profile/ProfilePage';
import { PersonInterface } from '../models/PersonInterface';
import { NotificationInterface } from '../models/NotificationInterface';
import HomePage from '../components/pages/Home/HomePage';


export type RootStackParams = {
  HomePage: undefined;
  ProfilePage: PersonInterface;
  NotificationPage: NotificationInterface[];
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
