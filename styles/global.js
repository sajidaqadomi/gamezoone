import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export const globalStyles = StyleSheet.create({
    container: {
        padding: 20
    },
    titleText: {
        //fontFamily: 'Nunito-Blod',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    input: {
        borderRadius: 6,
        borderWidth: 1,
        padding: 10,
        fontSize: 10,
        backgroundColor: '#ddd'
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 10,
        textAlign: 'center'
    }
})
export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png')
    }
}