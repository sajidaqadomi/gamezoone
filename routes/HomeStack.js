import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

import React from 'react'
import { View, Text } from 'react-native'
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{

                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
            }}
        >
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='ReviewDetails'
                component={ReviewDetails}
            />
        </Stack.Navigator>

    )
}

export default HomeStack
