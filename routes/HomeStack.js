import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

import React from 'react'
import { View, Text } from 'react-native'
import Header from '../shared/Header';
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'black',
                //headerStyle: { backgroundColor: 'tomato' },
            }}
        >
            <Stack.Screen
                name='Home'
                component={Home}
                options={{

                    headerTitle: () => <Header title='HOME' />
                }}

            />
            <Stack.Screen
                name='ReviewDetails'
                component={ReviewDetails}

            />
        </Stack.Navigator>

    )
}

export default HomeStack
