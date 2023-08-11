import { StackScreenProps } from '@react-navigation/stack';
import React, {useState} from 'react';
import styles from './HomePageStyles';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> {
  //navigation: StackNavigationProp<any, any>;
  //route: RouteProp<any, any>;
}

const HomePage = ({navigation}: Props ) => {
  const [balance, setBalance] = useState(100.0);

  const handleReload = () => {
    setBalance(balance + 50);
  };

  const handlePayment = () => {
    if (balance >= 20) {
      setBalance(balance - 20);
    } else {
      console.log('Saldo insuficiente para realizar el pago.');
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/backGround.jpeg')}
      style={styles.backgroundImage}>
      <View style={styles.headerButtons}>
        <Text
          style={styles.containerIcon}
          onPress={() =>
            navigation.navigate('ProfilePage', {
              nombre: 'Nestea Quiroga',
              numeroCuenta: 'Nestea_03924',
              urlImagen: 'dsfgeradfgadsgdfgdfsg.jpg',
            })
          }>
          <Icon name="person" size={30} color="rgba(255, 255, 255, 0.8)" />
        </Text>
        <Text
          style={styles.containerIcon}
          onPress={() =>
            navigation.navigate('NotificationPage', {
              destino: 'Jose Perez',
              fecha: '12/12/2021',
              monto: '1000',
            })
          }>
          <Icon
            name="notifications"
            size={30}
            color="rgba(255, 255, 255, 0.8)"
          />
        </Text>
      </View>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Billetera Virtual</Text>
          <Text style={styles.balance}>Saldo: ${balance.toFixed(2)}</Text>
          <TouchableOpacity style={styles.button} onPress={handleReload}>
            <Text style={styles.buttonText}>Recargar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePayment}>
            <Text style={styles.buttonText}>Realizar Pago</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};


export default HomePage;
