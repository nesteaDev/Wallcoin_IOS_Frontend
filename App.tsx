import 'react-native-gesture-handler';
import React, { ReactElement } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './src/navigation/TabsNavigator';

function App(): ReactElement {
  return (
    <>
      <NavigationContainer>
        <TabsNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;
