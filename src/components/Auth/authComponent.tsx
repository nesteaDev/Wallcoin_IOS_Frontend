import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import styles from './authStyles';

const InicioScreen = () => {
  // const navigation = useNavigation();

  // const handleLoginPress = () => {
  //   navigation.navigate('Login');
  // };

  return (
    <ImageBackground
      source={require('../../assets/backgroundApp.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido a Mi App</Text>
          <Text style={styles.description}>
            Inicia sesión o regístrate para acceder a todas las funciones de la
            aplicación.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Go to Login')}>
            <Text style={styles.buttonText}>Inicio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default InicioScreen;
