import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InicioScreen from './Screens/InicioScreen';
import FormularioScreen from './Screens/FormularioScreen';
import DetalleScreen from './Screens/DetalleScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Formulario" component={FormularioScreen} />
        <Stack.Screen name="Detalle" component={DetalleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
