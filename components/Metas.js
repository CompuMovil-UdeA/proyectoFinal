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

const Metas = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    /* Fecha Inicial*/
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = date => {
        const opciones = { year: 'numeric', month: 'long', day: '2-digit' };
        guardarFechaInicio(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    };

    /* Fecha Final*/
    const showDatePickerFinal = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePickerFinal = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirmDateFinal = date => {
        const opciones = { year: 'numeric', month: 'long', day: '2-digit' };
        guardarFechaFinal(date.toLocaleDateString('es-ES', opciones));
        hideDatePickerFinal();
    };

    const [fechaInicio, guardarFechaInicio] = useState('');
    const [fechaFinal, guardarFechaFinal] = useState('');

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}> Crear Meta </Text>

            <View style={styles.formulario}>
                <Text style={styles.subtitulos}>Nombre:</Text>
                <TextInput style={styles.input} />

                <Text style={styles.subtitulos}>Descripción:</Text>
                <TextInput style={styles.textArea} />

                <View>
                    <Text>Fecha de inicio:</Text>
                    <Text>{fechaInicio}</Text>
                    <Button title="Seleccionar fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>

                <View>
                    <Text>Fecha final:</Text>
                    <Text>{fechaFinal}</Text>
                    <Button title="Seleccionar fecha" onPress={showDatePickerFinal} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirmDateFinal}
                        onCancel={hideDatePickerFinal}
                    />
                </View>

                <TouchableHighlight style={styles.btnCrear}>
                    <Text style={styles.textoCrear}>Agregar Meta</Text>
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

    subtitulos: {
        marginTop: 5,
        fontSize: 14,
    },

    input: {
        height: 40,
        marginVertical: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
    },

    textArea: {
        height: 80,
        marginVertical: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
    },

    btnCrear: {
        backgroundColor: '#4483FA',
        padding: 10,
        marginTop: '40%',
        marginBottom: '20%'
    },

    textoCrear: {
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default Metas;
