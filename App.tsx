import 'react-native-gesture-handler';
import { Auth0Provider} from 'react-native-auth0';
import React, { ReactElement } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';

function App(): ReactElement {
  return (
    <>
      <Auth0Provider
        domain={'dev-jitjgfu48u7z2mxv.us.auth0.com'}
        clientId={'ahDQI2KNfKDZl9Ujl1L2zTFaepGF1DwQ'}>
        <NavigationContainer>
          <AuthStackNavigator />
        </NavigationContainer>
      </Auth0Provider>
    </>
  );
}

export default App;
