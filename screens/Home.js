import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native'
import Card from '../shared/Card'
import { globalStyles } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';


const Home = ({ navigation }) => {
    const [review, setReview] = useState([
        { title: 'review 1', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'review 2', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'review 3', rating: 3, body: 'lorem ipsum', key: '3' }
    ])
    const [modalOpen, setModalOpen] = useState(false)
    const handlePress = () => {
        navigation.navigate('ReviewDetails')

    }

    const addReview = (newReview) => {
        let { title, rating, body } = newReview,
            key = Math.random().toString;

        setReview([...review, { title, rating, body, key }])
        setModalOpen(false)
    }
    return (
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home</Text>
            <Button title='GO To View Details' onPress={handlePress} /> */}
            <Modal visible={modalOpen}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            onPress={() => setModalOpen(false)}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                        />
                        {/* <Text>Hello From The Modal</Text> */}
                        <ReviewForm addReview={addReview} />

                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            <FlatList
                data={review}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        {/* <Text>{item.title}</Text> */}
                        <Card>
                            <Text>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>


                )}
            />

        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'


    },
    modalClose: {
        marginBottom: 0,
        marginTop: 10,
    },
    modalContent: {
        flex: 1
    }

})



