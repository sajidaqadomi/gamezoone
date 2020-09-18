import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import About from '../screens/About';
import Home from '../screens/Home';
import { View, Text } from 'react-native';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (

        <Drawer.Navigator initialRouteName="Home">
            {/* <DrawerNavigator.Screen name="Home" children={HomeStack} /> */}
            <Drawer.Screen name='Home' children={HomeStack} />
            <Drawer.Screen name='About' component={AboutStack} />
        </Drawer.Navigator>

    )
}

export default DrawerNavigator
