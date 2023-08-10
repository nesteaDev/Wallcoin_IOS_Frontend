import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';



type RouterParams = {
  nombre: string;
  numeroCuenta: string;
  urlImagen: string;
};


interface Props extends StackScreenProps<any, any> {
  // navigation: StackNavigationProp<any, any>;
  // route: RouteProp<any, any>;
}
function PageScreen02({navigation, route} : Props) {

  const {nombre, numeroCuenta, urlImagen} = route.params as RouterParams;


  useEffect(() => {
    navigation.setOptions({
      title: route.params?.nombre,
    });
  }, [navigation, route.params?.nombre]);

  return (
    <View>
      <Text>Tu Perfil:</Text>

      <Text>{nombre}</Text>
      <Text>{numeroCuenta}</Text>
      <Text>{urlImagen}</Text>

      <Button
        title="Ajustes: Pag.3"
        onPress={() => navigation.navigate('PageScreen03')}
      />
    </View>
  );
}

export default PageScreen02;
