import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './authStyles';

import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';


interface Props extends StackScreenProps<any, any> {
  //navigation: StackNavigationProp<any, any>;
  //route: RouteProp<any, any>;
}
const AuthComponent = ({navigation}: Props) => {

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
          <Text style={styles.title}>
            Bienvenido a <Text style={styles.titleStrong}>Wallcoin</Text>
          </Text>
          <Text style={styles.description}>
            Únete a la revolución digital y empieza a tomar el control de tu dinero.
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
                onPress={() => navigation.navigate('PageScreen01')}>
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
