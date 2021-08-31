import React from 'react'
import { Text, StyleSheet, Vie, Button, View } from 'react-native';

const Home = ({navigation}) => {
    
    const irAmetas = () => {
        navigation.navigate('Metas')                
    }

    const irAnotas = () => {
        navigation.navigate('Notas')                
    }

    return(
        <View style= {styles.contenedor}>            
            <Button 
                title= "Metas" 
                onPress = {
                    () => irAmetas()                    
                }   
                
            />

            <Button 
                title= "Notas" 
                onPress = {
                    () => irAnotas()                    
                }   
            />

        </View>
        
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        margin: '5%',   
    }
  });
  

export default Home;