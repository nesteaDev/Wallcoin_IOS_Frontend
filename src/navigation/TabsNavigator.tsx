import React from 'react';
import {ReactElement} from 'react';
import { Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/History/HistoryScreen';
import ServiceScreen from '../screens/Services/ServiceScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

export const TabsNavigator = (): ReactElement => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.4)',
        tabBarStyle: {
          backgroundColor: '#3498db',

          height: '6.5%',
          paddingBottom: 8,
          paddingTop: 8,
          marginBottom: 20,
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
        },
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: 1,
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
        component={HistoryScreen}
      /> */}
      <Tab.Screen
        name="Transacciones"
        options={{
          title: 'Historial',
        }}
        component={HistoryScreen}
      />
      <Tab.Screen name="Inicio" options={{}} component={HomeStackNavigator} />
      <Tab.Screen name="Servicios" component={ServiceScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
