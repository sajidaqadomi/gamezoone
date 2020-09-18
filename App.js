
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import DrawerNavigator from './routes/Drawer';
import HomeStack from './routes/HomeStack';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />

    </NavigationContainer>
  );
}


