import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioScreen from './Screens/InicioScreen';
import FormularioScreen from './Screens/FormularioScreen';
import DetalleScreen from './Screens/DetalleScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TareasScreen from './Screens/TareasScreen';
import LicenciaScreen from './Screens/LicenciaScreen';
import LicenciaApiScreen from './Screens/LicenciaApiScreen';
import PerfilScreen from './Screens/PerfilScreen';

const Stack = createNativeStackNavigator();
const Tab =  createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions= {({ route }) => ({
        tabBarIcon: ({color,size}) => {
          let iconName;

        if (route.name === 'Inicio'){
          iconName ="home";
        } else if (route.name === 'Detalle'){
          iconName = "search";
        } else if (route.name === 'Licencia API') {
          iconName = "card";
        }else if (route.name === 'Perfil'){
          iconName = "person";
        }
        return <Ionicons name={iconName} color = {color} size = {size}/>
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInnactiveTintColor: 'gray'
      })}
      >
        <Tab.Screen name="Inicio" component={InicioScreen} />
        <Tab.Screen name="Formulario" component={FormularioScreen} />
        <Tab.Screen name="Detalle" component={DetalleScreen} />
        <Tab.Screen name="Tareas" component={TareasScreen} />
        <Tab.Screen name="Licencia" component={LicenciaScreen} />
        <Tab.Screen name="Licencia API" component={LicenciaApiScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
