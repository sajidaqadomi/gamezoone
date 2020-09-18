import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text></Text>
            <View>
                <Text style={styles.headerText}>

                </Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    headerText: {
        fontWeight: '700',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1


    }
})
