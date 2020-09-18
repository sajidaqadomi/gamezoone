import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'

const Home = ({ navigation }) => {
    const [review, setReview] = useState([
        { title: 'review 1', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'review 2', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'review 3', rating: 3, body: 'lorem ipsum', key: '3' }
    ])
    const handlePress = () => {
        navigation.navigate('ReviewDetails')

    }
    return (
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home</Text>
            <Button title='GO To View Details' onPress={handlePress} /> */}
            <FlatList
                data={review}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>


                )}
            />

        </View>
    )
}

export default Home



