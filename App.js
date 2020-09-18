
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Notifications from './screens/Notifications';
import Home from './screens/Home';
import Details from './screens/Details';
import Tab1 from './screens/tabs/Tab1';
import Tab2 from './screens/tabs/Tab2';
import Tab3 from './screens/tabs/Tab3';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();
export default function App() {
  homeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='TopTabs' children={topTaps} />
        <Stack.Screen name='BottomTabs' children={BottomTaps} />
      </Stack.Navigator>
    )
  }
  topTaps = () => {
    return (
      <MaterialTopTab.Navigator>
        <MaterialTopTab.Screen name='Tab1' component={Tab1} />
        <MaterialTopTab.Screen name='Tab2' component={Tab2} />
        <MaterialTopTab.Screen name='Tab3' component={Tab3} />

      </MaterialTopTab.Navigator>
    )
  }
  BottomTaps = () => {
    return (
      <MaterialBottomTab.Navigator>
        <MaterialBottomTab.Screen name='Tab1' component={Tab1} />
        <MaterialBottomTab.Screen name='Tab2' component={Tab2} />
        <MaterialBottomTab.Screen name='Tab3' component={Tab3} />

      </MaterialBottomTab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" children={homeStack} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
