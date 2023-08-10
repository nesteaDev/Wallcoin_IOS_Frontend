import 'react-native-gesture-handler';
import React, { ReactElement } from 'react';
import {NavigationContainer} from '@react-navigation/native';

//import HomeComponent from './src/components/Home/homeComponent';
//import StackNavigator from './src/navigation/StackNavigator';
import TabsNavigator from './src/navigation/TabsNavigator';
//import AuthComponent from './src/components/Auth/authComponent';

function App(): ReactElement {
  return (
    <>
      {/* <AuthComponent /> */}
      <NavigationContainer>
        <TabsNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;
