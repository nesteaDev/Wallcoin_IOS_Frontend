//import { StackScreenProps } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {  Text, View } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator';


//interface Props extends StackScreenProps<any, any> {
  //navigation: StackNavigationProp<any, any>;
  //route: RouteProp<any, any>;
//}

interface Props extends StackScreenProps<RootStackParams, 'PageScreen04'> {}
function PageScreen04({route}: Props) {

  const {destino, fecha, monto} = route.params;


  return (
    <View>
      <Text>Logs Y Notificaciones:</Text>

      <Text>{destino}</Text>
      <Text>{fecha}</Text>
      <Text>{monto}</Text>
    </View>
  );
}

export default PageScreen04;
