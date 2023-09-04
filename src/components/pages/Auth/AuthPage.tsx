import React from 'react';
import { useSelector } from 'react-redux';
import {useAuth0} from 'react-native-auth0';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './AuthPageStyles';
import { StackScreenProps } from '@react-navigation/stack';
import { CreateUserRequestDto } from '../../../domain/dtos/user/CreateUserRequestDto';
import axios from 'axios';



interface Props extends StackScreenProps<any, any> {}
const AuthPage = ({navigation}: Props) => {

  const userState = useSelector((state: any) => state.userAuth);
  console.log('userRedux: ', userState);


  const {authorize, user, isLoading } = useAuth0();
  console.log(user);

  const onPress = async () => {

      try {
        await authorize().then(async () => {
          if (user !== null) {

            const responseUser = await axios.get(`http://localhost:3000/api/user/validate/${user?.sub}`);
            console.log('Usuario validado en el backend:', responseUser.data);

            if (responseUser.data === null){

              const createUserDto: CreateUserRequestDto = {
                name: user?.name || '',
                email: user?.email || '',
                urlImage: user?.picture || '',
                token: user?.sub || '',
              };

              const responseAdd = await axios.post(
                'http://localhost:3000/api/user',
                createUserDto,
              );
              console.log('Usuario creado en el backend:', responseAdd.data);
            } else {
              console.log('Usuario ya existe en el backend');

              const responseUserExist = await axios.get(
                `http://localhost:3000/api/user/${responseUser.data?.idUser}`,
              );
              console.log('Usuario obtenido del backend:', responseUserExist.data);
            }
          }

        }).finally(async () => {
          if (user !== null || user !== undefined) {
            navigation.navigate('TabsNavigator');
          }
        });
      } catch (e) {
        console.log('Error: ', e);
      }
  };

  const openWebLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`No se puede abrir el enlace: ${url}`);
    }
  };

  const handleOpenLink = () => {
    const webURL = 'https://dev-jitjgfu48u7z2mxv.us.auth0.com/';
    openWebLink(webURL);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../../../assets/g5.jpeg')}
      style={styles.backgroundImage}>
      <View style={styles.overlay}>
        {isLoading}
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
              <Text
                style={styles.descriptionFooterStrong}
                onPress={handleOpenLink}>
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
