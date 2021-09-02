import 'react-native-gesture-handler';
import React from 'react';

//react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
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
            component={Metas}s
         />
         <Stack.Screen
            name= "Notas"
            component= {Notas}
         />
         
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
