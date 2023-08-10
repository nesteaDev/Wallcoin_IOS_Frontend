import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

type Transaction = {
  title: string;
  amount: string;
  date: string;
};

const HistoryScreen = () => {
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
    <View style={styles.container}>
      <Text style={styles.header}>Historial de Transacciones</Text>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
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
  transactionItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionAmount: {
    fontSize: 18,
    color: '#3498db',
    marginTop: 5,
  },
  transactionDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
});

export default HistoryScreen;
