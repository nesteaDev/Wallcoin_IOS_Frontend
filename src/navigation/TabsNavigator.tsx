import React from 'react';
import {ReactElement} from 'react';
import { Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/History/HistoryScreen';
import ServiceScreen from '../screens/Services/ServiceScreen';
import StackNavigator from '../navigation/StackNavigator';

const Tab = createBottomTabNavigator();

export const TabsNavigator = (): ReactElement => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#125366',
          height: '6%',
          paddingBottom: 8,
          paddingTop: 8,
          marginBottom: 20,
          marginHorizontal: 15,
          borderRadius: 40,
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
          fontSize: 10,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Inicio':
              iconName = 'I';
              break;
            case 'Servicios':
              iconName = 'S';
              break;
            case 'Transacciones':
              iconName = 'H';
              break;
            default:
              iconName = 'home';
              break;
          }
          return <Text style={{color, fontSize: 21}}>{iconName}</Text>;
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
      <Tab.Screen name="Inicio" options={{}} component={StackNavigator} />
      <Tab.Screen name="Servicios" component={ServiceScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
