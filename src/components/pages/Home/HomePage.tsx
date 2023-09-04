import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {useAuth0} from 'react-native-auth0';
import {
  Alert,
  Image,
  ImageBackground,
  View,
} from 'react-native';
import {PersonInterface} from '../../../models/PersonInterface';
import IconMolecule from '../../molecules/IconMolecule';
import {PersonData, NotificationData} from '../../../data/data';
import styles from './HomePageStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NotificationInterface } from '../../../models/NotificationInterface';
import CircleMolecule from '../../molecules/CircleMolecule';
import ServiceCarousel from '../../services/Carousel/ServiceCarousel';
import TextAtom from '../../atoms/TextAtom';
import {useSelector} from 'react-redux';


interface Props extends StackScreenProps<any, any> {}

const dataUser: PersonInterface = PersonData;
const dataNotification: NotificationInterface[] = NotificationData;

const HomePage = ({navigation}: Props) => {
  // console.log(navigation);

  const stateTask = useSelector((state: any) => state.userAuth);
  console.log('stateTask: ', stateTask);

  const {clearSession} = useAuth0();

  const logout = async () => {
    try {
      await clearSession();
      console.log('logout');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/g5.jpeg')}
      style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerButtons}>
          <View style={styles.headerRightButtonsContainer}>
            <IconMolecule
              containerIconStyles={(styles.iconStyle, styles.iconLeftStyle)}
              iconName="person-outline"
              iconSize={24}
              iconColor="rgba(255, 255, 255, 0.9)"
              onPress={() => navigation.navigate('ProfilePage', {...dataUser})}
              activeOpacity={0.6}
              button={true}
            />
            <View style={styles.headerText}>
              <TextAtom style={styles.headerTextLabel}>Hola</TextAtom>
              <TextAtom style={styles.headerTextName}>{dataUser.name}</TextAtom>
            </View>
          </View>
          <View style={styles.headerRightButtons}>
            <IconMolecule
              containerIconStyles={styles.iconStyle}
              iconName="notifications-outline"
              iconSize={26}
              iconColor="rgba(255, 255, 255, 0.9)"
              onPress={() =>
                navigation.navigate('NotificationPage', [...dataNotification])
              }
              activeOpacity={0.6}
              button={true}
            />
            <IconMolecule
              containerIconStyles={[styles.iconStyle, styles.iconRightStyle]}
              iconName="power-outline"
              iconSize={26}
              iconColor="rgba(255, 255, 255, 0.9)"
              onPress={() => {
                Alert.alert(
                  'Cerrar Sesión',
                  '¿Estás seguro de cerrar sesión?',
                  [
                    {
                      text: 'Cancelar',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'Aceptar',
                      onPress: () => {
                        logout;
                        navigation.navigate('AuthPage');
                      },
                    },
                  ],
                  {cancelable: false},
                );
              }}
              activeOpacity={0.6}
              button={true}
            />
          </View>
        </View>
        <View style={styles.containerLoader}>
          <ServiceCarousel />
        </View>

        <CircleMolecule
          styleContainer={styles.containerCircle}
          value={dataUser.account.balance.toString()}
        />
        <View style={styles.containerImage}>
          <Image
            source={require('../../../assets/ilustrations/Saly-19.png')}
            style={styles.logo}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};



export default HomePage;
