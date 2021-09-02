import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const image = { uri: "https://i.pinimg.com/474x/d3/11/80/d31180fcaee3dada725c1c2bf8c9b4c4--iphone--wallpaper-wallpaper-for.jpg" };

const Home = ({ navigation }) => {
    const irMetas = () => {
        navigation.navigate('Metas')
    }

    const irNotas = () => {
        navigation.navigate('Notas')
    }

    return (

        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

                <View style={styles.screen}>
                    <TouchableOpacity
                        onPress={
                            () => irMetas()
                        }
                        style={styles.roundButton1}>
                        <Text>METAS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={
                            () => irNotas()
                        }
                        style={styles.roundButton2}>
                        <Text>NOTAS</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    screen: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundButton1: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#E04281',
    },
    roundButton2: {
        marginTop: 20,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#F76C3B',
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
});