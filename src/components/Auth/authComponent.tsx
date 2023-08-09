import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
// import {useNavigation} from '@react-navigation/native';
import styles from './authStyles';

const AuthComponent = () => {
  // const navigation = useNavigation();

  // const handleLoginPress = () => {
  //   navigation.navigate('Login');
  // };

  return (
    <ImageBackground
      source={require('../../assets/altBackgroundApp.jpeg')}
      style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Swiper
          style={styles.swiperContainer}
          dotColor="#125366"
          activeDotColor="#D57329"
          autoplay={true}>
          <View style={styles.slideImage}>
            <ImageBackground
              source={require('../../assets/slider/Saly-11.png')}
              style={styles.imageBackground}
            />
          </View>
          <View style={styles.slideImage}>
            <ImageBackground
              source={require('../../assets/slider/Saly-45.png')}
              style={styles.imageBackground}
            />
          </View>
          <View style={styles.slideImage}>
            <ImageBackground
              source={require('../../assets/slider/Saly-12.png')}
              style={styles.imageBackground}
            />
          </View>
          <View style={styles.slideImage}>
            <ImageBackground
              source={require('../../assets/slider/Saly-31.png')}
              style={styles.imageBackground}
            />
          </View>
          <View style={styles.slideImage}>
            <ImageBackground
              source={require('../../assets/slider/Saly-44.png')}
              style={styles.imageBackground}
            />
          </View>
        </Swiper>
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido a WalletApp</Text>
          <Text style={styles.description}>
            Inicia sesión o regístrate para acceder a todas las funciones de la
            aplicación.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Go to Home')}>
            <Text style={styles.buttonText}>Regístrate</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.descriptionFooter}>
              ¿Ya tienes una cuenta?{' '}
              <Text
                style={styles.descriptionFooterStrong}
                onPress={() => console.log('Go to Login')}>
                Iniciar sesión
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AuthComponent;
