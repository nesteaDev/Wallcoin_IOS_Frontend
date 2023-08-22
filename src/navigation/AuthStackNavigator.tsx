import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthPage from '../components/pages/Auth/AuthPage';
import TabsNavigator from './TabsNavigator';

// interface PersonaInterface {
//   nombre: string;
//   numeroCuenta: string;
//   urlImagen: string;
// }

export type RootStackParams = {
  AuthPage: undefined;
  TabsNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const AuthStackNavigator = () => {
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
        name="AuthPage"
        options={{headerShown: false, headerTransparent: true}}
        component={AuthPage}
      />
      <Stack.Screen
        name="TabsNavigator"
        options={{headerShown: false, title: 'Home'}}
        component={TabsNavigator}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
