import React from 'react';
import {ReactElement} from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HistoryPage from '../components/pages/History/HistoryPage';
import ServicePage from '../components/pages/Services/ServicePage';
import { PersonInterface } from '../models/PersonInterface';
import {PersonData, TransactionData} from '../data/data';
import { TransactionInterface } from '../models/TransactionInterface';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

const dataUser: PersonInterface = PersonData;
const dataTransaction: TransactionInterface[] = TransactionData;


export const TabsNavigator = (): ReactElement => {
  return (
    <ImageBackground
      source={require('../assets/botomBackground.png')}
      style={styles.container}>
      <Tab.Navigator
        initialRouteName="HomeStackNavigator"
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'rgba(33, 3, 37, 0.9)',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.4)',
          headerTransparent: true,
          headerShown: false,
          tabBarStyle: {
            // backgroundColor: 'rgba(33, 3, 37, 1)',
            backgroundColor: 'rgba(255, 255, 255, 0.55)',
            borderTopColor: 'transparent',
            transform: [{translateY: -18}],
            height: '6%',
            paddingBottom: 8,
            paddingTop: 8,
            marginHorizontal: 15,
            borderRadius: 60,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
            borderColor: 'transparent',
          },
          tabBarLabelStyle: {
            fontSize: 11,
            // marginTop: 1,
          },
          tabBarIcon: ({color}) => {
            let iconName: string = '';
            switch (route.name) {
              case 'Inicio':
                iconName = 'home';
                break;
              case 'Servicios':
                iconName = 'layers-sharp';
                break;
              case 'Transacciones':
                iconName = 'reader-sharp';
                break;
              default:
                iconName = 'radio-button-off-sharp';
                break;
            }
            return (
              <Text style={{color}}>
                <Icon name={iconName} size={24} />
              </Text>
            );
          },
        })}>
        <Tab.Screen name="Inicio" options={{}} component={HomeStackNavigator} />
        <Tab.Screen
          name="Servicios"
          options={{}}
          initialParams={{...dataUser}}
          component={ServicePage}
        />
        <Tab.Screen
          name="Transacciones"
          options={{
            title: 'Historial',
          }}
          initialParams={[...dataTransaction]}
          component={HistoryPage}
        />
      </Tab.Navigator>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default TabsNavigator;
