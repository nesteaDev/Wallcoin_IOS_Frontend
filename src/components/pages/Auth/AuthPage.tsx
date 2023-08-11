import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './AuthPageStyles';

// import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
// import { useNavigation } from '@react-navigation/native';

// interface Props extends StackScreenProps<any, any> {
//   //navigation: StackNavigationProp<any, any>;
//   //route: RouteProp<any, any>;
// }
const AuthPage = () => {
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
          <View style={styles.containerImg}>
            <ImageBackground
              source={require('../../assets/Saly-28.png')}
              style={styles.imageLogin}
            />
          </View>
          <Text style={styles.title}>
            Bienvenido a <Text style={styles.titleStrong}>Wallcoin</Text>
          </Text>
          <Text style={styles.description}>
            Únete a la revolución digital y empieza a tomar el control de tu
            dinero.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Go to Home')}>
            <Text style={styles.buttonText}>Regístrate</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.descriptionFooter}>
              ¿Ya tienes una cuenta?{' '}
              <Text
                style={styles.descriptionFooterStrong}
                onPress={() => Alert.alert('Go to Home')}>
                Iniciar sesión
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AuthPage;
