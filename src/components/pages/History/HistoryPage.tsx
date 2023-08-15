import React from 'react';
import {View, ImageBackground, FlatList, Text} from 'react-native';
import styles from './HistoryPageStyles';
import TitleMolecule from '../../molecules/TitleMolecule';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TransactionInterface} from '../../../models/TransactionInterface';


interface Props {
  navigation: any;
  route: any;
}

const HistoryPage = ({route}: Props) => {
  const data = route.params;

  const convertedList: TransactionInterface[] = Object.keys(data).map(
    key => data[parseInt(key, 10)],
  );



  const validationTypeTransaction = (item: TransactionInterface) => {
    switch (item.type) {
      case 'recharge':
        return (
          <>
            <Text style={styles.transactionSubtitle}>Recarga de:</Text>
            <Text style={[styles.transactionAmount, {color: 'green'}]}>$ {item.amount}</Text>
          </>
        );
      case 'received':
        return (
          <>
            <Text style={styles.transactionSubtitle}>De:</Text>
            <Text style={[styles.transactionAmount, {color: 'green'}]}>
              $ {item.amount}
            </Text>
          </>
        );
      case 'payment':
        return (
          <>
            <Text style={styles.transactionSubtitle}>Para:</Text>
            <Text style={[styles.transactionAmount, {color: 'red'}]}>
              $ {item.amount}
            </Text>
          </>
        );
      default:
        return (
        <>
          <Text style={styles.transactionSubtitle}>Movimiento:</Text>
          <Text style={[styles.transactionAmount, {color: 'orange'}]}>
            $ {item.amount}
          </Text>
        </>
      );
    }
  };

  const renderTransaction = ({item}: {item: TransactionInterface}) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionTitle}>{item.origin.name}</Text>
      {validationTypeTransaction(item)}
      <Text style={styles.transactionDate}>{item.date}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../../assets/g5.jpeg')}
      style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TitleMolecule>Tu Historial</TitleMolecule>
        <View style={styles.containerList}>
          <FlatList
            data={convertedList}
            renderItem={renderTransaction}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};


export default HistoryPage;
