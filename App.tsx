import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//import HomeComponent from './src/components/Home/homeComponent';
import StackNavigator from './src/navigation/StackNavigator';
//import AuthComponent from './src/components/Auth/authComponent';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      {
        //<AuthComponent />
        <StackNavigator />
      }
    </NavigationContainer>
  );
}

export default App;
