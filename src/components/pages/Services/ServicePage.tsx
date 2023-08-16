import React from 'react';
import { ImageBackground, View } from 'react-native';
import InfoCardOrganism from '../../organisms/InfoCardOrganism/InfoCardOrganism';
import { PersonInterface } from '../../../models/PersonInterface';
import TitleMolecule from '../../molecules/TitleMolecule';
import styles from './ServicesPageStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ServiceCarousel from '../../services/Carousel/ServiceCarousel';


interface Props {
  navigation: any;
  route: any;
}

const ServicePage = ({navigation, route}: Props) => {

  console.log(navigation);

  const {...data} = route.params as PersonInterface;

  return (
    <ImageBackground
      source={require('../../../assets/g5.jpeg')}
      style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TitleMolecule>Tus Servicios</TitleMolecule>

        <InfoCardOrganism styleSectionTop={styles.cardInfo} data={data} profile={false} />

        <View style={styles.containerLoader}>
          <ServiceCarousel />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};


export default ServicePage;
