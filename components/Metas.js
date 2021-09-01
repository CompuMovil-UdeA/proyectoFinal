import React from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native';

const Metas = () => {
    return(
        <View style={styles.contenedor}>
            <Text style={styles.titulo}> Crear Meta </Text>

            <View style={styles.formulario}>
                <Text style={styles.subtitulos}>Nombre:</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.subtitulos}>Descripción:</Text>
                <TextInput
                style={styles.textArea}
                />



            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    
    contenedor: {
        margin: 20
    },

    formulario:{
        marginHorizontal: '2.5%'
    },

    titulo: {        
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 'bold'
    },
    
    subtitulos:{
        marginTop: 5,
        fontSize:14
    },

    input:{
        height: 40,
        marginVertical:5,
        borderWidth:1, 
        borderStyle: 'solid',
        borderColor: '#000'

    },

    textArea:{
        height: 80,
        marginVertical:5,
        borderWidth:1, 
        borderStyle: 'solid',
        borderColor: '#000'
    }
});

export default Metas;
