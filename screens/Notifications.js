import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Notifications = () => {
    return (
        <View style={styles.container}>
            <Button
                onPress={() => navigation.goBack()}
                title="Go back home"
            />
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
