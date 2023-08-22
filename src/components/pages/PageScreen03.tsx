import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View} from 'react-native';

interface Props extends StackScreenProps<any, any> {
    //navigation: StackNavigationProp<any, any>;
    //route: RouteProp<any, any>;
}

function PageScreen03({navigation} : Props) {

  return (
    <View>
      <Text>Ajustes: Pag.3</Text>

      <Button title="Regresar: Pag.2" onPress={() => navigation.pop()} />

      <Button title="Home: Pag.1" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default PageScreen03;
