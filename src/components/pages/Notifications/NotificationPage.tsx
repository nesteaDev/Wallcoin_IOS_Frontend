import React from 'react';
import {FlatList, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import styles from './NotificationPageStyles';
import TitleMolecule from '../../molecules/TitleMolecule';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../../navigation/HomeStackNavigator';
import { NotificationInterface } from '../../../models/NotificationInterface';

interface Props extends StackScreenProps<RootStackParams, 'NotificationPage'> {}

function NotificationPage({route}: Props) {

  console.log(route.params);

  const [...data] = route.params;

  const renderItem = ({item}: {item: NotificationInterface}) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationText}>{item.message}</Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
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
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default NotificationPage;
