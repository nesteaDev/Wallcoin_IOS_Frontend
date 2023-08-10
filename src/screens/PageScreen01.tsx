import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import styles from '../components/Auth/authStyles';


interface Props extends StackScreenProps<any, any>  {
  //navigation: StackNavigationProp<any, any>;
  //route: RouteProp<any, any>;
}

export const PageScreen01 = ( { navigation }: Props) => {
  return (
    <View>
      <Text>Home</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('PageScreen02', {
            nombre: 'Nestea Quiroga',
            numeroCuenta: 'Nestea_03924',
            urlImagen: 'dsfgeradfgadsgdfgdfsg.jpg',
          })
        }>
        <Text style={styles.buttonText}>Icono Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('PageScreen02', {
            nombre: 'Pedro Perez',
            numeroCuenta: 'Pedro_03924',
            urlImagen: 'dsfgeradfgadsgdfgdfsg.jpg',
          })
        }>
        <Text style={styles.buttonText}>Pedro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('PageScreen04', {
            destino: 'Jose Perez',
            fecha: '12/12/2021',
            monto: '1000',
          })
        }>
        <Text style={styles.buttonText}>Icono Notificación</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PageScreen01;
