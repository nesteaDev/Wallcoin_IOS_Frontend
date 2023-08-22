import React from 'react';
import {useAuth0} from 'react-native-auth0';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './AuthPageStyles';
import { StackScreenProps } from '@react-navigation/stack';



interface Props extends StackScreenProps<any, any> {}
const AuthPage = ({navigation}: Props) => {

  const {authorize} = useAuth0();

  const onPress = async () => {
    // TODO: Implementar validación al cancelar el login
    try {
      await authorize().finally(() => {
        navigation.navigate('TabsNavigator');
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/g5.jpeg')}
      style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Swiper
          style={styles.swiperContainer}
          dotColor="rgba(255,255,255,0.1)"
          activeDotColor="rgba(202, 82, 16,1)"
          autoplay={true}>
          <View style={styles.slideImage}>
            <ImageBackground
              source={require('../../../assets/slider/Saly-11.png')}
              style={styles.imageBackground}
            />
          </View>
          <View style={styles.slideImage}>
            <ImageBackground
              source={require('../../../assets/slider/Saly-45.png')}
              style={styles.imageBackground}
            />
          </View>
          <View style={styles.slideImage}>
            <ImageBackground
              source={require('../../../assets/slider/Saly-12.png')}
              style={styles.imageBackground}
            />
          </View>
          <View style={styles.slideImage}>
            <ImageBackground
              source={require('../../../assets/slider/Saly-31.png')}
              style={styles.imageBackground}
            />
          </View>
          <View style={styles.slideImage}>
            <ImageBackground
              source={require('../../../assets/slider/Saly-44.png')}
              style={styles.imageBackground}
            />
          </View>
        </Swiper>
        <View style={styles.container}>
          <View style={styles.containerImg}>
            <ImageBackground
              source={require('../../../assets/ilustrations/Saly-28.png')}
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
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.descriptionFooter}>
              ¿Aun no tienes una cuenta?{' '}
              <Text style={styles.descriptionFooterStrong} onPress={onPress}>
                Regístrate
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AuthPage;
