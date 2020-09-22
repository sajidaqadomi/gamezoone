import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        backgroundColor: '#fff',
        elevation: 3,
        marginHorizontal: 4,
        marginVertical: 6,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowColor: '#333',
        shadowRadius: 2

    },
    cardContent: {
        marginVertical: 10,
        marginHorizontal: 18

    }
})
