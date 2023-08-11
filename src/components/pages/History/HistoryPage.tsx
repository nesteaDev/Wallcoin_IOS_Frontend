import React from 'react';
import {View, Text, FlatList, ImageBackground} from 'react-native';
import styles from './HistoryPageStyles';

type Transaction = {
  title: string;
  amount: string;
  date: string;
};

const HistoryPage = () => {
  const transactions: Transaction[] = [
    {title: 'Compra en tienda', amount: '$50.00', date: '10 de agosto de 2023'},
    {title: 'Recarga de saldo', amount: '$30.00', date: '8 de agosto de 2023'},
    {title: 'Pago de factura', amount: '$75.00', date: '5 de agosto de 2023'},
  ];

  const renderTransaction = ({item}: {item: Transaction}) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionTitle}>{item.title}</Text>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
      <Text style={styles.transactionDate}>{item.date}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../../assets/backGround.jpeg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.header}>Historial de Transacciones</Text>
        <FlatList
          data={transactions}
          renderItem={renderTransaction}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
};

export default HistoryPage;
