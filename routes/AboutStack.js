
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native'
import About from '../screens/About';
const Stack = createStackNavigator();

const AboutStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{

                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
            }}
        >
            <Stack.Screen
                name='About'
                component={About}
            />

        </Stack.Navigator>

    )
}

export default AboutStack
