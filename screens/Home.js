import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View>
            <Text style={{ textAlign: 'center', marginTop: 300 }}>
                Home Screen
            </Text>
            <Button
                title='go to details'
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
