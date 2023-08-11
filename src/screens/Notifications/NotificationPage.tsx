import React from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import styles from './NotificationPageStyles';

//interface Props extends StackScreenProps<any, any> {
//navigation: StackNavigationProp<any, any>;
//route: RouteProp<any, any>;
//}

type Notification = {
  id: number;
  message: string;
  timestamp: string;
};

//interface Props extends StackScreenProps<RootStackParams, 'NotificationPage'> {}
function NotificationPage() {
  // const {destino, fecha, monto} = route.params;

  const notifications = [
    { id: 1, message: 'Se ha realizado una transacción exitosa.', timestamp: '2023-08-10 09:30 AM' },
    { id: 2, message: 'Saldo insuficiente para completar la transacción.', timestamp: '2023-08-09 02:15 PM' },
    { id: 3, message: '¡Bienvenido! Tu cuenta de billetera virtual ha sido creada.', timestamp: '2023-08-08 11:00 AM' },
    // Agrega más notificaciones aquí...
  ];

  const renderItem = ({item}: {item: Notification}) => (
      <View style={styles.notificationItem}>
        <Text style={styles.notificationText}>{item.message}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
  );

  return (
    <ImageBackground
      source={require('../../assets/backGround.jpeg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Historial de Notificaciones</Text>
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ImageBackground>
  );
}

export default NotificationPage;
