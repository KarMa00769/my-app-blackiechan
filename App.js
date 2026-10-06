import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioScreen from './Screens/InicioScreen';
import FormularioScreen from './Screens/FormularioScreen';
import DetalleScreen from './Screens/DetalleScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TareasScreen from './Screens/TareasScreen';

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
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
