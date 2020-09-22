import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Card from '../shared/Card'
import { globalStyles, images } from '../styles/global'
//import { images } from '../styles/global'

const ReviewDetails = ({ navigation, route }) => {
    let { rating } = route.params
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                {/* <Text>{route.params.rating}</Text> */}
                <View style={styles.rating}>
                    <Text >
                        GameZoone Rating:
                    </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}

export default ReviewDetails

const styles = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 16,
        paddingTop: 16,
        borderTopColor: '#eee',
        borderTopWidth: 1

    }
})