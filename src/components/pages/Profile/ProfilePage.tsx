import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {RootStackParams} from '../../../navigation/HomeStackNavigator';
import styles from './ProfilePageStyles';

// type RouterParams = {
//   nombre: string;
//   numeroCuenta: string;
//   urlImagen: string;
// };

interface Props extends StackScreenProps<RootStackParams, 'ProfilePage'> {}
function ProfilePage({navigation, route}: Props) {
  const {nombre, numeroCuenta, urlImagen} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: route.params?.nombre,
    });
  }, [navigation, route.params?.nombre]);

  return (
    <ImageBackground
      source={require('../../../assets/backGround.jpeg')}
      style={styles.backgroundImage}>
      <View>
        <Text>Tu Perfil:</Text>
        <Text>{nombre}</Text>
        <Text>{numeroCuenta}</Text>
        <Text>{urlImagen}</Text>
      </View>
    </ImageBackground>
  );
}

export default ProfilePage;
