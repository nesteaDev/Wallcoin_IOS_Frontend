import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import styles from './ServicesPageStyles';


type Service = {
  title: string;
};

const ServiceScreen = () => {
  const services: Service[] = [
    {title: 'Enviar Dinero'},
    {title: 'Pagar Facturas'},
    {title: 'Recargar Cuenta'},
  ];

  const handleServicePress = (service: {title: string}) => {
    Alert.alert('Servicio Seleccionado', `Has seleccionado: ${service.title}`);
  };

  const renderService = ({item}: {item: Service}) => (
    <TouchableOpacity
      style={styles.serviceItem}
      onPress={() => handleServicePress(item)}>
      <Text style={styles.serviceTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../../assets/backGround.jpeg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.header}>Servicios de Billetera Virtual</Text>
        <FlatList
          data={services}
          renderItem={renderService}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
};

export default ServiceScreen;
