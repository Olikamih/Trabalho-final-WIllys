import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../components/HomeScreen';
import HolidaysScreen from '../components/HolidaysScreen';
import CepScreen from '../components/CepScreen';

const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="home" color={color} size={size} />
        )}}
      />
      <Tab.Screen 
        name="Holidays" 
        component={HolidaysScreen} 
        options={{ tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="event" color={color} size={size} />
        )}}
      />
      <Tab.Screen 
        name="CEP" 
        component={CepScreen} 
        options={{ tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="search" color={color} size={size} />
        )}}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
