import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {RootStackParams} from '../../../navigation/HomeStackNavigator';
import InfoCardOrganism from '../../organisms/InfoCardOrganism/InfoCardOrganism';


interface Props extends StackScreenProps<RootStackParams, 'ProfilePage'> {}
function ProfilePage({navigation,route}: Props) {

  console.log(navigation);

  const {...data} = route.params;

  //Cambiar el titulo de la Pagina
  // useEffect(() => {
  //   navigation.setOptions({
  //     title: data.name,
  //   });
  // }, [navigation, data.name]);

  return (
    <ImageBackground
      source={require('../../../assets/g5.jpeg')}
      style={styles.container}>
      <InfoCardOrganism data={data} profile={true} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    alignItems: 'center',
  },
});


export default ProfilePage;


