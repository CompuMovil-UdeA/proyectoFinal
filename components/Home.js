import React from 'react'
import { StyleSheet, Button, View } from 'react-native';

const Home = ({navigation}) => {
    
    const irAmetas = () => {
        navigation.navigate('Metas')                
    }

    const irAnotas = () => {
        navigation.navigate('Notas')                
    }

    return(
        <View>            
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

export default Home;