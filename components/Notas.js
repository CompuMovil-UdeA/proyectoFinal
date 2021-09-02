import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Button,
    TouchableHighlight,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Notas = () => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}> Crear Nota </Text>

            <View style={styles.formulario}>
                <Text style={styles.textoCrear}>Nombre:</Text>
                <TextInput style={styles.input} />

                <Text style={styles.textoCrear}>Descripción:</Text>
                <TextInput style={styles.textArea} />


                <TouchableHighlight style={styles.btnCrear}>
                    <Text style={styles.textoCrear}>Agregar Nota</Text>
                </TouchableHighlight>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        margin: 20,
    },

    formulario: {
        marginHorizontal: '2.5%',
    },

    titulo: {
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 'bold',
    },


    input: {
        height: 40,
        marginVertical: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        borderRadius: 10
    },

    textArea: {
        height: 80,
        marginVertical: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        borderRadius: 10
    },

    btnCrear: {
        backgroundColor: '#F76C3B',
        padding: 10,
        marginTop: '40%',
        marginBottom: '20%',
        borderRadius: 100
    },

    textoCrear: {
        color: '#000',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 100
    }
});

export default Notas;