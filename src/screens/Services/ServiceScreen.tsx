import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';


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
    <View style={styles.container}>
      <Text style={styles.header}>Servicios de Billetera Virtual</Text>
      <FlatList
        data={services}
        renderItem={renderService}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db',
  },
});

export default ServiceScreen;
