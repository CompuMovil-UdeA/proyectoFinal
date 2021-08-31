import 'react-native-gesture-handler';
import React from 'react';
import {  
  StyleSheet,
  Text,
} from 'react-native';

//react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../proyectoFinal/components/Home';
import Metas from './components/Metas';
import Notas from './components/Notas';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Home">
        <Stack.Screen
            name= "Home"
            component= {Home}
        />
         <Stack.Screen
            name= "Metas"
            component= {Metas}
         />
         <Stack.Screen
            name= "Notas"
            component= {Notas}
         />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  encabezado: {
    textAlign: 'center'
  }
});

export default App;
