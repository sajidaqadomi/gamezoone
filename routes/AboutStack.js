
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native'
import Header from '../shared/Header';
import About from '../screens/About';
const Stack = createStackNavigator();

const AboutStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{

                headerTintColor: 'black',
                // headerStyle: { backgroundColor: 'tomato' },
            }}
        >
            <Stack.Screen
                name='About'
                component={About}
                options={{
                    headerTitle: () => <Header title='ABOUT' />
                }}
            />

        </Stack.Navigator>

    )
}

export default AboutStack
