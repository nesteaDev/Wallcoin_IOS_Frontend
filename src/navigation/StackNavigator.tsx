import {createStackNavigator} from '@react-navigation/stack';
import PageScreen01 from '../screens/PageScreen01';
import PageScreen02 from '../screens/PageScreen02';
import PageScreen03 from '../screens/PageScreen03';
import PageScreen04 from '../screens/PageScreen04';
import AuthComponent from '../components/Auth/authComponent';
import React, { ReactElement } from 'react';

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
  AuthComponent: undefined;
  PageScreen01: undefined;
  PageScreen02: PersonaInterface;
  PageScreen03: undefined;
  PageScreen04: NotificacionInterface;
};


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = (): ReactElement => {
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
        name="AuthComponent"
        options={{headerShown: false , title: 'Inicio'}}
        component={AuthComponent}
      />
      <Stack.Screen
        name="PageScreen01"
        options={{title: 'Home'}}
        component={PageScreen01}
      />
      <Stack.Screen
        name="PageScreen02"
        options={{title: 'Tu Perfil'}}
        component={PageScreen02}
      />
      <Stack.Screen
        name="PageScreen03"
        options={{title: 'Ajustes'}}
        component={PageScreen03}
      />
      <Stack.Screen
        name="PageScreen04"
        options={{title: 'Notificaciones'}}
        component={PageScreen04}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
