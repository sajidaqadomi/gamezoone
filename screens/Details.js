import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Details = ({ navigation }) => {
    return (
        <View style={styles.containe}>
            <Text>Details</Text>
            <Button title="View Bottom Tabs" onPress={() => navigation.navigate('TopTabs')} />
            <Button title="View Top Tabs" onPress={() => navigation.navigate('BottomTabs')} />
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})
