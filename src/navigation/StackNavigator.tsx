import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import PageScreen01 from '../components/pages/PageScreen01';
import PageScreen02 from '../components/pages/PageScreen02';
import PageScreen03 from '../components/pages/PageScreen03';
import PageScreen04 from '../components/pages/PageScreen04';

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
  AuthPage: undefined;
  PageScreen01: undefined;
  PageScreen02: PersonaInterface;
  PageScreen03: undefined;
  PageScreen04: NotificacionInterface;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
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
        name="PageScreen01"
        options={{headerShown: false, title: 'Home'}}
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
      {/* <Stack.Screen
        name="AuthPage"
        options={{headerShown: false, headerTransparent: true}}
        component={AuthPage}
      /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
