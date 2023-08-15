import React from 'react';
import {ReactElement} from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HistoryPage from '../components/pages/History/HistoryPage';
import ServicePage from '../components/pages/Services/ServicePage';
import HomeStackNavigator from './HomeStackNavigator';
import { PersonInterface } from '../models/PersonInterface';
import {PersonData, TransactionData} from '../data/data';
import { TransactionInterface } from '../models/TransactionInterface';

const Tab = createBottomTabNavigator();

const dataUser: PersonInterface = PersonData;
const dataTransaction: TransactionInterface[] = TransactionData;


export const TabsNavigator = (): ReactElement => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
        headerTransparent: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(53, 3, 47, 1)',
          borderTopColor: 'transparent',
          height: '7.5%',
          paddingBottom: '5%',
          // backgroundColor: 'black',
          // transform: [{translateY: -15}],
          // height: '6.5%',
          // paddingBottom: 8,
          // paddingTop: 8,
          // marginHorizontal: 15,
          // borderRadius: 60,
          //   shadowColor: '#000',
          //   shadowOffset: {
          //     width: 0,
          //     height: 6,
          //   },
          //   shadowOpacity: 0.37,
          //   shadowRadius: 7.49,
          //   elevation: 12,
          //   borderColor: 'transparent',
        },
        tabBarLabelStyle: {
          fontSize: 11,
          // marginTop: 1,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Inicio':
              iconName = 'home-outline';
              break;
            case 'Servicios':
              iconName = 'cash-outline';
              break;
            case 'Transacciones':
              iconName = 'reader-outline';
              break;
            default:
              iconName = 'radio-button-off-outline';
              break;
          }
          return (
            <Text style={{color}}>
              <Icon name={iconName} size={24} />
            </Text>
          );
        },
      })}>
      {/* <Tab.Screen
        name="Transacciones"
        options={{
          title: 'Historial',
          tabBarIcon(props) {
            return <Text style={{color: props.color}}>T1</Text>;
          },
        }}
        component={HistoryPage}
      /> */}
      <Tab.Screen
        name="Transacciones"
        options={{
          title: 'Historial',
        }}
        initialParams={[...dataTransaction]}
        component={HistoryPage}
      />
      <Tab.Screen name="Inicio" options={{}} component={HomeStackNavigator} />

      <Tab.Screen
        name="Servicios"
        options={{}}
        // Pasa los datos a través de initialParams
        initialParams={{...dataUser}}
        component={ServicePage}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
