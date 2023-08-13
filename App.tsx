import 'react-native-gesture-handler';
import React, { ReactElement } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './src/navigation/TabsNavigator';
//import AuthPage from './src/components/pages/Auth/AuthPage';

function App(): ReactElement {
  return (
    <>
      <NavigationContainer>
        <TabsNavigator />
      </NavigationContainer>
      {/* <AuthPage /> */}
    </>
  );
}

export default App;
