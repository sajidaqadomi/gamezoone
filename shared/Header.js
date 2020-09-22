import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
    console.log('header in', title)
    const navigation = useNavigation()
    const handlePress = () => {
        navigation.openDrawer()

    }
    return (
        <ImageBackground style={styles.header} source={require('../assets/game_bg.png')}>
            <Entypo name="menu" size={28} color="black" style={styles.icon} onPress={handlePress} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImg} />
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>
        </ImageBackground>
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


    },
    icon: {
        position: 'absolute',
        left: 15

    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerImg: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
})
